import { Dispatch, SetStateAction } from "react";
import { STATUSES } from "../enum/statuses.enum";

export interface Task {
  id?: number;
  user_id: number;
  title: string;
  description: string;
  status: STATUSES;
  due_date: Date;
  created_at?: Date;
  updated_at?: Date;
}
export { STATUSES };

export interface TaskCardProps {
  task: Task;
  onUpdate: () => void;
  onStatusChange?: (id: number, status: STATUSES) => void;
}

export interface Filter {
  status?: STATUSES;
  title?: string | undefined;
}

export interface SearchTasksProps {
  setFilter: Dispatch<SetStateAction<Filter>>;
  filter: Filter;
  tasks: Task[];
}

export interface TasksHeaderProps {
  setViewMode: Dispatch<SetStateAction<"list" | "grid">>;
  fetchTasks: () => void;
}
