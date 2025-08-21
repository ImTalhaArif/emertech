"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-blue-700 shadow-lg z-50"
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">MyCompany</div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-medium">
          <li>
            <Link
              href="#about"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Button */}
        <Link
          href="#contact"
          className="bg-white text-blue-700 px-5 py-2 rounded-full shadow-md font-semibold hover:bg-gray-200 transition-colors duration-300"
        >
          Get Started
        </Link>
      </nav>
    </motion.header>
  );
}