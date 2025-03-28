import axios from "axios";
import { toast } from "sonner";
import { throwError } from "../utils/throwError";

export const login = async (user: { email: string; password: string }) => {
  try {
    const options = {
      method: "POST",
      url: "http://localhost:5100/users/login",
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
