"use client";
import { useState, useEffect } from "react"; import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./components/Header"; import Footer from "./components/Footer";

export default function HomePage() { const slides = [ { title: "Innovating the Future", subtitle: "We craft digital solutions with precision and creativity.", bg: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500", }, { title: "AI & Automation", subtitle: "Empowering businesses with next-gen AI solutions.", bg: "bg-gradient-to-r from-blue-600 via-cyan-500 to-green-400", }, { title: "Web & App Development", subtitle: "Building seamless, modern, and scalable experiences.", bg: "bg-gradient-to-r from-orange-500 via-red-500 to-rose-500", }, ];

const [current, setCurrent] = useState(0);

useEffect(() => { const timer = setInterval(() => { setCurrent((prev) => (prev + 1) % slides.length); }, 5000); return () => clearInterval(timer); }, [slides.length]);

const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length); const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

return ( <div className="flex flex-col min-h-screen bg-white text-gray-900"> <Header />

{/* Hero Carousel */}
  <div className="relative h-[85vh] w-full overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white ${slides[current].bg}`}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-black/40 p-6 rounded-2xl max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            {slides[current].title}
          </h1>
          <p className="mt-4 text-lg md:text-2xl opacity-90">
            {slides[current].subtitle}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>

    {/* Controls */}
    <button
      onClick={prevSlide}
      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full"
    >
      <ChevronLeft size={28} />
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full"
    >
      <ChevronRight size={28} />
    </button>

    {/* Dots */}
    <div className="absolute bottom-6 w-full flex justify-center space-x-3">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i)}
          className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/50"}`}
        />
      ))}
    </div>
  </div>

  {/* Sections */}
  <section id="about" className="py-20 px-6 md:px-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
    <p className="max-w-3xl mx-auto text-lg opacity-80">
      EvoDynamics is your partner in technology innovation — delivering AI, web apps, mobile solutions, and more.
    </p>
  </section>

  <section id="expertise" className="py-20 px-6 md:px-16 bg-gray-50 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Expertise</h2>
    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
        <p className="opacity-80">Smart solutions to automate workflows and scale businesses.</p>
      </div>
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">Web Development</h3>
        <p className="opacity-80">Modern, scalable, and interactive websites built to perform.</p>
      </div>
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3">App Development</h3>
        <p className="opacity-80">Seamless apps for Android, iOS, and hybrid platforms.</p>
      </div>
    </div>
  </section>

  <section id="contact" className="py-20 px-6 md:px-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
    <p className="max-w-2xl mx-auto mb-8 opacity-80">
      Let’s build something extraordinary together. Reach out to us today.
    </p>
    <a
      href="#"
      className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
    >
      Contact Us
    </a>
  </section>

  <Footer />
</div>

); }

