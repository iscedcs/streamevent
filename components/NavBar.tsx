"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/live-stream", label: "Live Stream" },
  { href: "/biography", label: "Biography" },
  { href: "/tributes", label: "Tributes" },
  { href: "/order-of-service", label: "Order of Service" },
  { href: "/gallery", label: "Photo Gallery" },
  // { href: "/survived-by", label: "Survived By" },
  { href: "/guestbook", label: "Guestbook" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={cn("shadow-md px-6 py-3 bg-white")}>
      <ul className="flex justify-between items-center space-x-4">
        <div className="max-w-4xl mx-auto justify-between md:flex w-full space-x-2 hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "hover:text-purple-800 font-semibold",
                  pathname === item.href ? "text-purple-600" : "text-gray-600"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </div>
        <Link className="md:hidden font-bold" href={"/"}>
          Home
        </Link>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"right"}>
            <div className="grid gap-4 pt-12">
              {navItems.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    asChild
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </ul>
    </nav>
  );
}