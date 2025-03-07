export interface Task {
  id?: number;
  user_id: number;
  title: string;
  description: string;
  status: string;
  due_date: Date;
  created_at?: Date;
  updated_at?: Date;
}
