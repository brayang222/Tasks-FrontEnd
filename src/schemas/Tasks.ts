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
