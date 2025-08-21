"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0A1F44] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          EP Consulting
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="#expertise" className="hover:text-gray-300 transition">
            Expertise
          </Link>
          <Link href="#services" className="hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="#contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="#discover"
          className="ml-4 bg-white text-[#0A1F44] px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Start 2-Week Discover
        </Link>
      </div>
    </header>
  );
}