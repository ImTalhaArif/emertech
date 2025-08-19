"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Enterprise Intelligence for Ambitious SMEs
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Unlock AI-driven growth with the right foundations and strategies tailored for Australian businesses.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#discover"
              className="rounded-xl bg-white px-6 py-3 text-black font-semibold shadow hover:bg-gray-100"
            >
              Start 2-Week Discover
            </a>
            <a
              href="#services"
              className="rounded-xl bg-transparent border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white border-b">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Who we are</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              EmerTech Partners is a specialist consultancy born from 15 years in legal technology,
              enterprise content management, information management and security, Microsoft 365 and
              Azure, and complex data programs.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We exist for one reason: most SMEs buy smart tools before they fix the foundations.
              We fix the foundations, then make the tools sing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">Our mission</h3>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Democratise enterprise-grade AI for SMEs across Australia. Give growing organisations
              the same quality of architecture, safety, and outcomes that large enterprises enjoy,
              without the cost or complexity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 bg-gray-50 border-b">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 text-center"
          >
            Our Values
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Uncompromising Excellence",
                desc: "We maintain the highest standards from consultation through long-term support. Mediocrity has no place.",
              },
              {
                title: "Transparent Collaboration",
                desc: "Every recommendation, timeline, and cost structure is presented with clarity. Trust is built through transparency.",
              },
              {
                title: "Strategic Long-term Thinking",
                desc: "We design solutions that create lasting advantage, building capabilities that compound over time.",
              },
              {
                title: "Human-Centric Technology",
                desc: "We leverage sophisticated AI while keeping creativity, judgment, and relationships at the center.",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{val.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 bg-white border-b">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 text-center"
          >
            Our Expertise
          </motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">Deep Technical Mastery</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600">
                <li>Cloud Architecture: Microsoft 365, Azure, hybrid cloud optimization</li>
                <li>AI Platform Integration: LLM platforms, custom deployment, governance</li>
                <li>Enterprise Content Management: iManage, SharePoint, ECM solutions</li>
                <li>Data Engineering: modern data stacks, quality frameworks, analytics</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">Strategic Business Acumen</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600">
                <li>Risk Management: compliance, data governance, security frameworks</li>
                <li>Change Leadership: workforce transformation, adoption strategies</li>
                <li>Process Optimization: workflow analysis, automation, efficiency</li>
                <li>Executive Advisory: roadmapping, tech selection, investment planning</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50 border-b">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 text-center"
          >
            Products & Services — READY Framework
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Strategic Consulting (R)",
                items: ["Cloud migration", "Content management", "Security & governance", "AI evaluations"],
              },
              {
                title: "Product Development (E)",
                items: ["Custom AI development", "Workflow integrations", "Low-code / No-code"],
              },
              {
                title: "Data Foundations (A)",
                items: ["Migration from drives/SharePoint", "Power BI dashboards", "Business Analytics"],
              },
              {
                title: "Implementation Support (D)",
                items: ["Practical help from design to execution"],
              },
              {
                title: "Training & Upskilling (Y)",
                items: ["Training for employees", "Training for IT managers", "Training for executives"],
              },
            ].map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{srv.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
                  {srv.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover CTA */}
      <section id="discover" className="py-20 bg-white border-b">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border bg-gray-50 p-10 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to move from ideas to outcomes
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Start with a 2-week Discover engagement. You’ll get a clear view of risk, a ranked
              use-case backlog, a benefits model, and a 90-day plan your team can execute with or
              without us.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900"
              >
                Book the Discover Sprint
              </a>
              <a
                href="#about"
                className="rounded-xl border px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                Why EmerTech Partners
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 border-b">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900"
          >
            Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg text-gray-600"
          >
            Tell us about your goals and context. We’ll reply with a short plan and a proposed
            next step for your team.
          </motion.p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
