import { useState } from "react";
import { Task } from "../../schemas/Tasks";
import { TaskCard } from "./TaskCard";

import { AsideTasks } from "./AsideTasks";
import { SearchTasks } from "./SearchTasks";
import { TasksHeader } from "./TasksHeader";
import { useFilteredTasks } from "../../hooks/useFilteredTasks";

export const TasksList = () => {
  const { isLoading, tasks, fetchTasks, filter, setFilter } =
    useFilteredTasks();
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  if (isLoading) {
    return (
      <div className="h-[100vh] w-full flex text-center text-3xl justify-center ">
        <h2>Cargando tareas...</h2>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row">
      <AsideTasks tasks={tasks} />
      <div className="flex flex-col p-6 gap-8 w-full bg-secondary">
        <TasksHeader setViewMode={setViewMode} fetchTasks={fetchTasks} />
        <SearchTasks filter={filter} setFilter={setFilter} tasks={tasks} />
        <div
          className={
            viewMode === "grid"
              ? "w-full h-full grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-content-start"
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
