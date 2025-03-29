import axios from "axios";
import { User } from "../../schemas/Users";
import { BACK_END_URL } from "../../constants";
import { throwError } from "../../utils/throwError";
import { getToken } from "../../store/token";

export const updateUser = async (id: number, user: User) => {
  const token = getToken();
  const parsedToken = token ? JSON.parse(token) : null;

  try {
    const options = {
      method: "PUT",
      url: `https://${BACK_END_URL}/users/update/${id}`,
      data: user,
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throwError({ message: "", error });
  }
};
