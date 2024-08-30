import React, { useEffect } from "react";
import "./about.css";
import { assets } from "../../assets/app";
import Feature from "../../components/feature/feature";

const About = () => {
  let aboutus =
    "Welcome to our website, a place where learning is free for everyone. We believe that education should be accessible to all, so we've gathered the best courses from YouTube and linked them here for you. Whether you're just starting or want to advance your skills, our platform offers a variety of courses in different subjects. Our goal is to make it easier for you to learn at your own pace, without any cost. Explore our courses and start learning today!";
  let vision =
    "Our Visionis to teach the Young Generation about the new Skills for developing the Creativity and Mindfundlness in the Youth and make them to work for their Country with the help of their professional Skills";
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - About";
  }, []);
  return (
    <>
      <div className="head">
        <img src={assets.about} alt="" />
        <div className="page-title">About</div>
      </div>
      <div className="about">
        <div className="text">
          <div className="title">About Us</div>
          <div className="text">{aboutus}</div>
        </div>
        <div className="image">
          <img src={assets.aboutus} alt="" />
        </div>
      </div>
      <div
        className="vision"
        style={{ backgroundImage: `url(${assets.vision})` }}
      >
        <div className="text">
          <div className="title">Our Vision</div>
          <div className="text">{vision}</div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="saying">
        <div className="text">
          <p className="quote">
            <span className="colr">"</span>Wisdom is not a product of schooling
            but of the lifelong attempt to acquire it.
            <span className="colr">"</span>
          </p>
          <p>
            <span className="colr">--</span>Albert Einstein
          </p>
        </div>
        <div className="image">
          <img src={assets.saying} alt="" />
        </div>
      </div>
      <div className="features">
        <Feature
          position={1}
          title="What Will You Discover?"
          desc="Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you."
          img={assets.f1}
          btnText="Browse Courses"
          btnlink="courses"
        />
        <Feature
          position={2}
          title="Online Learning Designed For Real Life"
          desc="Move your creative journey forward without putting life on hold. Skillshare's short online classes help you find inspiration that fits your routine."
          img={assets.f2}
          btnText="Explore Site"
          btnlink="category"
        />
        <Feature
          position={3}
          title="Learner outcomes"
          desc="87% of people learning for professional development report career benefits like getting a promotion, a raise, or starting a new career"
          img={assets.f3}
          btnText="Learn More"
          btnlink="about"
        />
      </div>
    </>
  );
};

export default About;
