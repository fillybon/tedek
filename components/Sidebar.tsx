"use client";

import React, { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch, BiPlus } from "react-icons/bi";

import { usePathname } from "next/navigation";

import Box from "./Box";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

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
      <div className="hidden md:flex flex-col gap-y-2 bg-rich-black h-full w-[18rem] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.slice(0, 2).map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box>
          <div className="px-5 py-2">
            {React.createElement(SidebarItem, routes[2])}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <div className="h-full"></div>
        </Box>
      </div>
      <main className="h-full flex-1 oveflow-y-auto py-2 mr-2 text-white">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
