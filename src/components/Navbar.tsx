import { Link } from "@heroui/react";
import { isAuthenticated } from "../utils/auth";
import { UserProfileDropdown } from "./users/UserProfileDropDown";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const NavbarComponent = () => {
  const auth = isAuthenticated();
  console.log(auth.user.name);

  return (
    <div className="bg-black py-3 px-5 flex justify-between w-full border-b-2 z-10">
      <a href="/" className="flex items-center">
        <AcmeLogo />
        <p className="font-bold text-inherit">TASKS</p>
      </a>
      {auth?.isAuth ? (
        <>
          <li className="hidden sm:flex gap-7 *:font-medium">
            <Link color="foreground" href="#">
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
