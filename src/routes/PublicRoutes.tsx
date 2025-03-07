import { Route, Routes } from "react-router-dom";
// import { UpdateTaskForm } from "../components/updateTaskForm";
import { TasksList } from "../components/TasksList";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksList />} />
      <Route path="/about" />
      {/* <Route path="/form/:id" element={<UpdateTaskForm />} /> */}
    </Routes>
  );
};
