"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/components/site/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.45)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-sm font-bold text-white shadow-soft">
            TW
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-800 transition group-hover:text-sky-700 sm:text-base">
            Travel With North
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                isActive(link.href)
                  ? "bg-sky-50 text-sky-700"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-sky-700 md:inline-flex"
        >
          Plan My Trip
        </Link>
      </div>

      <nav className="border-t border-slate-200/70 px-4 pb-3 pt-2 md:hidden">
        <div className="flex gap-2 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-medium ${
                isActive(link.href)
                  ? "border-sky-200 bg-sky-50 text-sky-700"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
