"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/biography", label: "Biography" },
  { href: "/order-of-service", label: "Order of Service" },
  { href: "/gallery", label: "Photo Gallery" },
  { href: "/survived-by", label: "Survived By" },
];

export function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 bg-white shadow-md transition-transform duration-300 z-50",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Elder David Okoobo Ovienria
        </Link>
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "default" : "ghost"}
              asChild
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
