import { useState } from "react";
import { User } from "../../schemas/Users";
import { useModalContext } from "../../context/ModalContext";
import { updateUser } from "../../services/updateUser";
import { createUser } from "../../services/createUser";
import { ROLES } from "../../enum/roles.enu";
import { handleChange } from "../../utils/handleChange";

export const FormUser = ({
  user,
  onUpdate,
  variant,
}: {
  user?: User;
  onUpdate: () => void;
  variant: "create" | "update";
}) => {
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || ROLES.USER,
    phone: user?.phone || "",
    password: user?.password || "",
    avatar: user?.avatar || "",
  });
  const { closeModal } = useModalContext();

  async function handleCreateUser(e: React.FormEvent) {
    e.preventDefault();
    try {
      const createdUser = await createUser(userData);
      console.log(userData);
      onUpdate();
      closeModal();
      return createdUser;
    } catch (error) {
      console.log(userData);
      console.error("Error al crear usuario", error);
    }
  }

  async function handleUpdateUser(e: React.FormEvent) {
    e.preventDefault();
    try {
      const userUpdated = await updateUser(user?.id as number, userData);
      console.log(userData);
      console.log(userUpdated);
      onUpdate();
      closeModal();
      return userUpdated;
    } catch (error) {
      console.error("Error al actualizar el usuario");
    }
  }

  return (
    <form
      onSubmit={variant === "create" ? handleCreateUser : handleUpdateUser}
      className=" *:flex *:flex-col *:items-start"
    >
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 font-medium">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={userData.name}
          onChange={(e) => handleChange(e, setUserData)}
          required
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={userData.email}
          onChange={(e) => handleChange(e, setUserData)}
          required
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="phone" className="block mb-2 font-medium">
          Numero
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          defaultValue={userData.phone}
          onChange={(e) => handleChange(e, setUserData)}
          required
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      {variant === "create" ? (
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 font-medium">
            Clave
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={(e) => handleChange(e, setUserData)}
            required
            className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ) : (
        <></>
      )}

      <div className="mb-5">
        <label htmlFor="role" className="block mb-2 font-medium">
          Rol
        </label>
        <select
          id="role"
          name="role"
          required
          value={userData.role}
          onChange={(e) => handleChange(e, setUserData)}
          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        >
          <option>admin</option>
          <option>user</option>
          {/* {users &&
            users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.email}
              </option>
            ))} */}
        </select>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors cursor-pointer"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};
