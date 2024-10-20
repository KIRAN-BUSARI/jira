import { cn } from "@/lib/utils";
import { SettingsIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";
const routes = [
  {
    name: "Home",
    path: "",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    name: "My Tasks",
    path: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    name: "Members",
    path: "/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
  {
    name: "Members",
    path: "/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

export const Navigation = () => {
  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const isActive = false;
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <Link href={item.path} key={item.path}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.name}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
