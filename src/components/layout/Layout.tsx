import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { NavbarComponent } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
};
