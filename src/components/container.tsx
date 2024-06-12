import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className=" mx-auto min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#202d36]">
      {children}
    </div>
  );
}
