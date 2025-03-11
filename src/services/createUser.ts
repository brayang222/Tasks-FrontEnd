import axios, { AxiosError } from "axios";
import { User } from "../schemas/Users";

export const createUser = async (user: User) => {
  try {
    const options = {
      method: "POST",
      url: "http://localhost:5100/users/register",
      data: user,
      headers: {
        "Content-Type": "application/json",
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
