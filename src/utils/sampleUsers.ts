import { ROLES } from "../enum/roles.enum";
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
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: ROLES.USER,
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
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: ROLES.USER,
    password: "password123",
    created_at: new Date(),
    // avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: ROLES.ADMIN,
    password: "password123",
    created_at: new Date(),
    // avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    role: ROLES.USER,
    password: "password123",
    created_at: new Date(),
    // avatar: "/placeholder.svg?height=80&width=80",
  },
];
