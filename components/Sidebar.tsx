"use client";

import React, { useMemo, useState } from "react";

import { HiHome } from "react-icons/hi";
import { BiSearch, BiPlus } from "react-icons/bi";
import { PiBellSimpleFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";

import { usePathname } from "next/navigation";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const sidebarWidth = sidebarOpen ? "18rem" : "4rem";

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
      {
        icon: PiBellSimpleFill,
        label: "Notifications",
        active: pathname === "/notifications",
        href: "/notifications",
      },
      {
        icon: FaUserAlt,
        label: "Profile",
        active: pathname === "/account",
        href: "/account",
      },
      {
        icon: BiPlus,
        label: "Add a project",
        active: pathname === "/add",
        href: "/add",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <main className="h-full flex-1 oveflow-y-auto py-2 ml-2 text-white">
        {children}
      </main>
      <div className="hidden md:flex flex-col gap-y-2 bg-rich-black h-full p-2 hover:w-[18rem] w-[4rem] transition-all duration-500">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.slice(0, -1).map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box>
          <div className="px-5 py-2">
            {React.createElement(SidebarItem, routes[routes.length - 1])}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <div className="h-full"></div>
        </Box>
      </div>
    </div>
  );
};

export default Sidebar;
