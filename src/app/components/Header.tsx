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
    <header className="sticky top-0 z-50 border-bottom bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center py-2 px-3">
        {/* Logo */}
        <Link href="#top" className="d-flex align-items-center text-decoration-none">
          <span className="bg-dark text-white fw-bold d-inline-flex align-items-center justify-content-center rounded me-2" style={{width: '36px', height: '36px'}}>
            EP
          </span>
          <span className="fw-semibold fs-5 text-dark">EmerTech Partners</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="d-none d-md-flex gap-3">
          {navItems.map((n) => (
            <a key={n.href} href={`#${n.href}`} className="btn btn-sm btn-outline-dark">
              {n.label}
            </a>
          ))}
          <a href="#discover" className="btn btn-sm btn-dark text-white">Start 2-Week Discover</a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="btn btn-outline-dark d-md-none"
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
        className="offcanvas offcanvas-end bg-dark text-white"
        tabIndex={-1}
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header border-bottom border-secondary">
          <h5 className="offcanvas-title text-white" id="mobileMenuLabel">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-3">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={`#${n.href}`}
              className="btn btn-outline-light text-start"
              data-bs-dismiss="offcanvas"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#discover"
            className="btn btn-light text-dark fw-semibold"
            data-bs-dismiss="offcanvas"
          >
            Start 2-Week Discover
          </a>
        </div>
      </div>
    </header>
  );
}
