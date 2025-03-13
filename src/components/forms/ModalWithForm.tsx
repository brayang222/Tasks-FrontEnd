import { ModalContext } from "../../context/ModalContext";
import { useModal } from "../../hooks/useModal";

interface Localize {
  title: string;
  buttonText: string;
  description: string;
}

export default function ModalWithForm({
  children,
  localize,
  classes,
  icon,
}: {
  children: React.ReactNode;
  localize: Localize;
  classes: string;
  icon?: React.ReactNode;
}) {
  const { isOpen, openModal, closeModal, ref } = useModal();
  return (
    <>
      <button className={classes} onClick={openModal}>
        {localize.buttonText}
        {icon && icon}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/55 flex items-center justify-center z-50">
          <div
            className="bg-primary text-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto p-6 shadow-xl"
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 id="modal-title" className="text-xl font-semibold">
                {localize.title}
              </h2>
              <button
                className="text-gray-400 hover:text-white hover:bg-red-600/60 px-4 py-2 rounded-3xl cursor-pointer"
                onClick={closeModal}
                aria-label="Close"
              >
                X
              </button>
            </div>

            <p className="text-gray-400 mb-6">{localize.description}</p>

            <ModalContext.Provider value={{ closeModal }}>
              {children}
            </ModalContext.Provider>
          </div>
        </div>
      )}
    </>
  );
}
