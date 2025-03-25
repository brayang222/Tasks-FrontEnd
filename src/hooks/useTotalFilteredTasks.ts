import { useMemo } from "react";
import { STATUSES, Task } from "../schemas/Tasks";

export const useTotalFilteredTasks = (tasks: Task[]) => {
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

  return { totalTasks, in_progress, pending, completed, overdue, percentages };
};
