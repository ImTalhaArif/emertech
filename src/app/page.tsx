'use client';

import Link from 'next/link'; import { useEffect, useState, useCallback } from 'react'; import { motion, AnimatePresence } from 'framer-motion';

// NAV items const NAV = [ { href: '#about', label: 'About' }, { href: '#expertise', label: 'Expertise' }, { href: '#services', label: 'Services' }, { href: '#values', label: 'Values' }, { href: '#discover', label: 'Discover' }, { href: '#contact', label: 'Contact' }, ];

// Carousel slides const SLIDES = [ { title: 'Shaping the Future with Emerging Tech', desc: 'We partner with businesses to unlock AI, Web3, and Cloud innovations.', img: '/images/slide1.jpg', }, { title: 'Transforming Ideas into Scalable Products', desc: 'From startups to enterprises, we build digital experiences that wow.', img: '/images/slide2.jpg', }, { title: 'Your Innovation Partner', desc: 'We align cutting-edge technology with your business vision.', img: '/images/slide3.jpg', }, ];

export default function HomePage() { const [open, setOpen] = useState(false); const [index, setIndex] = useState(0);

// Auto-slide carousel useEffect(() => { const timer = setInterval(() => { setIndex((prev) => (prev + 1) % SLIDES.length); }, 5000); return () => clearInterval(timer); }, []);

// Lock body scroll when mobile menu is open useEffect(() => { const { style } = document.documentElement; style.overflow = open ? 'hidden' : ''; return () => { style.overflow = ''; }; }, [open]);

const smoothScroll = useCallback((hash: string) => { const el = document.querySelector(hash); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, []);

const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => { if (hash.startsWith('#')) { e.preventDefault(); setOpen(false); setTimeout(() => smoothScroll(hash), 10); } };

return ( <> {/* Header /} <motion.header initial={{ y: -64, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="fixed top-0 left-0 right-0 z-50 bg-[#0A1F44]/80 backdrop-blur-md text-white shadow" > <div className="mx-auto max-w-7xl px-4 md:px-6"> <div className="flex items-center justify-between py-3"> {/ Brand */} <Link href="/#top" className="flex items-center gap-2 no-underline"> <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A1F44] text-sm font-extrabold"> EP </span> <span className="text-lg md:text-xl font-semibold">EmerTech Partners</span> </Link>

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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  </motion.header>

  <div className="h-16 md:h-16" />

  {/* Mobile Menu */}
  <AnimatePresence>
    {open && (
      <>
        <motion.div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        />

        <motion.aside
          className="fixed right-0 top-0 bottom-0 z-[70] w-[84%] max-w-sm bg-[#0A1F44]/90 backdrop-blur-md text-white shadow-2xl flex flex-col"
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
              className="h-9 w-9 rounded-lg flex items-center justify-center hover:bg-white/10"
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
                className="no-underline block rounded-lg px-3 py-3 text-base text-white/95 hover:bg-white/10"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10">
            <a
              href="#discover"
              onClick={(e) => onNavClick(e, '#discover')}
              className="no-underline block text-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0A1F44] shadow hover:bg-gray-100 transition"
            >
              Start 2-Week Discover
            </a>
          </div>
        </motion.aside>
      </>
    )}
  </AnimatePresence>

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
          <p className="text-lg md:text-xl text-gray-200 mb-6">{slide.desc}</p>
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
      onClick={() => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
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
          className={`h-3 w-3 rounded-full ${index === i ? 'bg-white' : 'bg-white/50'} transition`}
        />
      ))}
    </div>
  </section>

  {/* Example sections below (replace with real content) */}
  <section id="about" className="py-20 text-center">
    <h2 className="text-3xl font-bold mb-4">About Us</h2>
    <p className="max-w-2xl mx-auto text-gray-600">We are EmerTech Partners — your ally in embracing AI, Web3, and Cloud innovation.</p>
  </section>

  <section id="expertise" className="py-20 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
    <p className="max-w-2xl mx-auto text-gray-600">From concept to deployment, we cover full-stack development, AI engineering, and digital product design.</p>
  </section>

  <section id="services" className="py-20 text-center">
    <h2 className="text-3xl font-bold mb-4">Services</h2>
    <p className="max-w-2xl mx-auto text-gray-600">We craft web apps, mobile solutions, and AI-powered platforms tailored to your needs.</p>
  </section>

  <section id="values" className="py-20 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold mb-4">Values</h2>
    <p className="max-w-2xl mx-auto text-gray-600">Integrity, innovation, and impact drive everything we do.</p>
  </section>

  <section id="discover" className="py-20 text-center">
    <h2 className="text-3xl font-bold mb-4">Discover Program</h2>
    <p className="max-w-2xl mx-auto text-gray-600">Try our 2-week discovery sprint to explore how tech can accelerate your business goals.</p>
  </section>

  <section id="contact" className="py-20 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <p className="max-w-2xl mx-auto text-gray-600">Let’s connect and explore opportunities together.</p>
  </section>
</>

); }

