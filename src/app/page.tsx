"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  const slides = [
    {
      title: "Transforming Businesses",
      subtitle: "From chaos to clarity with data-driven strategies.",
      bg: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      title: "AI-Ready Future",
      subtitle: "We help organizations unlock the real power of AI.",
      bg: "bg-gradient-to-r from-blue-600 via-cyan-500 to-green-400",
    },
    {
      title: "Trusted Advisory",
      subtitle: "Partnering with leaders to achieve measurable growth.",
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

      {/* READY Method */}
      <motion.section
        id="ready"
        className="py-20 px-6 md:px-16 text-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The READY Method™
        </h2>
        <p className="max-w-3xl mx-auto mb-12 opacity-80">
          A battle-tested system that transforms chaos into AI-ready
          organizations. Used 200+ times with measurable results.
        </p>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            {
              letter: "R",
              title: "Reality Check",
              points: [
                "Audit your digital wasteland",
                "Map skill gaps",
                "Document process chaos",
                "Measure readiness score",
              ],
              gradient: "from-blue-500 to-purple-500",
            },
            {
              letter: "E",
              title: "Elevate Foundation",
              points: [
                "Build cloud-first architecture",
                "Create secure data highways",
                "Establish collaboration platforms",
                "Set governance guardrails",
              ],
              gradient: "from-purple-500 to-pink-500",
            },
            {
              letter: "A",
              title: "Activate Intelligence",
              points: [
                "Structure data for AI",
                "Build real-time dashboards",
                "Train teams on data literacy",
                "Create insight workflows",
              ],
              gradient: "from-pink-500 to-red-500",
            },
            {
              letter: "D",
              title: "Deploy & Integrate",
              points: [
                "Select tools that actually work",
                "Integrate with existing systems",
                "Train AI champions internally",
                "Launch pilot programs",
              ],
              gradient: "from-red-500 to-orange-500",
            },
            {
              letter: "Y",
              title: "Yield Results",
              points: [
                "Monitor performance metrics",
                "Optimize and iterate",
                "Scale successful implementations",
                "Measure ROI relentlessly",
              ],
              gradient: "from-indigo-500 to-blue-500",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-r ${step.gradient} text-left`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-3">{step.letter}</h3>
              <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
              <ul className="space-y-2 text-sm opacity-90">
                {step.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto bg-black/30 p-6 rounded-2xl">
          <h4 className="text-xl font-semibold mb-2">
            Why READY Works When Others Fail
          </h4>
          <p className="opacity-80">
            Because we don’t just implement AI tools. We rebuild your entire
            digital nervous system to support them — like renovating your house
            before installing smart home technology.
          </p>
        </div>
      </motion.section>

      {/* About Section with Image */}
      <motion.section
        id="about"
        className="py-20 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/about.jpg"
            alt="About Emertech"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              Emertech Partners helps organizations embrace the future of
              business by guiding them through AI readiness, digital
              transformation, and strategic innovation. We don’t just consult —
              we partner to deliver measurable outcomes.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Results Section with Image */}
      <motion.section
        id="results"
        className="py-20 px-6 md:px-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Results That Matter
            </h2>
            <p className="text-lg opacity-80 leading-relaxed">
              From Fortune 500s to fast-growing enterprises, we’ve helped
              leaders harness AI, restructure digital systems, and achieve
              consistent, measurable ROI. We don’t just advise — we deliver
              results you can scale.
            </p>
          </div>
          <img
            src="/results.jpg"
            alt="Business Results"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 md:px-16 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Let’s build something extraordinary together. Connect with Emertech
          Partners today.
        </p>
        <form className="max-w-3xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none text-black"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none text-black"
          />
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-100 text-indigo-700 font-semibold px-6 py-4 rounded-xl shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      <Footer />
    </div>
  );
}