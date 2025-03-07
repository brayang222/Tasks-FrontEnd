import { useEffect, useState } from "react";
import { Task } from "../../schemas/Tasks";
import { updateTask } from "../../services/updateTask";
import { User } from "../../schemas/Users";
import { getAllUsers } from "../../services/getAllUsers";
import { useModalContext } from "../../context/ModalContext";

export const FormUpdateTasks = ({
  task,
  onUpdate,
}: {
  task: Task;
  onUpdate: () => void;
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
      const taskUpdated = await updateTask(task.id as number, taskData);
      onUpdate();
      console.log(taskUpdated);
      closeModal();
      return taskUpdated;
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  }

  async function handleGetUsers() {
    try {
      const users = await getAllUsers();
      console.log(users);
      setUsers(users);
      return users;
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(`Campo cambiado: ${name}, Nuevo valor: ${value}`);
    setTaskData((prev) => ({
      ...prev,
      [name]: name === "user_id" ? Number(value) : value, // Convertir `user_id` a número
    }));
  };

  useEffect(() => {
    console.log("taskData actualizado:", taskData);
  }, [taskData]);

  useEffect(() => {
    setTaskData({
      user_id: task.user_id,
      title: task.title,
      description: task.description,
      status: task.status,
      due_date: task.due_date,
    });
  }, [task]);

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <form onSubmit={handleUpdateTask}>
      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 font-medium">
          Título
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={taskData.title}
          onChange={handleChange}
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
          defaultValue={taskData.description}
          onChange={handleChange}
          placeholder="Da una descripción detallada de la tarea"
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
        ></textarea>
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
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  );
};
