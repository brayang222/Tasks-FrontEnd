import axios from "axios";
import { throwError } from "../../utils/throwError";

export const getAllUsers = async () => {
  try {
    const options = {
      method: "GET",
      url: "http://localhost:5100/users",
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throwError({
      error,
      message: "Usando los ejemplos...",
    });
  }
};
