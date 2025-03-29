import { BACK_END_URL } from "../constants";
import { throwError } from "../utils/throwError";
import { toast } from "sonner";
import axios from "axios";

export const login = async (user: { email: string; password: string }) => {
  try {
    const options = {
      method: "POST",
      url: `ttps://${BACK_END_URL}/users/login`,
      data: user,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.request(options);
    toast.success("Sesión iniciada");

    return data;
  } catch (error) {
    throwError({ message: "No se pudo iniciar sesión", error });
  }
};
