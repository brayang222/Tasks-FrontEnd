import axios, { AxiosError } from "axios";
import { BACK_END_URL } from "../../constants";
import { getToken } from "../../store/token";

export const deleteUser = async (id: number) => {
  const token = getToken();
  const parsedToken = token ? JSON.parse(token) : null;

  try {
    const options = {
      method: "DELETE",
      url: `https://${BACK_END_URL}/users/delete/${id}`,
      headers: {
        Authorization: `Bearer ${parsedToken}`,
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
