import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export default function AppRouter() {
  return (
    <div className="min-h-[100vh]">
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/admin/*" element={<PrivateRoutes />} />
      </Routes>
    </div>
  );
}
