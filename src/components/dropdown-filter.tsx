"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const allowedRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleRegionChange = (region: string) => {
    const params = new URLSearchParams(searchParams);
    if (region) {
      params.set("region", region);
    } else {
      params.delete("region");
    }
    router.replace(`${pathname}?${params.toString()}`);
    setIsOpen(false); 
  };

  const hasFilter = searchParams.has("region");

  return (
    <div className="relative mt-8 md:mt-0">
      <button
        onClick={(e) => {
          if (!(e.target instanceof IoMdClose)) {
            setIsOpen(!isOpen);
          }
        }}
        className="bg-white dark:text-gray-100 focus:ring-2 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-100 font-semibold rounded text-sm p-4 inline-flex shadow items-center text-left dark:bg-[#2b3743] custom-shadow w-48 justify-between"
        type="button"
      >
        <span>
          {hasFilter ? searchParams.get("region") : "Filter by Region"}
        </span>
        {hasFilter ? (
          <IoMdClose
            className="w-4 h-4 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              router.push(pathname);
            }}
          />
        ) : (
          <IoIosArrowDown className="w-4 h-4 cursor-pointer" />
        )}
      </button>

      {isOpen && (
        <div className="z-10 mt-1.5 absolute bg-white rounded w-[12rem] dark:bg-[#2b3743] custom-shadow">
          <label
            htmlFor="region"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-100"
          >
            Select a region
          </label>

          <ul
            className="py-2 text-sm dark:text-gray-200"
            aria-labelledby="regionLabel"
          >
            {allowedRegions.map((region) => (
              <li key={region}>
                <button
                  value={region}
                  onClick={(e) => {
                    handleRegionChange(region);
                  }}
                  className="block w-full font-semibold text-left px-4 py-2 hover:bg-gray-100  dark:hover:bg-gray-700 focus:outline-blue-900 dark:hover:text-white"
                >
                  {region}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
