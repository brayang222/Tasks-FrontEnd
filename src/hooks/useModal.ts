import { useState, useRef } from "react";
import { useCloseModal } from "./useCloseModal";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useCloseModal(modalRef, isOpen, closeModal);

  return { isOpen, openModal, closeModal, modalRef };
};
