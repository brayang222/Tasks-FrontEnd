import { useMemo } from "react";
import { STATUSES, Task } from "../../schemas/Tasks";

export const AsideTasks = ({ tasks }: { tasks: Task[] }) => {
  // const [filter, setFilter] = useState<Task[]>([]);

  const filteredTask = useMemo(() => {
    return {
      in_progress: tasks.filter((task) => task.status === STATUSES.IN_PROGRESS),
      pending: tasks.filter((task) => task.status === STATUSES.PENDING),
      completed: tasks.filter((task) => task.status === STATUSES.COMPLETED),
      overdue: tasks.filter((task) => task.status === STATUSES.OVERDUE),
    };
  }, [tasks]);

  const totalTasks = tasks.length || 1;
  const { in_progress, pending, completed, overdue } = filteredTask;

  const percentages = {
    in_progress: (in_progress.length / totalTasks) * 100,
    pending: (pending.length / totalTasks) * 100,
    completed: (completed.length / totalTasks) * 100,
    overdue: (overdue.length / totalTasks) * 100,
  };

  console.log(filteredTask);
  console.log();

  return (
    <aside className="min-h-screen w-72 border-r-2 border-dark flex flex-col gap-4">
      <div className="p-6 flex flex-col items-start w-full gap-5">
        <h3 className="text-dark text-2xl font-medium">Tareas</h3>
        <section className="flex flex-col w-full bg-shadow p-4 gap-2 rounded-md">
          <div className="flex justify-between *:text-dark w-full items-center">
            <span className="font-normal">Total tareas</span>
            <span className="font-bold text-2xl">{totalTasks}</span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-dark h-full rounded-full w-full"></div>
          </div>
        </section>
        <section className="flex flex-col w-full bg-shadow p-4 gap-2 rounded-md">
          <div className="flex justify-between w-full items-center">
            <span className="text-dark font-normal">Completadas</span>
            <span className="font-bold text-green-600 text-2xl">
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
            <span className="font-bold text-blue-600 text-2xl">
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
            <span className="font-bold text-yellow-600 text-2xl">
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
            <span className="font-bold text-red-600 text-2xl">
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
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-dark text-2xl font-medium pb-4">Prioridad</h3>
          <section className="flex w-full justify-between">
            <div className="w-full flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="text-dark font-normal">Alta</span>
            </div>
            <span className="text-dark font-medium">4</span>
          </section>
          <section className="flex w-full justify-between">
            <div className="w-full flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="text-dark font-normal">Media</span>
            </div>
            <span className="text-dark font-medium">2</span>
          </section>
          <section className="flex w-full justify-between">
            <div className="w-full flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-gray-500"></span>
              <span className="text-dark font-normal">Baja</span>
            </div>
            <span className="text-dark font-medium">2</span>
          </section>
        </div>
      </div>
    </aside>
  );
};
