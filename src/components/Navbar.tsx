import { Link } from "@heroui/react";
import { isAuthenticated } from "../utils/auth";
import { UserProfileDropdown } from "./users/UserProfileDropdown";
import { TaskFlowIcon } from "./TaskFlowIcon";

export const NavbarComponent = () => {
  const auth = isAuthenticated();
  // console.log(auth.user.name);

  return (
    <div className="bg-dark py-3 px-5 flex justify-between w-full border-b-2 z-10">
      <a href="/" className="flex items-center">
        <TaskFlowIcon
          classes={
            "bg-primary p-2 rounded-lg mr-2 flex items-center text-white"
          }
        />
      </a>
      {auth?.isAuth ? (
        <>
          <li className="hidden sm:flex gap-7 *:font-medium">
            <Link color="foreground" href="/tasks">
              Tareas
            </Link>
            {auth.user.role === "admin" ? (
              <Link color="foreground" aria-current="page" href="/admin/users">
                Users
              </Link>
            ) : (
              <></>
            )}
            <Link color="foreground" href="#">
              Mis Tareas
            </Link>
          </li>
          <UserProfileDropdown user={auth.user} />
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
    </div>
  );
};
