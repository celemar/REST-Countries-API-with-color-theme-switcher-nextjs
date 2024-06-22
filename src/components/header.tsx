import React from "react";
import ThemeSwitcher from "./theme-switch";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-[#2b3743] text-center sticky top-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
      <nav className="flex justify-between py-8 px-16 mx-auto dark:text-[#fff] text-sm md:text-base max-w-[1440px]">
        <Link href="/">
          <h1 className="font-extrabold text-base md:text-xl">
            Where is the world?
          </h1>
        </Link>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
