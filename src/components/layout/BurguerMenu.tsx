import { useState } from "react";
import { User } from "../../schemas/Users";
import { LinksNavbar } from "./LinksNavbar";

export default function BurgerMenu({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative sm:hidden">
      <button
        id="buger-button"
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <i
            className="icon-[tabler--x] text-white text-2xl"
            role="img"
            aria-hidden="true"
          />
        ) : (
          <i
            className="icon-[material-symbols--menu] text-white text-2xl"
            role="img"
            aria-hidden="true"
          />
        )}
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 mt-2 w-52 bg-secondary rounded-md shadow-lg p-10 z-10`}
      >
        <LinksNavbar className="text-primary" user={user} />
      </div>
    </div>
  );
}
