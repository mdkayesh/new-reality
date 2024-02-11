"use client";

import { ReactNode, useState } from "react";

type WrapperModalProps = {
  children: ReactNode;
  Button: ReactNode;
};

export const WrapperModal = ({ children, Button }: WrapperModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="wrapper-modal">
      {
        <div className="w-fit h-fit" onClick={() => setIsOpen(!isOpen)}>
          {Button}
        </div>
      }
      <div
        className={`${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } fixed inset-0 w-full min-h-screen flex justify-center items-center transition-all duration-500 p-6 z-50`}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm"
          onClick={onClose}
        ></div>
        <div
          className={`${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-3"
          } bg-bg-secondary-200 rounded-md shadow-lg relative z-50 transition-all duration-500 max-w-full max-h-full overflow-auto`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <div className="modal">
      <div
        className={`${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } fixed inset-0 w-full min-h-screen flex justify-center items-center transition-all duration-500 p-6 z-50`}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm"
          onClick={onClose}
        ></div>
        <div
          className={`${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-3"
          } bg-bg-secondary-200 rounded-md shadow-lg relative z-50 transition-all duration-500 max-w-full max-h-full overflow-auto`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
