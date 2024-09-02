import axios from "axios";

const getCategories =async  (setItem, itemsize) => {
  await axios.get("http://127.0.0.1:8000/category").then(
    (res) => {
      let data = res.data.data;
      if (itemsize === undefined){
        itemsize = data.length
      }
      data.map((value, index) => {
        if (index < itemsize) {
          let cat = {
            id: value.id,
            name: value.name,
            img: value.image,
            desc: value.description,
          };
          setItem((prev) => [...prev, cat]);
        }
      });
    },
    (err) => {
      console.log(err);
    }
  );
};

const showCategoryMenu = (setcategory) => {
  axios
    .get("http://127.0.0.1:8000/category/")
    .then((res) => {
      res.data.data.map((value) => {
        let cat = {
          id: value.id,
          name: value.name,
        };

        setcategory((prev) => [...prev, cat]);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export {getCategories,showCategoryMenu};
