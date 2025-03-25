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
        <div className="text-center mb-10 *:text-tertiary">
          <h1 className="text-3xl font-bold mb-2">Miembros</h1>
          <p className=" max-w-md mx-auto">
            Maneja los miembros de tú equipo, sus cuentas y permisos aquí.
          </p>
          <ModalWithForm
            classes="p-2 rounded-lg bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition-colors border border-gray-100 hover:border-indigo-200 cursor-pointer flex gap-2 items-center"
            localize={{
              title: "Crear usuario",
              buttonText: "Crear usuario",
              description: "Crea el usuario. Dale a 'guardar' cuando termines.",
            }}
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
