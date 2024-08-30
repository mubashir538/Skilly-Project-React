import Cookies from "js-cookie";

const setCookie = (response) => {
  Cookies.set("access_token", response.data.access, {
    expires: 1,
  });
  Cookies.set("refresh_token", response.data.refresh, { expires: 1 });
  Cookies.set("user", JSON.stringify(response.data.user), {
    expires: 1,
  });
};

export default setCookie;
