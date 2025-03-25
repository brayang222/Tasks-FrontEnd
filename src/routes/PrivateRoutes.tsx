import { Navigate, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import UserList from "../components/users/UserList";
import { Layout } from "../components/layout/Layout";

export function PrivateRoutes() {
  const auth = isAuthenticated();
  console.log("Auth Status:", auth);

  if (!auth.isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" />
        <Route path="/users" element={<UserList />} />
      </Route>
    </Routes>
  );
}
