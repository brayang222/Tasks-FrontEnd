import { BACK_END_URL } from "../../constants";
import axios, { AxiosError } from "axios";

export const getTaskById = async (id: number) => {
  try {
    const options = {
      method: "GET",
      url: `https://${BACK_END_URL}/tasks/${id}`,
      headers: {
        accept: "application/json",
      },
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      throw new Error("NOT_FOUND");
    }
    throw error;
  }
};
