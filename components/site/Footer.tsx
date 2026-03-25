import Link from "next/link";
import { navLinks } from "@/components/site/navigation";

const socialLinks = [
  { href: "https://www.facebook.com", label: "Facebook" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.youtube.com", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Travel With North</h2>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Discover the valleys, lakes, and peaks of Northern Pakistan with
            curated, comfortable, and safe tour experiences.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
            Social
          </h3>
          <div className="flex gap-4 text-sm">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        {year} Travel With North. All rights reserved.
      </div>
    </footer>
  );
}
