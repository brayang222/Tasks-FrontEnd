import { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import { getAllUsers } from "../../services/users/getAllUsers";
import { User } from "../../schemas/Users";
import { FormUser } from "../forms/FormUser";
import ModalWithForm from "../forms/ModalWithForm";
import { initialUsers } from "../../utils/sampleUsers";

export default function UserList() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  async function fetchUsers() {
    try {
      const users = await getAllUsers();
      console.log(users);
      setUsers(users);
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br bg-secondary py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-3 items-center text-center mb-10 ">
          <h1 className="text-lg md:text-3xl font-bold mb-2 text-tertiary">
            Miembros
          </h1>
          <p className=" max-w-md mx-auto text-base md:text-md text-gray-600">
            Maneja los miembros de tú equipo, sus cuentas y permisos aquí.
          </p>
          <ModalWithForm
            classes="p-2 rounded-lg bg-primary text-white transition-colors cursor-pointer flex gap-2 items-center"
            localize={{
              title: "Crear usuario",
              buttonText: "Crear usuario",
              description: "Crea el usuario. Dale a 'guardar' cuando termines.",
            }}
            icon={
              <i
                className="icon-[fluent-mdl2--circle-addition] text-xl"
                role="img"
                aria-hidden="true"
              />
            }
          >
            <FormUser onUpdate={fetchUsers} variant="create" />
          </ModalWithForm>
        </div>

        <div className="grid gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onUpdate={() => fetchUsers()} />
          ))}
        </div>
      </div>
    </div>
  );
}
