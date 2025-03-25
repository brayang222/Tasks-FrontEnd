import axios, { AxiosError } from "axios";
import { User } from "../../schemas/Users";

export const updateUser = async (id: number, user: User) => {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyYXlhbjNAZ21haWwuY29tIiwiaWF0IjoxNzQxNjUwMzg4LCJleHAiOjE3NDIyNTUxODh9._5VoKwj76G7zYu9XirejcY1cDdEaItBsrzlDLFVLRGc`;
  try {
    const options = {
      method: "PUT",
      url: `http://localhost:5100/users/update/${id}`,
      data: user,
      headers: {
        Authorization: `Bearer ${token}`,
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
