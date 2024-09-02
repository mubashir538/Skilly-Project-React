import React, { useEffect, useState } from "react";
import "./Category.css";
import CategorySection from "../../components/categorysection/categorysection";
import { assets } from "../../assets/app";
import axios from "axios";
import {getCategories} from "../../codes/api/Categories";
const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Category";
    getCategories(setCategories);
  }, []);

  return (
    <>
      <div className="page-title">Categories</div>
      <div className="categories">
        {categories.map((item, index) => (
          <CategorySection
            key={item.id}
            name={item.name}
            img={assets[item.img]}
            desc={item.desc}
          />
        ))}
      </div>
    </>
  );
};

export default Category;
