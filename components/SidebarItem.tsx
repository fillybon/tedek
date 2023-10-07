import Link from "next/link";
import type { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-merge relative h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white trasnition text-neutral-400 py-1",
        active && "text-white"
      )}
    >
      <Icon size={22} className="absolute -left-2" />
      <p className="truncate w-full ml-6">{label}</p>
    </Link>
  );
};

export default SidebarItem;
