import { Outlet } from "react-router-dom";
import { NavbarComponent } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
};
