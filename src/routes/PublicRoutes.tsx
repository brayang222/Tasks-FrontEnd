import { Route, Routes } from "react-router-dom";
import { TasksList } from "../components/tasks/TasksList";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import { NotFound } from "../components/NotFound";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
