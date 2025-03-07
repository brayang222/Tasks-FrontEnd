import { Navigate, Route, Routes } from "react-router-dom";

const isAuthenticated = () => !!localStorage.getItem("token");

export function PrivateRoutes() {
  return isAuthenticated() ? (
    <Routes>
      <Route path="/" />
    </Routes>
  ) : (
    <Navigate to="/" />
  );
}
