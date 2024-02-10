"use client";

import { useState } from "react";
import { IoCaretDownSharp } from "react-icons/io5";
import CloseToOutClick from "./CloseToOutClick";
import Dropdown from "./Dropdown";

type SelectDropdownProps = {
  btnName: string;
  onSelect?: (value: string) => void;
  options: string[];
};

const SelectDropdown = ({
  btnName,
  onSelect,
  options,
}: SelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <CloseToOutClick
      onClose={() => setIsOpen(false)}
      isOpen={isOpen}
      className="flex-1 max-w-[185px]"
    >
      <div className="relative ">
        <button
          type="button"
          className="p-4 text-text-100 bg-bg-secondary-200 flex justify-between items-center w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{btnName}</span>
          <span>
            <IoCaretDownSharp />
          </span>
        </button>
        <Dropdown isOpen={isOpen}>
          <ul>
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  className="block hover:bg-bg-secondary-300 px-4 py-2 w-full text-left"
                  onClick={() => {
                    if (onSelect) onSelect(option);
                    setSelectedOption(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </CloseToOutClick>
  );
};

export default SelectDropdown;
