"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative md:w-[35%] mx-0 min-w-[200px]">
      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
        <FaMagnifyingGlass className="text-gray-400 dark:text-gray-50" />
      </div>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <input
        className="block w-full p-4 pl-14 text-sm  text-gray-900 custom-shadow rounded bg-white focus:outline-blue-900 dark:bg-[#2b3743]  dark:placeholder-gray-100 dark:text-gray-100" 
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString() || ""}
      />
    </div>
  );
}
