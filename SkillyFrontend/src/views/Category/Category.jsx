import React from "react";
import "./Category.css";
import CategorySection from "../../components/categorysection/categorysection";
import { assets } from "../../assets/app";

const Category = () => {
  let cat = {};

  cat.name = "Business";
  cat.img = assets.business_cat;
  cat.desc = "This is a Category";
  let categories = [];
  for (let i = 0; i < 10; i++) {
    categories.push(cat);
  }
  return (
    <>
      <div className="page-title">Categories</div>
      <div className="categories">
        {categories.map((cat, index) => (
           <CategorySection
           key={index}
           name={cat.name}
           img={cat.img}
           desc={cat.desc}
         />
         
        ))}
      </div>
    </>
  );
};

export default Category;
