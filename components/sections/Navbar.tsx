"use client";

import { useState, useCallback } from "react";
import { SITE_META, NAV_LINKS } from "@/config/site.config";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <nav className="w-full px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-base"
               style={{ background: "var(--gradient-cta)" }}>
            P
          </div>
          <span className="font-display text-xl font-bold text-white transition-all">
            {SITE_META.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-lg text-[#8a8a8a] hover:text-[#ffffff] hover:bg-white/5 transition-all duration-200 text-sm font-medium block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="btn-outline px-5 py-2 rounded-xl text-sm font-semibold">
            View Plans
          </a>
          <a
            href="#pricing"
            className="btn-primary px-5 py-2 rounded-xl text-sm font-semibold animate-[glowPulse_3s_ease-in-out_infinite]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""} md:hidden glass border-b border-white/5`}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-2.5 px-3 rounded-lg text-[#8a8a8a] hover:text-[#ffffff] hover:bg-white/5 transition-all text-left block"
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" onClick={closeMenu} className="btn-primary mt-3 py-3 rounded-xl text-center font-semibold block">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}