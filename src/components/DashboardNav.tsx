"use client"

import { cn } from "@/lib/utils";
import { CreditCard, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItem = [
      { name: "Homepage", href: "/dashboard", icon: Home },
      { name: "Settings", href: "/dashboard/settings", icon: Settings },
      { name: "Billing", href: "/dashboard/billing", icon: CreditCard }
];

export default function DashboardNav() {
      const pathname = usePathname();
      console.log(pathname);
      return (
            <nav className="grid items-center gap-2">
                  {navItem.map((item, index) => (
                        <Link key={index} href={item.href}>
                              <span
                                    className={cn(
                                          "group flex items-center rounded-md px-3 py-2 text-lg font-medium hover:bg-accent ",
                                          pathname === item.href ? "bg-accent" : "bg-transparent"
                                    )}
                              >
                                    <item.icon className="mr-2 h-4 w-4" />
                                    <span>{item.name}</span>
                              </span>
                        </Link>
                  ))}
            </nav>
      );
}
