import axios from "axios";

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

export default showCategoryMenu;