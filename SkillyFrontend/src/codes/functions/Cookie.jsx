import Cookies from "js-cookie";
import { assets } from "../../assets/app";

const setCookie = (response) => {
  Cookies.set("access_token", response.data.access, {
    expires: 1,
  });
  Cookies.set("refresh_token", response.data.refresh, { expires: 1 });
  Cookies.set("user", JSON.stringify(response.data.user), {
    expires: 1,
  });
};

const getUserIDfromCookie = () => {
  if (Cookies.get("user") == null) return null;
  let userid = (Cookies.get("user")).split('"')[2].split(":")[1].split(",")[0];
  return userid;
};

const getImage = (setProfile) => {
  if (Cookies.get("user") != null) {
    let user = Cookies.get("user");
    let values = user.split(",");
    let profile = values[4];
    let image = profile.split('"')[3];
    setProfile("http://127.0.0.1:8000" + image);
  } else {
    setProfile(assets.displaypic);
  }
};

const clearCookies = () => {
  localStorage.clear();
  Cookies.remove("refresh_token");
  Cookies.remove("user");
  Cookies.remove("access_token");
    
}

export { setCookie, getUserIDfromCookie, getImage, clearCookies };
