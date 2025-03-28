import ModalWithForm from "../forms/ModalWithForm";
import { FormTasks } from "../forms/FormTasks";
import { TasksHeaderProps } from "../../schemas/Tasks";

export const TasksHeader = ({ setViewMode, fetchTasks }: TasksHeaderProps) => {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-3">
      <div className="flex flex-col gap-1">
        <h4 className="text-dark text-lg md:text-3xl font-bold">Mis Tareas</h4>
        <p className="text-dark/50 text-md md:text-xl">
          Maneja y organiza tus tareas
        </p>
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
  );
};
