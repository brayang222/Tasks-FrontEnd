import { Route, Routes } from "react-router-dom";
import { TasksList } from "../components/tasks/TasksList";
import UserList from "../components/users/UserList";
import { Login } from "../components/auth/login";
import { Register } from "../components/auth/register";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksList />} />
      <Route path="/about" />
      <Route path="/users" element={<UserList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
