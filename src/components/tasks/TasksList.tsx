import { useEffect, useState } from "react";
import { getAllTasks } from "../../services/getAllTasks";
import { STATUSES, Task } from "../../schemas/Tasks";
import { TaskCard } from "./TaskCard";
import { sampleTask } from "../../utils/sampleTasks";
import ModalWithForm from "../forms/ModalWithForm";
import { FormTasks } from "../forms/FormTasks";
import { AsideTasks } from "./AsideTasks";
import { SearchTasks } from "./SearchTasks";

export const TasksList = () => {
  const [tasks, setTasks] = useState(sampleTask);
  const [filter, setFilter] = useState<STATUSES | string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  async function fetchTasks() {
    try {
      const tasksData = await getAllTasks();
      if (filter === undefined) {
        setTasks(tasksData);
      } else if (
        filter &&
        Object.values(STATUSES).includes(filter as STATUSES)
      ) {
        setTasks(tasksData.filter((task: Task) => task.status === filter));
      } else {
        setTasks(tasksData.filter((task: Task) => task.title.includes(filter)));
      }
    } catch (error) {
      console.error("Error al obtener tareas:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
    console.log(filter);
    console.log(tasks);
  }, [filter]);

  if (isLoading) {
    return (
      <div className="h-[100vh] w-full flex text-center text-3xl justify-center ">
        <h2>Cargando tareas...</h2>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen flex">
      <AsideTasks tasks={tasks} />
      <div className="flex flex-col p-6 gap-8 w-full bg-secondary">
        <section className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h4 className="text-dark text-3xl font-bold">Mis Tareas</h4>
            <p className="text-dark/50 text-xl">Maneja y organiza tus tareas</p>
          </div>
          <div className="flex items-center gap-3 *:cursor-pointer">
            <button
              onClick={() => setViewMode("list")}
              className="border-[1px] flex items-center p-2 bg-light rounded-md"
            >
              <i
                className="icon-[tdesign--list] text-dark text-2xl"
                role="img"
                aria-hidden="true"
              />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className="border-[1px] flex items-center p-2 bg-light rounded-md"
            >
              <i
                className="icon-[proicons--grid] text-dark text-2xl"
                role="img"
                aria-hidden="true"
              />
            </button>
            <ModalWithForm
              classes="flex gap-2 items-center bg-primary text-white font-medium py-2 px-4 rounded-md transition-colors"
              localize={{
                title: "Crear",
                buttonText: "Crear tarea",
                description:
                  "Rellena todos los campos de la tarea. Dale a 'crear' cuando termines.",
              }}
              icon={
                <i
                  className="icon-[fluent-mdl2--circle-addition] text-xl"
                  role="img"
                  aria-hidden="true"
                />
              }
            >
              <FormTasks onUpdate={fetchTasks} variant="create" />
            </ModalWithForm>
          </div>
        </section>
        <SearchTasks setFilter={setFilter} filter={filter} />
        <div
          className={
            viewMode === "grid"
              ? "w-full h-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-start"
              : "w-full h-full flex flex-col gap-4"
          }
        >
          {tasks.map((task: Task) => (
            <TaskCard onUpdate={fetchTasks} task={task} key={task.id} />
          ))}
        </div>
      </div>
    </main>
  );
};
