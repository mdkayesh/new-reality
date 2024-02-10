import React from "react";
import { FiSearch } from "react-icons/fi";

type SearchBarProps = {
  underline?: boolean;
};

const SearchBar = ({ underline = true }: SearchBarProps) => {
  return (
    <div className="search group flex-1 max-w-[280px]">
      <div
        className={`${underline ? "border-b-2" : ""}  flex gap-2 items-center`}
      >
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="py-2 bg-transparent outline-none w-full"
        />
        <button type="button" title="search" className="text-2xl">
          <FiSearch />
        </button>
      </div>
      {underline && (
        <div className="h-[2px] bg-primary -mt-[2px] relative z-10 w-0 group-focus-within:w-full transition-all duration-300" />
      )}
    </div>
  );
};

export default SearchBar;
