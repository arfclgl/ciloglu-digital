"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type HashNavLinkProps = {
  /** e.g. "/#iletisim" or "/#cozumlerimiz" */
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

/**
 * Same-page hash links can silently no-op with next/link when the pathname
 * doesn't change (only the hash does). This falls back to a manual smooth
 * scroll when already on the target page, and defers to normal <Link>
 * navigation otherwise.
 */
export default function HashNavLink({
  href,
  className,
  children,
  onNavigate,
}: HashNavLinkProps) {
  const pathname = usePathname();
  const [path, hash] = href.split("#");

  if (hash && pathname === (path || "/")) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${hash}`);
      onNavigate?.();
    };

    return (
      <a href={`#${hash}`} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onNavigate}>
      {children}
    </Link>
  );
}
