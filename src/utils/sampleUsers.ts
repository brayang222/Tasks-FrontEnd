import { ROLES } from "../enum/roles.enu";
import { User } from "../schemas/Users";

export const initialUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: ROLES.ADMIN,
    password: "password123",
    created_at: new Date(),
    // avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    role: ROLES.USER,
    password: "password123",
    created_at: new Date(),
    // avatar: "/placeholder.svg?height=80&width=80",
  },
];
