import { TOKEN_KEY } from "../constants";
import { removeToken } from "../store/token";

export const isAuthenticated = () => {
  try {
    const user = localStorage.getItem(TOKEN_KEY);
    if (!user) return { isAuth: false, user: "" };
    const payload = JSON.parse(user);

    return { isAuth: true, user: payload.user };
  } catch (error) {
    console.error(error);
    return { isAuth: false, user: "" };
  }
};

export const logOut = (navigate: (path: string) => void) => {
  removeToken();
  console.log("usuario deslogeado");

  navigate("/login");
  window.location.reload();
};
