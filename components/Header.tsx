"use client";

import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { User } from "@supabase/auth-helpers-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();

  const supabase = createClientComponentClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    router.refresh();

    if (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-bl from-platinum p-6 flex flex-col items-end",
        className
      )}
    >
      <div className="flex gap-x-4 items-center">
        {user ? (
          <div>
            <Button onClick={handleLogout} className="px-6 py-2">
              Logout
            </Button>
          </div>
        ) : (
          <>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="bg-transparent text-neutral-600 font-medium"
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button onClick={authModal.onOpen} className="px-6 py-2">
                Log in
              </Button>
            </div>
          </>
        )}
      </div>
      {children}
    </div>
  );
};

export default Header;
