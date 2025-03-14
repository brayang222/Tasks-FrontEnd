import { useModal } from "../../hooks/useModal";

export const SearchTasks = () => {
  const { isOpen, handle, ref } = useModal();

  return (
    <section className="text-dark bg-light flex flex-col w-full h-30 border border-dark/30 rounded-md">
      <div className="flex flex-col m-4 gap-2">
        <div className="flex w-full gap-4 *:flex *:items-center *:border-dark *:border-2 *:text-xl *:p-2 *:gap-4 *:rounded-md">
          <search className="w-full">
            <i
              className="icon-[tdesign--search]"
              role="img"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Buscar tareas..."
              className="w-full h-full focus:outline-none"
            />
          </search>
          <div className="relative inline-block text-left" ref={ref}>
            <button
              className="flex items-center text-dark/50 cursor-pointer"
              onClick={handle}
            >
              <i
                className="icon-[lucide--filter] text-dark"
                role="img"
                aria-hidden="true"
              />
              Filter
            </button>

            {isOpen && (
              <div className="absolute top-full mt-1 right-2 z-10  w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Opción 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Opción 2
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Opción 3
                </a>
              </div>
            )}
          </div>
        </div>
        <h4 className="text-lg text-dark/60">Mostrando 8 tareas</h4>
      </div>
    </section>
  );
};
