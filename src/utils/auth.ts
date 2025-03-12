import { tokenKey } from "../constants";
import { removeToken } from "./token";

export const isAuthenticated = () => {
  try {
    const user = localStorage.getItem(tokenKey);
    if (!user) return { isAuth: false, role: "" };
    const payload = JSON.parse(user);
    console.log(payload);

    return { isAuth: true, role: payload.user.role };
  } catch (error) {
    console.error(error);
    return { isAuth: false, role: "" };
  }
};

export const logOut = (navigate: (path: string) => void) => {
  removeToken();
  console.log("usuario deslogeado");
  navigate("/login");
};
