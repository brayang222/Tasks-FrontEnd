import axios, { AxiosError } from "axios";

export const deleteTask = async (id: number) => {
  try {
    const options = {
      method: "DELETE",
      url: `http://localhost:5100/tasks/${id}`,
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
