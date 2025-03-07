import { getAllTasks } from "../services/getAllTasks";
import { useEffect, useState } from "react";
import { Task } from "../schemas/Tasks";
import { CardComponent } from "./CardComponent";

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchTasks() {
    try {
      const tasksData = await getAllTasks();
      setTasks(tasksData);
      console.log(tasksData);
    } catch (error) {
      console.error("Error al obtener tareas:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[100vh] w-full flex text-center text-3xl justify-center ">
        <h2>Cargando tareas...</h2>
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] p-6 grid grid-cols-3 gap-4 flex-wrap">
      {tasks.map((task: Task) => (
        <CardComponent task={task} key={task.id} onUpdate={fetchTasks} />
        // <h1>{task.title}</h1>
      ))}
    </div>
  );
};
