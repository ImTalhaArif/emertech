'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#services', label: 'Services' },
  { href: '#values', label: 'Values' },
  { href: '#discover', label: 'Discover' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 6);
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-0.5 bg-[#0A1F44]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all',
          scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent',
        ].join(' ')}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between py-3">
            {/* Brand */}
            <Link
              href="/#top"
              className="flex items-center gap-2 no-underline"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A1F44] text-white text-sm font-extrabold">
                EP
              </span>
              <span className="text-lg md:text-xl font-semibold text-[#0A1F44]">
                EmerTech Partners
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="relative text-sm font-medium text-[#0A1F44]/80 hover:text-[#0A1F44] no-underline transition-colors"
                >
                  <span className="after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#0A1F44] after:transition-all hover:after:w-full">
                    {n.label}
                  </span>
                </a>
              ))}
              <a
                href="#discover"
                className="no-underline rounded-xl bg-[#0A1F44] px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md transition"
              >
                Start 2-Week Discover
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#0A1F44]/15 text-[#0A1F44]"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* subtle divider when scrolled */}
        <div className={scrolled ? 'h-px w-full bg-[#0A1F44]/10' : 'h-px w-full bg-transparent'} />
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-[70] w-[84%] max-w-sm bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <span className="text-[#0A1F44] font-semibold">Menu</span>
              <button
                aria-label="Close menu"
                className="h-9 w-9 rounded-lg border border-[#0A1F44]/15 text-[#0A1F44]"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-2 p-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="no-underline rounded-lg px-3 py-3 text-base font-medium text-[#0A1F44] hover:bg-[#0A1F44]/5"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#discover"
                onClick={() => setOpen(false)}
                className="no-underline mt-2 rounded-xl bg-[#0A1F44] px-4 py-3 text-sm font-semibold text-white shadow hover:shadow-md"
              >
                Start 2-Week Discover
              </a>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Spacer to offset fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}