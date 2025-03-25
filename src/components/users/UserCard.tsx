import { User } from "../../schemas/Users";
import { deleteUser } from "../../services/users/deleteUser";
import { getRoleStyles } from "../../utils/getRoleStyles";
import { FormUser } from "../forms/FormUser";
import ModalWithForm from "../forms/ModalWithForm";

interface UserCardProps {
  user: User;
  onUpdate: () => void;
}

export function UserCard({ user, onUpdate }: UserCardProps) {
  const roleStyles = getRoleStyles(user.role as "user" | "admin");

  async function handleDeleteUser(e: React.FormEvent) {
    e.preventDefault();
    try {
      const deletedUser = await deleteUser(user.id as number);
      console.log(deletedUser);
      onUpdate();
      return deletedUser;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md shadow-secondary transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        {/* Avatar Section */}
        <div className="flex-shrink-0">
          {user.avatar ? (
            <img
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-sm"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 shadow-sm">
              <i
                className="icon-[zondicons--user] h-8 w-8"
                role="img"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        {/* User Info Section */}
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <div className="flex items-center mt-1 text-gray-500">
            <i
              className="icon-[lucide--mail] h-3.5 w-3.5 mr-1.5"
              role="img"
              aria-hidden="true"
            />
            <p className="text-sm">{user.email}</p>
          </div>

          <div className="flex items-center mt-3">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${roleStyles.bg} ${roleStyles.text} ${roleStyles.border} border`}
            >
              <i className="h-3 w-3 mr-1">{roleStyles.icon}</i>
              {user.role}
            </span>
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex sm:flex-col gap-2 sm:gap-3 ml-auto">
          <ModalWithForm
            classes="p-2 rounded-lg bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition-colors border border-gray-100 hover:border-indigo-200 cursor-pointer flex gap-2 items-center"
            localize={{
              title: "Editar usuario",
              buttonText: "Editar",
              description:
                "Haz los cambios de el usuario. Dale a 'guardar' cuando termines.",
            }}
            icon={
              <i
                className="icon-[tabler--pencil]"
                role="img"
                aria-hidden="true"
              />
            }
          >
            <FormUser user={user} onUpdate={onUpdate} variant="update" />
          </ModalWithForm>
          <button
            onClick={handleDeleteUser}
            aria-label={`Delete ${user.name}`}
            className="p-2 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-red-600 transition-colors border border-gray-100 hover:border-red-200"
          >
            <i
              className="icon-[iconamoon--trash]"
              role="img"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
