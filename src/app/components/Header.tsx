'use client';

import Link from 'next/link'; import { useEffect, useState, useCallback } from 'react'; import { motion, AnimatePresence } from 'framer-motion';

const NAV = [ { href: '#about', label: 'About' }, { href: '#expertise', label: 'Expertise' }, { href: '#services', label: 'Services' }, { href: '#values', label: 'Values' }, { href: '#discover', label: 'Discover' }, { href: '#contact', label: 'Contact' }, ];

export default function Header() { const [open, setOpen] = useState(false);

// Lock body scroll when menu is open useEffect(() => { const { style } = document.documentElement; if (open) style.overflow = 'hidden'; else style.overflow = ''; return () => { style.overflow = ''; }; }, [open]);

// Close on ESC useEffect(() => { const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, []);

const smoothScroll = useCallback((hash: string) => { const el = document.querySelector(hash); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, []);

const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => { if (hash.startsWith('#')) { e.preventDefault(); setOpen(false); setTimeout(() => smoothScroll(hash), 10); } };

return ( <> {/* Skip link for accessibility */} <a
href="#top"
className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-[#0A1F44] focus:px-3 focus:py-2 focus:rounded-md"
> Skip to content </a>

{/* Header with slide-down entrance */}
  <motion.header
    initial={{ y: -64, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
    className="fixed top-0 left-0 right-0 z-50 bg-[#0A1F44] text-white shadow"
  >
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
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => onNavClick(e, n.href)}
              className="relative no-underline text-white font-medium text-sm transition-colors duration-300 group"
            >
              <span className="relative z-10 transition-colors group-hover:text-blue-400">{n.label}</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#discover"
            onClick={(e) => onNavClick(e, '#discover')}
            className="no-underline rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0A1F44] shadow hover:scale-105 hover:bg-gray-100 transition-transform duration-300"
          >
            Start 2-Week Discover
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:scale-105 transition-transform duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  </motion.header>

  {/* Spacer so content isn't hidden under fixed header */}
  <div className="h-16 md:h-16" />

  {/* Mobile slide-in sheet */}
  <AnimatePresence>
    {open && (
      <>
        <motion.div
          className="fixed inset-0 z-[60] bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        />

        <motion.aside
          className="fixed right-0 top-0 bottom-0 z-[70] w-[84%] max-w-sm backdrop-blur-lg bg-[#0A1F44]/80 text-white shadow-2xl flex flex-col"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="font-semibold">Menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="h-9 w-9 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="p-2 flex-1 overflow-y-auto">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => onNavClick(e, n.href)}
                className="relative no-underline block rounded-lg px-3 py-3 text-base text-white/95 group"
              >
                <span className="relative z-10 transition-colors group-hover:text-blue-400">{n.label}</span>
                <span className="absolute bottom-1 left-3 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </a>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10">
            <a
              href="#discover"
              onClick={(e) => onNavClick(e, '#discover')}
              className="no-underline block text-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0A1F44] shadow hover:scale-105 hover:bg-gray-100 transition-transform duration-300"
            >
              Start 2-Week Discover
            </a>
          </div>
        </motion.aside>
      </>
    )}
  </AnimatePresence>
</>

); }

