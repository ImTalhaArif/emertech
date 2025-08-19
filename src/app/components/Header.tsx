'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: 'about', label: 'About' },
    { href: 'expertise', label: 'Expertise' },
    { href: 'services', label: 'Services' },
    { href: 'values', label: 'Values' },
    { href: 'discover', label: 'Discover' },
    { href: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // offset for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#top" className="flex items-center gap-2">
          <span className="inline-block h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-semibold">
            EP
          </span>
          <span className="text-lg font-semibold tracking-tight">EmerTech Partners</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((n) => (
            <button
              key={n.href}
              onClick={() => scrollTo(n.href)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              {n.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('discover')}
            className="ml-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900"
          >
            Start 2-Week Discover
          </button>
        </nav>

        {/* Hamburger Button */}
        <button
          aria-label="Toggle Menu"
          className="rounded-xl p-2 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-72 bg-gray-900 shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close Menu" className="text-white">
                  ❌
                </button>
              </div>
              <nav className="flex flex-col gap-2 p-4">
                {navItems.map((n) => (
                  <button
                    key={n.href}
                    onClick={() => scrollTo(n.href)}
                    className="text-left rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-gray-800"
                  >
                    {n.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo('discover')}
                  className="mt-4 rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-black hover:bg-gray-200"
                >
                  Start 2-Week Discover
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
