"use client";

import { Baskervville, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    Bell,
  CircleUser,
  Home,
  LogOut,
  MessageSquare,
  Plus,
  Search,
} from "lucide-react";
import { usePathname } from "next/navigation";


const montserrat = Baskervville({ weight: "400", subsets: ["latin"] });

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/dashboard",
  },
  {
    label: "Search",
    icon: Search,
    href: "/search",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
  },
  {
    label: "Notification",
    icon: Bell,
    href: "/notification",
  },
  {
    label: "Create",
    icon: Plus,
    href: "/create",
  },
  {
    label: "Profile",
    icon: CircleUser,
    href: "/profile",
  },
  {
    label: "Logout",
    icon: LogOut,
    href: "/",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white text-black">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Let's Talk
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-black  hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-black bg-black/5 font-bold"
                  : "text-black-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-sm bottom-0 flex  flex-col items-center justify-center">
              <p>Version 1.0</p>
              <p>Made by The Noob Programmer</p>
      </div>
    </div>
  );
};
