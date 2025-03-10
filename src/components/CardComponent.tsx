import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@heroui/react";
import { Task } from "../schemas/Tasks";
import { deleteTask } from "../services/deleteTask";
import ModalTaskForm from "./ModalWithForm";
import { FormUpdateTasks } from "./forms/FormUpdateTasks";

export const CardComponent = ({
  task,
  onUpdate,
}: {
  task: Task;
  onUpdate: () => void;
}) => {
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

  return (
    <Card
      className="flex  bg-gray-900 rounded-3xl p-3"
      // as={Link}
      // href={`form/${task.id}`}
    >
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Tarea</p>
          <p className="text-small text-default-500">{task.title}</p>
        </div>
      </CardHeader>
      <Divider className="text-gray-600" />
      <CardBody>
        <p>{task.description}</p>
      </CardBody>
      <Divider className="text-gray-600" />
      <CardFooter className="flex flex-col gap-4">
        <h3 className="text-gray-400">Creado el: </h3>
        <p>{task.created_at?.toString().split("T")}</p>
        <button
          className="cursor-pointer"
          onClick={() => task?.id !== undefined && handleDeleteTask(task.id)}
        >
          Delete
        </button>
        <ModalTaskForm
          localize={{
            title: "Editar",
            buttonText: "Editar tarea",
            description:
              "Haz los cambios de la tarea. Dale a 'guardar' cuando termines.",
          }}
        >
          <FormUpdateTasks task={task} onUpdate={onUpdate} variant="update" />
        </ModalTaskForm>
      </CardFooter>
    </Card>
  );
};
