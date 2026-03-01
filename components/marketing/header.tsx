"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 w-full transition-all duration-700 ease-out",
        scrolled ? "top-2" : "top-0"
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "flex items-center justify-between rounded-2xl py-5 transition-all duration-700 ease-out",
          scrolled
            ? "max-w-[85%] bg-white/80 backdrop-blur shadow-lg px-4 mx-auto"
            : "container mx-auto bg-transparent px-0"
        )}
      >
        <Link href="/" aria-label="Homepage">
          <Image
            src="/logo.png"
            alt="Company logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        <ul className="flex items-center gap-8">
          {["Home", "Features", "Resources"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-[#717171] hover:text-black transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact">
          <Button className="h-11 rounded-xl font-medium px-8 bg-btn-gradient">
            Contact Us
          </Button>
        </Link>
      </nav>
    </header>
  );
}