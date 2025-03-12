import { useEffect, useState } from "react";
import { STATUSES, Task } from "../../schemas/Tasks";
import { updateTask } from "../../services/updateTask";
import { User } from "../../schemas/Users";
import { getAllUsers } from "../../services/getAllUsers";
import { useModalContext } from "../../context/ModalContext";
import { createTask } from "../../services/createTask";
import { handleChange } from "../../utils/handleChange";

export const FormTasks = ({
  task,
  onUpdate,
  variant,
}: {
  task: Task;
  onUpdate: () => void;
  variant: "create" | "update";
}) => {
  const [users, setUsers] = useState<User[]>();
  const [taskData, setTaskData] = useState({
    user_id: task.user_id,
    title: task.title,
    description: task.description,
    status: task.status,
    due_date: task.due_date,
  });
  const { closeModal } = useModalContext();

  async function handleUpdateTask(e: React.FormEvent) {
    e.preventDefault();
    try {
      const taskUpdated = await updateTask(task?.id as number, taskData);
      onUpdate();
      console.log(taskUpdated);
      closeModal();
      return taskUpdated;
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  }

  async function handleCreateTask(e: React.FormEvent) {
    e.preventDefault();
    try {
      const taskCreated = await createTask(taskData);
      onUpdate();
      console.log(taskCreated);
      return taskCreated;
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  }

  async function handleGetUsers() {
    try {
      const users = await getAllUsers();
      setUsers(users);
      return users;
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  }

  useEffect(() => {
    handleGetUsers();
  }, []);

  if (variant === "create") {
    (task.title = ""), (task.description = "");
  }

  return (
    <form onSubmit={variant === "create" ? handleCreateTask : handleUpdateTask}>
      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 font-medium">
          Título
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={taskData.title}
          onChange={(e) => handleChange(e, setTaskData)}
          required
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="description" className="block mb-2 font-medium">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={taskData.description}
          onChange={(e) => handleChange(e, setTaskData)}
          placeholder="Da una descripción detallada de la tarea"
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
        ></textarea>
      </div>

      <div className="mb-5">
        <label htmlFor="status" className="block mb-2 font-medium">
          ESTADO:
        </label>
        <select
          id="status"
          name="status"
          required
          value={taskData.status}
          onChange={(e) => handleChange(e, setTaskData)}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        >
          {Object.values(STATUSES).map((status) => (
            <option value={String(status)} key={String(status)}>
              {String(status)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="user_id" className="block mb-2 font-medium">
          Usuario asignado
        </label>
        <select
          id="user_id"
          name="user_id"
          required
          value={taskData.user_id}
          onChange={(e) => handleChange(e, setTaskData)}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        >
          {users &&
            users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.email}
              </option>
            ))}
        </select>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors cursor-pointer"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  );
};
