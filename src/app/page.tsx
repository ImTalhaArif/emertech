'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContactForm from '@/app/components/ContactForm';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* HERO */}
      <section
        id="main"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#0F265C] to-[#0A1F44]" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:32px_32px]"
        />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Enterprise Intelligence for Ambitious SMEs
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
                Build the right foundations—then make AI, data and cloud investments deliver measurable outcomes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#discover"
                  className="no-underline rounded-xl bg-white px-6 py-3 text-[#0A1F44] font-semibold shadow hover:shadow-md transition"
                >
                  Start 2-Week Discover
                </a>
                <a
                  href="#services"
                  className="no-underline rounded-xl border border-white/40 px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* Metrics card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="rounded-2xl bg-white/10 backdrop-blur p-6 md:p-8 shadow-2xl ring-1 ring-white/15"
            >
              <dl className="grid grid-cols-2 gap-6 text-white">
                {[
                  { k: 'Years in Complex Programs', v: '15+' },
                  { k: 'Platforms Delivered', v: '50+' },
                  { k: 'Time-to-Value', v: '≤ 90 days' },
                  { k: 'Client NPS', v: '72' },
                ].map((m) => (
                  <div key={m.k}>
                    <dt className="text-xs uppercase tracking-wider text-white/70">{m.k}</dt>
                    <dd className="mt-1 text-2xl font-semibold">{m.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-white/80">
                Trusted by CIOs and CTOs across legal, professional services, and mid-market enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#0A1F44]">Who we are</h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              EmerTech Partners is a specialist consultancy born from 15 years in legal technology,
              enterprise content management, information management and security, Microsoft 365 and Azure,
              and complex data programs.
            </p>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              We exist for one reason: most SMEs buy smart tools before they fix the foundations.
              We fix the foundations, then make the tools sing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-gray-50 p-8 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-[#0A1F44]">Our mission</h3>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Democratise enterprise-grade AI for SMEs across Australia. Give growing organisations
              the same quality of architecture, safety, and outcomes that large enterprises enjoy,
              without the cost or complexity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#0A1F44] text-center"
          >
            Our Values
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Uncompromising Excellence',
                desc: 'From discovery to support, we hold a high bar. No buzzwords, just outcomes.',
              },
              {
                title: 'Transparent Collaboration',
                desc: 'Clear recommendations, timelines and commercials. No surprises.',
              },
              {
                title: 'Strategic Long-Term Thinking',
                desc: 'Architecture and capabilities that compound advantages over time.',
              },
              {
                title: 'Human-Centric Technology',
                desc: 'We use AI responsibly, keeping people, judgment and trust at the centre.',
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl bg-white p-6 shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#0A1F44]">{val.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#0A1F44] text-center"
          >
            Our Expertise
          </motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Deep Technical Mastery',
                points: [
                  'Cloud Architecture: Microsoft 365, Azure, hybrid optimisation',
                  'AI Platform Integration: LLM platforms, deployment, governance',
                  'Enterprise Content Management: iManage, SharePoint, ECM',
                  'Data Engineering: modern stacks, quality frameworks, analytics',
                ],
              },
              {
                title: 'Strategic Business Acumen',
                points: [
                  'Risk Management: compliance, data governance, security',
                  'Change Leadership: workforce transformation & adoption',
                  'Process Optimisation: workflow, automation, efficiency',
                  'Executive Advisory: roadmaps, tech selection, investment',
                ],
              },
            ].map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-2xl bg-gradient-to-tr from-gray-50 to-white p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#0A1F44]">{exp.title}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  {exp.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — READY removed */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#0A1F44] text-center"
          >
            Products & Services
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Strategic Consulting',
                items: ['Cloud migration', 'Content management', 'Security & governance', 'AI evaluations'],
              },
              {
                title: 'Product Development',
                items: ['Custom AI development', 'Workflow integrations', 'Low-code / No-code'],
              },
              {
                title: 'Data Foundations',
                items: ['Migrations (drives/SharePoint)', 'Power BI dashboards', 'Business Analytics'],
              },
              {
                title: 'Implementation Support',
                items: ['Practical help from design to execution'],
              },
              {
                title: 'Training & Upskilling',
                items: ['For employees', 'For IT managers', 'For executives'],
              },
              {
                title: 'Executive Advisory',
                items: ['Roadmapping', 'Tech selection', 'Investment planning'],
              },
            ].map((srv, i) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-[#0A1F44]/30 transition"
              >
                <h3 className="text-lg font-semibold text-[#0A1F44]">{srv.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  {srv.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#0A1F44] text-center"
          >
            How We Deliver Outcomes
          </motion.h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: 'Discover (2 weeks)',
                d: 'Risk review, AI readiness, prioritised backlog, benefits model, 90-day plan.',
              },
              {
                t: 'Design (2–4 weeks)',
                d: 'Target architecture, governance, success measures, adoption plan.',
              },
              {
                t: 'Deliver (≤90 days)',
                d: 'Execute with your team or ours. Show measurable value quickly.',
              },
            ].map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-gray-50 p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-[#0A1F44]/70">Step {i + 1}</div>
                <div className="mt-2 text-xl font-semibold text-[#0A1F44]">{s.t}</div>
                <p className="mt-3 text-sm text-gray-700">{s.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* DISCOVER CTA */}
      <section id="discover" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white p-10 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Ready to move from ideas to outcomes
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Start with a 2-week Discover engagement. You’ll get a clear view of risk, a ranked
              use-case backlog, a benefits model, and a 90-day plan your team can execute with or without us.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="no-underline rounded-xl bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white shadow hover:shadow-md"
              >
                Book the Discover Sprint
              </a>
              <a
                href="#about"
                className="no-underline rounded-xl border px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                Why EmerTech Partners
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT (✅ ContactForm included) */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#0A1F44]"
          >
            Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg text-gray-700"
          >
            Tell us about your goals and context. We’ll reply with a short plan and a proposed next step for your team.
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