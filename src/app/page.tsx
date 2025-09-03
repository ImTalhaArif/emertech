'use client';

import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// NAV items
const NAV = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#services', label: 'Services' },
  { href: '#ready', label: 'READY Method' },
  { href: '#values', label: 'Values' },
  { href: '#discover', label: 'Discover' },
  { href: '#contact', label: 'Contact' },
];

// Carousel slides
const SLIDES = [
  {
    title: 'Shaping the Future with Emerging Tech',
    desc: 'We partner with businesses to unlock AI, Web3, and Cloud innovations.',
    img: '/images/slide1.jpg',
  },
  {
    title: 'Transforming Ideas into Scalable Products',
    desc: 'From startups to enterprises, we build digital experiences that wow.',
    img: '/images/slide2.jpg',
  },
  {
    title: 'Your Innovation Partner',
    desc: 'We align cutting-edge technology with your business vision.',
    img: '/images/slide3.jpg',
  },
];

// READY Method cards
const READY = [
  {
    letter: 'R',
    title: 'Reality Check',
    items: [
      'Audit your digital wasteland',
      'Map skill gaps (they’re bigger than you think)',
      'Document process chaos',
      'Measure readiness score',
    ],
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    letter: 'E',
    title: 'Elevate Foundation',
    items: [
      'Build cloud-first architecture',
      'Create secure data highways',
      'Establish collaboration platforms',
      'Set governance guardrails',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    letter: 'A',
    title: 'Activate Intelligence',
    items: [
      'Structure data for AI consumption',
      'Build real-time dashboards',
      'Train teams on data literacy',
      'Create insight workflows',
    ],
    gradient: 'from-pink-500 to-red-500',
  },
  {
    letter: 'D',
    title: 'Deploy & Integrate',
    items: [
      'Select AI tools that actually work',
      'Integrate with existing systems',
      'Train AI champions internally',
      'Launch pilot programs',
    ],
    gradient: 'from-red-500 to-orange-500',
  },
  {
    letter: 'Y',
    title: 'Yield Results',
    items: [
      'Monitor performance metrics',
      'Optimize and iterate',
      'Scale successful implementations',
      'Measure ROI relentlessly',
    ],
    gradient: 'from-indigo-500 to-purple-700',
  },
];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const { style } = document.documentElement;
    style.overflow = open ? 'hidden' : '';
    return () => {
      style.overflow = '';
    };
  }, [open]);

  const smoothScroll = useCallback((hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (hash.startsWith('#')) {
      e.preventDefault();
      setOpen(false);
      setTimeout(() => smoothScroll(hash), 10);
    }
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A1F44]/80 backdrop-blur-md text-white shadow"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between py-3">
            {/* Brand */}
            <Link href="/#top" className="flex items-center gap-2 no-underline">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A1F44] text-sm font-extrabold">
                EP
              </span>
              <span className="text-lg md:text-xl font-semibold">
                EmerTech Partners
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={(e) => onNavClick(e, n.href)}
                  className="relative no-underline text-white hover:text-blue-400 text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#discover"
                onClick={(e) => onNavClick(e, '#discover')}
                className="no-underline rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0A1F44] shadow hover:bg-gray-100 transition"
              >
                Start 2-Week Discover
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <div className="h-16 md:h-16" />

      {/* Hero Carousel */}
      <section id="top" className="relative w-full h-[85vh] overflow-hidden">
        {SLIDES.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: index === i ? 1 : 0,
              scale: index === i ? 1 : 1.05,
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                {slide.desc}
              </p>
              <a
                href="#discover"
                onClick={(e) => onNavClick(e, '#discover')}
                className="inline-block rounded-xl bg-white px-6 py-3 text-sm md:text-base font-semibold text-[#0A1F44] shadow hover:bg-gray-100 transition"
              >
                Start Your Journey
              </a>
            </div>
          </motion.div>
        ))}

        {/* Arrows */}
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full ${
                index === i ? 'bg-white' : 'bg-white/50'
              } transition`}
            />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4 text-[#0A1F44]">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          We are EmerTech Partners — your ally in embracing AI, Web3, and Cloud
          innovation.
        </p>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#0A1F44]">
          Our Expertise
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          From concept to deployment, we cover full-stack development, AI
          engineering, and digital product design.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4 text-[#0A1F44]">Services</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          We craft web apps, mobile solutions, and AI-powered platforms tailored
          to your needs.
        </p>
      </section>

      {/* READY Method */}
      <section id="ready" className="py-20 bg-[#0A1F44] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">The READY Method™</h2>
          <p className="max-w-3xl mx-auto text-gray-300 mb-12">
            Not another framework collecting dust. A battle-tested system that
            transforms chaos into AI-ready organizations. We&apos;ve done this
            200+ times. Here&apos;s how.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {READY.map((step, i) => (
              <motion.div
                key={step.letter}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 text-left shadow-lg bg-gradient-to-br ${step.gradient}`}
              >
                <span className="text-2xl font-extrabold mb-3 block">
                  {step.letter}
                </span>
                <h3 className="font-semibold mb-3">{step.title}</h3>
                <ul className="text-sm space-y-1 opacity-90">
                  {step.items.map((it, j) => (
                    <li key={j}>• {it}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-white/10 rounded-xl p-6 max-w-3xl mx-auto">
            <h4 className="font-semibold text-lg mb-2">
              Why READY Works When Others Fail
            </h4>
            <p className="text-gray-300 text-sm">
              Because we don&apos;t just implement AI tools. We rebuild your
              entire digital nervous system to support them. Think of it as
              renovating your house before installing smart home technology —
              not just screwing sensors into crumbling walls.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#0A1F44]">Values</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Integrity, innovation, and impact drive everything we do.
        </p>
      </section>

      {/* Discover */}
      <section id="discover" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4 text-[#0A1F44]">
          Discover Program
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Try our 2-week discovery sprint to explore how tech can accelerate
          your business goals.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#0A1F44]">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Let’s connect and explore opportunities together.
        </p>
      </section>
    </>
  );
}