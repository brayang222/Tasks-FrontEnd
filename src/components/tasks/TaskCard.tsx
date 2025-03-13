import { useEffect, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { STATUSES, Task } from "../../schemas/Tasks";
import { deleteTask } from "../../services/deleteTask";
import { FormTasks } from "../forms/FormTasks";
import ModalWithForm from "../forms/ModalWithForm";
import { getUserById } from "../../services/getUserById";
import { User } from "../../schemas/Users";

interface TaskCardProps {
  task: Task;
  onUpdate: () => void;
  onStatusChange?: (id: number, status: STATUSES) => void;
}

const getStatusColor = (status: STATUSES) => {
  switch (status) {
    case STATUSES.COMPLETED:
      return "bg-green-800 text-green-100";
    case STATUSES.IN_PROGRESS:
      return "bg-blue-800 text-blue-100";
    case STATUSES.PENDING:
      return "bg-yellow-800 text-yellow-100";
    case STATUSES.OVERDUE:
      return "bg-red-800 text-red-100";
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("es-CO", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // AM/PM
    timeZone: "America/Bogota",
  }).format(date);
};
export function TaskCard({ task, onUpdate, onStatusChange }: TaskCardProps) {
  const [user, setUser] = useState<User>();
  const statusColor = getStatusColor(task.status);
  const statusText =
    task.status.charAt(0).toUpperCase() +
    task.status.slice(1).replace("-", " ");

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

  useEffect(() => {
    handleGetUserById(task.user_id);
  }, []);

  const { isOpen, ref, handle } = useModal();

  return (
    <div className="w-full min-w-80 max-w-96 rounded-lg bg-dark border border-white shadow-md h-full flex flex-col ">
      <div className="p-4 flex justify-between items-start border-b border-gray-800">
        <div>
          <h3 className="font-medium text-lg text-white">{task.title}</h3>
          <span
            className={`inline-flex items-center px-2 py-1 mt-1 rounded-full text-xs ${statusColor}`}
          >
            {task.status === STATUSES.COMPLETED && (
              <i
                className="icon-[material-symbols--check-circle-rounded] mr-1 h-3 w-3"
                role="img"
                aria-hidden="true"
              />
            )}
            {task.status === STATUSES.IN_PROGRESS && (
              <i
                className="icon-[tabler--clock] mr-1 h-3 w-3"
                role="img"
                aria-hidden="true"
              />
            )}
            {statusText}
          </span>
        </div>

        <div className="relative" ref={ref}>
          <button
            onClick={handle}
            className="bg-gray-800 text-white px-3 py-0.5 rounded-lg cursor-pointer"
          >
            ...
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-10 border border-gray-700">
              <div className="py-1 px-2 text-sm text-gray-300 border-b border-gray-700">
                Acciones
              </div>
              <div className="py-1 *:cursor-pointer">
                <ModalWithForm
                  classes="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                  localize={{
                    title: "Editar",
                    buttonText: "Editar tarea",
                    description:
                      "Haz los cambios de la tarea. Dale a 'guardar' cuando termines.",
                  }}
                >
                  <FormTasks task={task} onUpdate={onUpdate} variant="update" />
                </ModalWithForm>
                <button
                  onClick={() =>
                    onStatusChange?.(task.id as number, STATUSES.COMPLETED)
                  }
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                >
                  Marcar completada
                </button>
                <button
                  onClick={() =>
                    onStatusChange?.(task.id as number, STATUSES.IN_PROGRESS)
                  }
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                >
                  Marcar en progreso
                </button>
                <button
                  onClick={() =>
                    onStatusChange?.(task.id as number, STATUSES.PENDING)
                  }
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                >
                  Marcar pendiente
                </button>
              </div>
              <div className="border-t border-gray-700 py-1">
                <button
                  onClick={() =>
                    task?.id !== undefined && handleDeleteTask(task.id)
                  }
                  className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 cursor-pointer"
                >
                  Eliminar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 text-gray-300 ">
        <p>{task.description}</p>
      </div>
      <div className="px-4 py-3 bg-gray-900 flex flex-col gap-2 mt-auto rounded-b-lg">
        <div className="flex items-center text-xs text-gray-400">
          <i
            className="icon-[tabler--calendar] mr-1 h-3 w-3"
            role="img"
            aria-hidden="true"
          />
          <span>{formatDate(task.due_date.toString())}</span>
        </div>

        {task.user_id && (
          <div className="flex items-center gap-2 text-right">
            <span className="text-xs text-gray-400">Asignada a:</span>
            <div className="p-2 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">
              {user?.name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
