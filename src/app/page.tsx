"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  const slides = [
    {
      title: "Innovating the Future",
      subtitle: "We craft digital solutions with precision and creativity.",
      bg: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      title: "AI & Automation",
      subtitle: "Empowering businesses with next-gen AI solutions.",
      bg: "bg-gradient-to-r from-blue-600 via-cyan-500 to-green-400",
    },
    {
      title: "Web & App Development",
      subtitle: "Building seamless, modern, and scalable experiences.",
      bg: "bg-gradient-to-r from-orange-500 via-red-500 to-rose-500",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Carousel */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white ${slides[current].bg}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
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
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg opacity-80">
          Emertech Partners is your partner in technology innovation — delivering
          AI, web apps, mobile solutions, and more.
        </p>
      </motion.section>

      {/* READY Method Section */}
      <motion.section
        id="ready"
        className="py-20 px-6 md:px-16 bg-gray-50 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">The READY Method</h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {["Research", "Evaluate", "Apply", "Deploy", "Yield"].map((step) => (
            <div
              key={step}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{step}</h3>
              <p className="opacity-80">
                {step === "Research" && "We start by deeply understanding your needs."}
                {step === "Evaluate" && "Analyzing possibilities to maximize impact."}
                {step === "Apply" && "Building solutions tailored to your business."}
                {step === "Deploy" && "Launching with precision and care."}
                {step === "Yield" && "Ensuring measurable results and growth."}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        id="expertise"
        className="py-20 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "AI & Machine Learning",
              text: "Smart solutions to automate workflows and scale businesses.",
            },
            {
              title: "Web Development",
              text: "Modern, scalable, and interactive websites built to perform.",
            },
            {
              title: "App Development",
              text: "Seamless apps for Android, iOS, and hybrid platforms.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="opacity-80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 md:px-16 text-center bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-80">
          Let’s build something extraordinary together. Reach out to us today.
        </p>
        <form className="max-w-3xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      <Footer />
    </div>
  );
}