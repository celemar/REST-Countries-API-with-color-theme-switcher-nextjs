"use client";
import React, { useState } from "react";

interface DropdownProps {
  onSelect: (region: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownItems = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleSelect = (region: string) => {
    setIsOpen(false);
  };

  return (
    <div className="relative ml-auto mt-8 px-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" bg-white dark:text-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-100 font-semibold rounded text-sm px-5 py-4 text-center inline-flex shadow items-center dark:bg-[#2b3743]"
        type="button"
      >
        Filter by Region
        <svg
          className="w-2.5 h-2.5 ms-3 ml-8"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="z-10 mt-1.5 absolute bg-white divide-y  divide-gray-100 rounded shadow w-[11.4rem] dark:bg-gray-700">
          <ul
            className="py-2 text-sm dark:text-gray-200"
            aria-labelledby="dropdownButton"
          >
            {dropdownItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleSelect(item)}
                  className="block w-full font-semibold text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#2b3743] dark:hover:text-white"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
