"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import HashNavLink from "./HashNavLink";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isSolid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        isSolid ? "bg-offwhite/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Logo variant={isSolid ? "dark" : "light"} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <HashNavLink
              key={link.href}
              href={link.href}
              className={`font-montserrat text-sm font-medium transition-colors hover:text-accent ${
                isSolid ? "text-navy/80" : "text-offwhite/85"
              }`}
            >
              {link.label}
            </HashNavLink>
          ))}
        </nav>

        <HashNavLink
          href="/#iletisim"
          className="hidden rounded-full bg-accent px-5 py-2.5 font-montserrat text-sm font-semibold text-offwhite transition-colors hover:bg-navy lg:inline-block"
        >
          Bize Ulaşın
        </HashNavLink>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
            isSolid ? "text-navy" : "text-offwhite"
          }`}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-navy/10 bg-offwhite px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <HashNavLink
                key={link.href}
                href={link.href}
                onNavigate={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-montserrat text-base font-medium text-navy/85 transition-colors hover:bg-navy/5 hover:text-accent"
              >
                {link.label}
              </HashNavLink>
            ))}
            <HashNavLink
              href="/#iletisim"
              onNavigate={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center font-montserrat text-sm font-semibold text-offwhite"
            >
              Bize Ulaşın
            </HashNavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
