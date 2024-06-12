import React from "react";
import ThemeSwitcher from "./theme-switch";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-[#2b3743] border-b text-center">
      <nav className="flex justify-between py-8 px-8 mx-auto  dark:text-[#fff] text-sm md:text-base max-w-[1440px]">
        <Link href="/">
          <h1 className="font-extrabold text-base md:text-lg">
            Where is the world?
          </h1>
        </Link>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
