import { STATUSES } from "../enum/statuses.enum";
import { Task } from "../schemas/Tasks";

export const sampleTask: Task[] = [
  {
    id: 1,
    title: "Implement Authentication",
    description:
      "Add user login and registration functionality with JWT authentication and role-based access control.",
    status: STATUSES.IN_PROGRESS,
    due_date: new Date("2025-03-15"),
    user_id: 4,
  },
  {
    id: 2,
    title: "Design Database Schema",
    description:
      "Create a comprehensive database schema for the new project, including all necessary tables and relationships.",
    status: STATUSES.PENDING,
    due_date: new Date("2025-03-20"),
    user_id: 2,
  },
  {
    id: 3,
    title: "Develop API Endpoints",
    description:
      "Implement RESTful API endpoints for user management, task management, and authentication.",
    status: STATUSES.IN_PROGRESS,
    due_date: new Date("2025-03-25"),
    user_id: 3,
  },
  {
    id: 4,
    title: "Create Frontend Components",
    description:
      "Develop reusable React components for the user interface, including forms, buttons, and modals.",
    status: STATUSES.COMPLETED,
    due_date: new Date("2025-03-10"),
    user_id: 1,
  },
  {
    id: 5,
    title: "Write Unit Tests",
    description:
      "Write unit tests for all critical components and functions to ensure code quality and reliability.",
    status: STATUSES.OVERDUE,
    due_date: new Date("2025-03-05"),
    user_id: 5,
  },
];
