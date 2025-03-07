import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { NotFound } from "../components/NotFound";

export default function AppRouter() {
  return (
    <div className="min-h-[100vh]">
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/dashboard/*" element={<PrivateRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
