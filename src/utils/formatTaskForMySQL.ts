import { Task } from "../schemas/Tasks";

export const formatTaskForMySQL = (task: Task) => {
  return {
    ...task,
    due_date: new Date(task.due_date)
      .toLocaleString("sv-SE", { timeZone: "UTC" })
      .replace("T", " "), // Convierte al formato MySQL (YYYY-MM-DD HH:MM:SS)
  };
};
