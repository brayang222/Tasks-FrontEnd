import { Route, Routes } from "react-router-dom";
import { TasksList } from "../components/tasks/TasksList";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import { NotFound } from "../components/NotFound";
import LandingPage from "../components/landing/Langing";
import { Layout } from "../components/Layout";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks" element={<TasksList />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
