import axios, { AxiosError } from "axios";
import { BACK_END_URL } from "../../constants";

export const deleteTask = async (id: number) => {
  try {
    const options = {
      method: "DELETE",
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
