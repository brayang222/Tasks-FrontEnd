import { Link } from "@heroui/react";
import { isAuthenticated } from "../../utils/auth";
import { TaskFlowIcon } from "../TaskFlowIcon";
import { UserProfileDropdown } from "../users/UserProfileDropdown";
import BurgerMenu from "./BurguerMenu";
import { LinksNavbar } from "./LinksNavbar";

export const NavbarComponent = () => {
  const auth = isAuthenticated();

  return (
    <nav className="bg-dark py-3 px-5 flex items-center text-center justify-between w-full border-b-2 z-10">
      <a href="/" className="flex items-center">
        <TaskFlowIcon
          classes={
            "bg-primary p-2 rounded-lg mr-2 flex items-center text-white"
          }
        />
      </a>
      {auth?.isAuth ? (
        <>
          <div className="hidden sm:flex">
            <LinksNavbar className="text-secondary" user={auth.user} />
          </div>
          <section className="flex items-center">
            <UserProfileDropdown user={auth.user} />
            <BurgerMenu user={auth.user} />
          </section>
        </>
      ) : (
        <div className="flex gap-4 *:font-medium">
          <Link href="/login" color="foreground">
            Login
          </Link>
          <Link color="foreground" href="/register">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};
