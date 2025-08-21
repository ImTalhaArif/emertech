'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#services', label: 'Services' },
  { href: '#values', label: 'Values' },
  { href: '#discover', label: 'Discover' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-[#0A1F44] focus:px-3 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1F44] text-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between py-3">
            {/* Brand */}
            <Link href="/#top" className="flex items-center gap-2 no-underline">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A1F44] text-sm font-extrabold">
                EP
              </span>
              <span className="text-lg md:text-xl font-semibold">EmerTech Partners</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="no-underline text-white/90 hover:text-white transition-colors text-sm font-medium"
                >
                  {n.label}
                </a>
              ))}
              {/* ✅ CTA button present & visible */}
              <a
                href="#discover"
                className="no-underline rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0A1F44] shadow hover:bg-gray-100 transition"
              >
                Start 2-Week Discover
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <aside
            className="fixed right-0 top-0 bottom-0 z-[70] w-[84%] max-w-sm bg-white text-[#0A1F44] shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <span className="font-semibold">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-lg border border-[#0A1F44]/20"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-2">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="no-underline rounded-lg px-3 py-3 text-base hover:bg-[#0A1F44]/5"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#discover"
                onClick={() => setOpen(false)}
                className="no-underline mx-2 mt-2 rounded-xl bg-[#0A1F44] px-4 py-3 text-sm font-semibold text-white shadow hover:shadow-md"
              >
                Start 2-Week Discover
              </a>
            </nav>
          </aside>
        </>
      )}

      {/* Spacer for fixed header height */}
      <div className="h-16 md:h-16" />
    </>
  );
}