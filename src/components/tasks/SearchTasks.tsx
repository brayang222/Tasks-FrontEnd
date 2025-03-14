import { useModal } from "../../hooks/useModal";
import { STATUSES } from "../../enum/statuses.enum";
import { handleChange } from "../../utils/handleChange";
import { SearchTasksProps } from "../../schemas/Tasks";

export const SearchTasks = ({ setFilter, filter }: SearchTasksProps) => {
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
              name="title"
              placeholder="Buscar tareas..."
              className="w-full h-full focus:outline-none"
              onChange={(e) => handleChange(e, setFilter)}
            />
          </search>
          <div className="relative inline-block text-left" ref={ref}>
            <button
              className="flex items-center text-dark/50 cursor-pointer gap-4 text-nowrap"
              onClick={handle}
            >
              <i
                className="icon-[lucide--filter] text-dark"
                role="img"
                aria-hidden="true"
              />
              {filter.status ? filter.status : "Todas"}
            </button>

            {isOpen && (
              <div className="absolute top-full mt-1 right-2 z-10  w-48 bg-white border border-gray-200 rounded-md shadow-lg *:cursor-pointer">
                <p
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setFilter({ ...filter, status: undefined })}
                >
                  Todas
                </p>
                <p
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() =>
                    setFilter({ ...filter, status: STATUSES.COMPLETED })
                  }
                >
                  {STATUSES.COMPLETED}
                </p>
                <p
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() =>
                    setFilter({ ...filter, status: STATUSES.IN_PROGRESS })
                  }
                >
                  {STATUSES.IN_PROGRESS}
                </p>
                <p
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() =>
                    setFilter({ ...filter, status: STATUSES.PENDING })
                  }
                >
                  {STATUSES.PENDING}
                </p>
              </div>
            )}
          </div>
        </div>
        <h4 className="text-lg text-dark/60">Mostrando 8 tareas</h4>
      </div>
    </section>
  );
};
