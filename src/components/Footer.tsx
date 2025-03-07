import { FormUpdateTasks } from "./forms/FormUpdateTasks";
import ModalWithForm from "./ModalWithForm";

export const Footer = () => {
  function onUpdate() {
    console.log("Updated");
  }

  const task = {
    user_id: 0,
    title: "",
    description: "",
    status: "PENDING",
    due_date: new Date("2025-03-10"),
  };

  return (
    <div className="flex justify-center h-20 w-full bg-black place-items-center">
      Footer
      <ModalWithForm
        localize={{
          title: "Crear",
          buttonText: "Crear tarea",
          description:
            "Rellena todos los campos de la tarea. Dale a 'crear' cuando termines.",
        }}
      >
        <FormUpdateTasks task={task} onUpdate={onUpdate} variant="create" />
      </ModalWithForm>
    </div>
  );
};
