import axios, { AxiosError } from "axios";

export const getAllUsers = async () => {
  try {
    const options = {
      method: "GET",
      url: "http://localhost:5100/users",
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
