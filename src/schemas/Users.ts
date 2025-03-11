import { ROLES } from "../enum/roles.enu";

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
