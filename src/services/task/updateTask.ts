import { BACK_END_URL } from "../../constants";
import { formatTaskForMySQL } from "../../utils/formatTaskForMySQL";
import { Task } from "../../schemas/Tasks";
import axios, { AxiosError } from "axios";

export const updateTask = async (id: number, task: Task) => {
  const formattedTask = formatTaskForMySQL(task);
  try {
    const options = {
      method: "PUT",
      url: `https://${BACK_END_URL}/tasks/${id}`,
      data: formattedTask,
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
