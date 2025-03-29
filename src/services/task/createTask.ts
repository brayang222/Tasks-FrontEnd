import { BACK_END_URL } from "../../constants";
import { formatTaskForMySQL } from "../../utils/formatTaskForMySQL";
import { Task } from "../../schemas/Tasks";
import axios, { AxiosError } from "axios";

export const createTask = async (task: Task) => {
  try {
    const formattedTask = formatTaskForMySQL(task);

    const options = {
      method: "POST",
      url: `https://${BACK_END_URL}/tasks`,
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
