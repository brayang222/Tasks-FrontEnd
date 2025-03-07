import axios, { AxiosError } from "axios";
import { Task } from "../schemas/Tasks";
import { formatTaskForMySQL } from "../utils/formatTaskForMySQL";

export const createTask = async (task: Task) => {
  try {
    const formattedTask = formatTaskForMySQL(task);

    const options = {
      method: "POST",
      url: "http://localhost:5100/tasks",
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
