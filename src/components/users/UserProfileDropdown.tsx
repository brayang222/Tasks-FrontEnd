import { User } from "../../schemas/Users";
import { logOut } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";

export function UserProfileDropdown({ user }: { user: User }) {
  const navigate = useNavigate();
  const { isOpen, handle, ref } = useModal();

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="relative z-10" ref={ref}>
      {/* Dropdown Trigger */}
      <button
        onClick={handle}
        className="flex items-center gap-2 rounded-full p-1 transition-colors ease-linear hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200 ">
          {user.avatar ? (
            <img
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-sm font-medium text-primary">
              {getInitials(user.name)}
            </span>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 rounded-md border border-dark bg-secondary shadow-lg"
          role="menu"
        >
          <div className="p-4 border-b border-dark">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-dark">
                {user.avatar ? (
                  <img
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-sm font-medium text-light">
                    {getInitials(user.name)}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-dark">{user.name}</span>
                <span className="text-xs text-dark">{user.email}</span>
              </div>
            </div>
          </div>

          <div className="p-2 ">
            <button
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-dark hover:bg-gray-100 cursor-pointer transition-colors ease-linear"
              role="menuitem"
            >
              <i
                className="icon-[iconamoon--profile-bold]"
                role="img"
                aria-hidden="true"
              />
              <span>Profile</span>
            </button>

            <button
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-dark hover:bg-gray-100 cursor-pointer transition-colors ease-linear"
              role="menuitem"
            >
              <i
                className="icon-[lucide--settings]"
                role="img"
                aria-hidden="true"
              />
              <span>Settings</span>
            </button>

            <button
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-red-600 hover:bg-gray-100 cursor-pointer transition-colors ease-linear"
              role="menuitem"
              onClick={() => logOut(navigate)}
            >
              <i
                className="icon-[icon-park-outline--logout]"
                role="img"
                aria-hidden="true"
              />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
