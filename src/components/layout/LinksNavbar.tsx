import { Link } from "@heroui/react";
import { User } from "../../schemas/Users";

export const LinksNavbar = ({
  user,
  className,
}: {
  user: User;
  className: string;
}) => {
  return (
    <>
      <li className="flex flex-col sm:flex-row gap-7 *:font-medium">
        <Link className={className} href="/">
          Inicio
        </Link>
        <Link className={className} href="/tasks">
          Tareas
        </Link>
        {user.role === "admin" ? (
          <Link className={className} aria-current="page" href="/admin/users">
            Usuarios
          </Link>
        ) : (
          <></>
        )}
        <Link className={className} href="#">
          Mis Tareas
        </Link>
      </li>
    </>
  );
};
