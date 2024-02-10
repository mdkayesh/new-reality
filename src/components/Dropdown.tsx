"use client";
import React, { ReactNode } from "react";

type DropdownProps = {
  isOpen: boolean;
  className?: string;
  children: ReactNode;
};
const Dropdown = ({ isOpen, children, className }: DropdownProps) => {
  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 translate-y-2 invisible"
      } dropdown absolute top-full left-0 min-w-[160px] w-full bg-bg-secondary-200 transition-all duration-300 z-50 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
