import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function BackBtn() {
  return (
    <Link href="/">
      <button className="flex items-center py-1 px-5 bg-white shadow-md gap-2 dark:bg-[#2b3743] dark:text-white">
        {" "}
        <IoArrowBack />
        <span className="text-sm">Back</span>{" "}
      </button>
    </Link>
  );
}
