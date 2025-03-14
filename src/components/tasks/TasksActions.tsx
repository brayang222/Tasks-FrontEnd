import { STATUSES } from "../../enum/statuses.enum";
import { useModal } from "../../hooks/useModal";
import { Task } from "../../schemas/Tasks";
import { FormTasks } from "../forms/FormTasks";
import ModalWithForm from "../forms/ModalWithForm";

export interface TasksActionsProps {
  task: Task;
  fetchTasks: any;
  handleDeleteTask: any;
  onStatusChange: any;
}

export const TasksActions = ({
  task,
  fetchTasks,
  handleDeleteTask,
  onStatusChange,
}: TasksActionsProps) => {
  const { isOpen, ref, handle } = useModal();

  return (
    <section className="relative" ref={ref}>
      <button
        onClick={handle}
        className="bg-shadow text-dark px-3 py-0.5 rounded-lg cursor-pointer"
      >
        ...
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-light rounded-md shadow-lg z-10 border border-gray-700 *:text-dark">
          <div className="py-1 px-2 text-md font-bold border-b border-gray-700">
            Acciones
          </div>
          <div className="py-1 *:cursor-pointer">
            <ModalWithForm
              classes="block w-full text-left px-4 py-2 text-sm hover:bg-shadow"
              localize={{
                title: "Editar",
                buttonText: "Editar tarea",
                description:
                  "Haz los cambios de la tarea. Dale a 'guardar' cuando termines.",
              }}
            >
              <FormTasks task={task} onUpdate={fetchTasks} variant="update" />
            </ModalWithForm>
            <button
              onClick={() =>
                onStatusChange?.(task.id as number, STATUSES.COMPLETED)
              }
              className="block w-full text-left px-4 py-2 text-sm hover:bg-shadow"
            >
              Marcar completada
            </button>
            <button
              onClick={() =>
                onStatusChange?.(task.id as number, STATUSES.IN_PROGRESS)
              }
              className="block w-full text-left px-4 py-2 text-sm hover:bg-shadow"
            >
              Marcar en progreso
            </button>
            <button
              onClick={() =>
                onStatusChange?.(task.id as number, STATUSES.PENDING)
              }
              className="block w-full text-left px-4 py-2 text-sm hover:bg-shadow"
            >
              Marcar pendiente
            </button>
          </div>
          <div className="border-t border-gray-700 py-1 ">
            <button
              onClick={() =>
                task?.id !== undefined && handleDeleteTask(task.id)
              }
              className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-dark cursor-pointer"
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
