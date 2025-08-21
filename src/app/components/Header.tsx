"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide no-underline">
          DeployAI
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link
            href="#about"
            className="no-underline hover:text-blue-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="#expertise"
            className="no-underline hover:text-blue-300 transition-colors"
          >
            Expertise
          </Link>
          <Link
            href="#framework"
            className="no-underline hover:text-blue-300 transition-colors"
          >
            READY Framework
          </Link>
          <Link
            href="#contact"
            className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-xl shadow hover:bg-blue-100 transition-colors no-underline"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}