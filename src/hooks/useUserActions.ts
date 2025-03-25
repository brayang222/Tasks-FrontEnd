import { useState } from "react";
import { deleteTask } from "../services/task/deleteTask";
import { getUserById } from "../services/users/getUserById";
import { User } from "../schemas/Users";

export const useUserActions = (onUpdate: () => void) => {
  const [user, setUser] = useState<User>();

  async function handleDeleteTask(id: number) {
    try {
      const taskDeleted = await deleteTask(id);
      onUpdate();
      console.log("Tarea eliminada, ID: ", id, taskDeleted);
      return taskDeleted;
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  }

  async function handleGetUserById(id: number) {
    try {
      const userGetted = await getUserById(id);
      setUser(userGetted[0]);

      return userGetted;
    } catch (error) {
      console.error(error);
    }
  }

  return { handleDeleteTask, user, handleGetUserById };
};
