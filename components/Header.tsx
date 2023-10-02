"use client";

import Image from "next/image";
import { RedirectType, redirect } from "next/navigation";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-full h-[5rem] bg-steel-blue p-[.5rem] fixed top-0">
      <div className="flex flex-row justify-between items-center">
        <div
          className="flex gap-x-1 items-center cursor-pointer"
          onClick={() => redirect("/", "push" as RedirectType)}
        >
          <Image src={"/tedek.png"} alt="Logo" width={64} height={64} />
          <h1 className="text-[2rem]">TEDEK</h1>
        </div>
        <SearchBar />
        <div className="flex flex-row gap-x-3"></div>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
