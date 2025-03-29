import axios from "axios";
import { throwError } from "../../utils/throwError";
import { BACK_END_URL } from "../../constants";

export const getAllUsers = async () => {
  try {
    const options = {
      method: "GET",
      url: `https://${BACK_END_URL}/users`,
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
