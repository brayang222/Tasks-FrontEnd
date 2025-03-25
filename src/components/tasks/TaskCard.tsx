import { STATUSES, TaskCardProps } from "../../schemas/Tasks";
import { formatDate } from "../../utils/formatDate";
import { getStatusColor } from "../../utils/getStatusColor";
import { TasksActions } from "./TasksActions";
import { useUserActions } from "../../hooks/useUserActions";
import { useEffect } from "react";

export function TaskCard({ task, onUpdate, onStatusChange }: TaskCardProps) {
  const { handleDeleteTask, handleGetUserById, user } =
    useUserActions(onUpdate);

  const statusColor = getStatusColor(task.status);
  const statusText =
    task.status.charAt(0).toUpperCase() +
    task.status.slice(1).replace("-", " ");

  useEffect(() => {
    handleGetUserById(task.user_id as number);
  }, []);

  return (
    <div className="w-full rounded-lg bg-light border-2 border-dark shadow-md flex flex-col">
      <div className="p-4 flex justify-between items-start border-b border-gray-800">
        <div>
          <h3 className="font-medium text-xl text-dark">{task.title}</h3>
        </div>
        <TasksActions
          task={task}
          fetchTasks={onUpdate}
          handleDeleteTask={handleDeleteTask}
          onStatusChange={onStatusChange}
        />
      </div>
      <div className="p-4 text-dark/80 w-full ">
        <p>{task.description}</p>
      </div>
      <div className="px-4 py-3 bg-light flex flex-col gap-2 mt-auto rounded-b-lg">
        <div className="flex items-center text-dark justify-between">
          <div className="flex gap-2 items-center">
            <i
              className="icon-[tabler--calendar] min-w-4 min-h-4"
              role="img"
              aria-hidden="true"
            />
            <span className="text-dark/50 text-base">
              {formatDate(task.due_date.toString())}
            </span>
          </div>
          <span
            className={`flex items-center px-3 py-1.5 rounded-full text-base gap-2 text-nowrap ${statusColor}`}
          >
            {task.status === STATUSES.COMPLETED && (
              <i
                className="icon-[material-symbols--check-circle-rounded]"
                role="img"
                aria-hidden="true"
              />
            )}
            {task.status === STATUSES.IN_PROGRESS && (
              <i
                className="icon-[tabler--clock]"
                role="img"
                aria-hidden="true"
              />
            )}
            {statusText}
          </span>
        </div>

        {task.user_id && (
          <div className="flex items-center gap-2 text-right">
            <div className="flex border-x-2 border-y-1 border-black items-center py-1 px-2 rounded-full gap-2 *:text-nowrap">
              <span className="text-xs text-dark/60">Asignada a:</span>
              <div className="py-1 px-2  rounded-full bg-shadow flex items-center justify-center text-xs text-dark">
                {user?.name || "Jon Doe"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
