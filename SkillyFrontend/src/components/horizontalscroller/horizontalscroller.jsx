import React, { Children } from "react";
import "./horizontalscroller.css";
import { useRef, useState } from "react";

const HorizontalScroller = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    const scrollContainer = scrollContainerRef.current;
    setIsDown(true);
    scrollContainer.classList.add("active");
    setStartX(e.pageX - scrollContainer.offsetLeft);
    setScrollLeft(scrollContainer.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    scrollContainerRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    setIsDown(false);
    scrollContainerRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const scrollContainer = scrollContainerRef.current;
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 3;
    scrollContainer.scrollLeft = scrollLeft - walk;
  };
  return (
    <div
      className="hscroller"
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default HorizontalScroller;
