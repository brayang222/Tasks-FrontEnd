import { useEffect, useState } from "react";
import { sampleTask } from "../utils/sampleTasks";
import { getAllTasks } from "../services/task/getAllTasks";
import { Filter, Task } from "../schemas/Tasks";

export const useFilteredTasks = () => {
  const [tasks, setTasks] = useState(sampleTask);
  const [filter, setFilter] = useState<Filter>({
    status: undefined,
    title: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  async function fetchTasks() {
    try {
      const tasksData = await getAllTasks();
      const filteredTasks = filterTasks(tasksData);
      setTasks(filteredTasks);
    } catch (error) {
      console.error("Error al obtener tareas:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const filterTasks = (tasksData: Task[]) => {
    let filteredTasks = tasksData;

    if (filter.status) {
      filteredTasks = filteredTasks.filter(
        (task: Task) => task.status === filter.status
      );
    }
    if (filter.title) {
      filteredTasks = filteredTasks.filter((task: Task) =>
        task.title.toLowerCase().includes(filter.title?.toLowerCase() as string)
      );
    }

    return filteredTasks;
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  return { isLoading, tasks, fetchTasks, filter, setFilter };
};
