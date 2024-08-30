import React, { useEffect, useState } from "react";
import "./Category.css";
import CategorySection from "../../components/categorysection/categorysection";
import { assets } from "../../assets/app";
import axios from "axios";
const Category = () => {
  let cat = {};
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skilly - Category";
    axios
      .get("http://127.0.0.1:8000/category")
      .then((res) => {
        let data = res.data.data;
        data.map((value) => {
          let cat = {
            id: value.id,
            name: value.name,
            img: value.image,
            desc: value.description,
          };
          setCategories((prev) => [...prev, cat]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
