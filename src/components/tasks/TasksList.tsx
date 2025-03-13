import { getAllTasks } from "../../services/getAllTasks";
import { useEffect, useState } from "react";
import { Task } from "../../schemas/Tasks";
import { TaskCard } from "./TaskCard";
import { sampleTask } from "../../utils/sampleTasks";
import ModalWithForm from "../forms/ModalWithForm";
import { FormTasks } from "../forms/FormTasks";

export const TasksList = () => {
  const [tasks, setTasks] = useState(sampleTask);
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

  function onUpdate() {
    console.log("Updated");
  }

  if (isLoading) {
    return (
      <div className="h-[100vh] w-full flex text-center text-3xl justify-center ">
        <h2>Cargando tareas...</h2>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center pt-5">
      <ModalWithForm
        classes="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        localize={{
          title: "Crear",
          buttonText: "Crear tarea",
          description:
            "Rellena todos los campos de la tarea. Dale a 'crear' cuando termines.",
        }}
      >
        <FormTasks onUpdate={onUpdate} variant="create" />
      </ModalWithForm>
      <div className="w-full h-full p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center">
        {tasks.map((task: Task) => (
          <TaskCard onUpdate={fetchTasks} task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};
