import { ModalContext } from "../context/ModalContext";
import { useModal } from "../hooks/useModal";

interface Localize {
  title: string;
  buttonText: string;
  description: string;
}

export default function ModalWithForm({
  children,
  localize,
}: {
  children: React.ReactNode;
  localize: Localize;
}) {
  const { isOpen, openModal, closeModal, modalRef } = useModal();

  return (
    <>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        onClick={openModal}
      >
        {localize.buttonText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/55 flex items-center justify-center z-50">
          <div
            className="bg-primary text-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto p-6 shadow-xl"
            ref={modalRef}
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
