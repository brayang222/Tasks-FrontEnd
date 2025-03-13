import { FormTasks } from "./forms/FormTasks";
import ModalWithForm from "./forms/ModalWithForm";

export const Footer = () => {
  function onUpdate() {
    console.log("Updated");
  }
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
        <FormTasks onUpdate={onUpdate} variant="create" />
      </ModalWithForm>
    </div>
  );
};
