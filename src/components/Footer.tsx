import { STATUSES, Task } from "../schemas/Tasks";
import { FormTasks } from "./forms/FormTasks";
import ModalWithForm from "./forms/ModalWithForm";

export const Footer = () => {
  function onUpdate() {
    console.log("Updated");
  }

  const task: Task = {
    user_id: 0,
    title: "",
    description: "",
    status: STATUSES.PENDING,
    due_date: new Date("2025-03-10"),
  };

  return (
    <div className="flex justify-center h-20 w-full bg-black place-items-center">
      Footer
      <ModalWithForm
        classes="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        localize={{
          title: "Crear",
          buttonText: "Crear tarea",
          description:
            "Rellena todos los campos de la tarea. Dale a 'crear' cuando termines.",
        }}
      >
        <FormTasks task={task} onUpdate={onUpdate} variant="create" />
      </ModalWithForm>
    </div>
  );
};
