"use client";

import React, { ReactNode, useEffect, useRef } from "react";

type CloseToOutClickProps = {
  children: ReactNode;
  onClose: () => void;
  className?: string;
  isOpen: boolean;
};

const CloseToOutClick = ({
  children,
  onClose,
  className,
  isOpen,
}: CloseToOutClickProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(event.target);
      const ref = containerRef.current! as HTMLDivElement;
      if (ref && !ref?.contains(event.target as Node)) {
        onClose();
      }
    };
    if (!isOpen) return;

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose, isOpen]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default CloseToOutClick;
