import { Navigate, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import UserList from "../components/users/UserList";

export function PrivateRoutes() {
  const auth = isAuthenticated();
  console.log("Auth Status:", auth);

  if (!auth.isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="/" />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
}
