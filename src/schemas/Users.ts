import { ROLES } from "../enum/roles.enum";

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
  role?: ROLES;
  avatar?: string;
  created_at?: Date;
}
