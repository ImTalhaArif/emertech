'use client';

import Link from 'next/link';

export default function Header() {
  const navItems = [
    { href: 'about', label: 'About' },
    { href: 'expertise', label: 'Expertise' },
    { href: 'services', label: 'Services' },
    { href: 'values', label: 'Values' },
    { href: 'discover', label: 'Discover' },
    { href: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A1F44] shadow-md">
      <div className="mx-auto max-w-7xl flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="#top" className="flex items-center text-white font-bold text-xl">
          <span className="bg-white text-[#0A1F44] font-extrabold rounded-full flex items-center justify-center w-10 h-10 mr-2">
            EP
          </span>
          EmerTech Partners
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={`#${n.href}`}
              className="text-white hover:text-gray-200 transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#discover"
            className="ml-4 bg-white text-[#0A1F44] px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-100"
          >
            Start 2-Week Discover
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className="offcanvas offcanvas-end bg-[#0A1F44] text-white"
        tabIndex={-1}
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header border-b border-gray-600">
          <h5 className="offcanvas-title text-white">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body flex flex-col gap-4">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={`#${n.href}`}
              className="text-white hover:text-gray-200"
              data-bs-dismiss="offcanvas"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#discover"
            className="bg-white text-[#0A1F44] px-4 py-2 rounded-lg font-semibold shadow"
            data-bs-dismiss="offcanvas"
          >
            Start 2-Week Discover
          </a>
        </div>
      </div>
    </header>
  );
}