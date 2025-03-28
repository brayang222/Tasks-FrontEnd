import { Task } from "../../schemas/Tasks";
import { useTotalFilteredTasks } from "../../hooks/useTotalFilteredTasks";

export const AsideTasks = ({ tasks }: { tasks: Task[] }) => {
  const { totalTasks, in_progress, pending, completed, overdue, percentages } =
    useTotalFilteredTasks(tasks);

  return (
    <aside className="md:min-h-screen min-w-72 border-r-2 border-dark flex flex-col *:md:p-5 *:p-2">
      <h3 className="text-dark text-lg md:text-2xl font-medium">Tareas</h3>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
        <section className="flex flex-col w-full bg-shadow p-4 gap-2 rounded-md">
          <div className="flex justify-between *:text-dark w-full items-center">
            <span className="font-normal">Total tareas</span>
            <span className="font-bold text-lg md:text-2xl">{totalTasks}</span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-dark h-full rounded-full w-full"></div>
          </div>
        </section>
        <section className="flex flex-col w-full bg-shadow p-4 gap-2 rounded-md">
          <div className="flex justify-between w-full items-center">
            <span className="text-dark font-normal">Completadas</span>
            <span className="font-bold text-green-600  text-lg md:text-2xl">
              {completed.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div
              className={`bg-green-600 h-full rounded-full`}
              style={{ width: `${percentages.completed}%` }}
            ></div>
          </div>
        </section>
        <section className="flex flex-col w-full bg-shadow p-4 gap-2 rounded-md">
          <div className="flex justify-between w-full items-center">
            <span className="text-dark font-normal">En progreso</span>
            <span className="font-bold text-blue-600 text-lg md:text-2xl">
              {in_progress.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full"
              style={{ width: `${percentages.in_progress}%` }}
            ></div>
          </div>
        </section>
        <section className="flex flex-col w-full bg-shadow p-4 gap-2 rounded-md">
          <div className="flex justify-between w-full items-center">
            <span className="text-dark font-normal">Pendientes</span>
            <span className="font-bold text-yellow-600 text-lg md:text-2xl">
              {pending.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-yellow-600 h-full rounded-full"
              style={{ width: `${percentages.pending}%` }}
            ></div>
          </div>
        </section>
        <section className="flex flex-col w-full bg-shadow p-4 gap-2 rounded-md">
          <div className="flex justify-between w-full items-center">
            <span className="text-dark font-normal">Atrasado</span>
            <span className="font-bold text-red-600 text-lg md:text-2xl">
              {overdue.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-red-600 h-full rounded-full"
              style={{ width: `${percentages.overdue}%` }}
            ></div>
          </div>
        </section>
      </div>
      <h3 className="text-dark text-lg md:text-2xl font-medium">Prioridad</h3>
      <div className="flex flex-row md:flex-col justify-center gap-2 w-full *:text-sm md:text-2xl *:px-2 *:py-1 *:rounded-xl">
        <section className="flex w-full justify-between bg-red-300">
          <div className="w-full flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="text-dark font-normal ">Alta</span>
          </div>
          <span className="text-dark font-medium">4</span>
        </section>
        <section className="flex w-full justify-between bg-yellow-300">
          <div className="w-full flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="text-dark font-normal ">Media</span>
          </div>
          <span className="text-dark font-medium">2</span>
        </section>
        <section className="flex w-full justify-between bg-gray-300">
          <div className="w-full flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-gray-500"></span>
            <span className="text-dark font-normal ">Baja</span>
          </div>
          <span className="text-dark font-medium">2</span>
        </section>
      </div>
    </aside>
  );
};
