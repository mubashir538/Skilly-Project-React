import axios from "axios";

const signupAPI = async (formData) => {
  const response = await axios.post("http://127.0.0.1:8000/signup/", formData, {
    Headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

export default signupAPI;
