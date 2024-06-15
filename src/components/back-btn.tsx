import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function BackBtn() {
  return (
    <Link href="/">
      <button className="flex items-center py-2 px-8 bg-white custom-shadow gap-2 dark:bg-[#2b3743] dark:text-[#f7ffff] transition duration-200 ease-in-out hover:bg-[#EBEBEB] dark:hover:bg-[#394b5b]">
        <IoArrowBack />
        <span className="text-sm">Back</span>
      </button>
    </Link>
  );
}
// #394b5b
// transition background-color .2s ease;