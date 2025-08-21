"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Digital Transformation
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Helping IT & CXO professionals accelerate growth with cutting-edge
          technology and proven strategies.
        </motion.p>
        <motion.a
          href="#about"
          className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
        >
          Explore More
        </motion.a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white px-6 md:px-20 text-center md:text-left"
      >
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="max-w-3xl text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We are a team of innovators and strategists helping businesses scale
          through AI, cloud, and digital solutions. Our mission is to empower
          IT leaders with the tools and expertise they need to thrive in today’s
          competitive world.
        </motion.p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gray-50 px-6 md:px-20 text-center"
      >
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI & Automation",
              desc: "Drive efficiency with AI-powered automation and machine learning.",
            },
            {
              title: "Cloud Solutions",
              desc: "Scale your business with secure and cost-effective cloud strategies.",
            },
            {
              title: "Digital Strategy",
              desc: "Consulting for IT & CXOs to align digital growth with business goals.",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-blue-900 text-white px-6 md:px-20 text-center"
      >
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let’s Connect
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-8 text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to transform your digital journey? Get in touch with us today.
        </motion.p>
        <motion.a
          href="mailto:contact@yourcompany.com"
          className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
        >
          Contact Us
        </motion.a>
      </section>
    </main>
  );
}