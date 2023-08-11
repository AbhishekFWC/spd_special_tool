"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ children, isOpen, closeModal }) => {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const portal = document.getElementById("portal");

  return mounted && portal
    ? createPortal(
        <>
          <div
            onClick={closeModal}
            className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
          >
            <div
              className="flex items-center justify-center"
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        </>,
        portal
      )
    : null;
};

export default Modal;
