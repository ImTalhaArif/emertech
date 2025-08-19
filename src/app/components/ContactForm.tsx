'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border bg-green-50 p-6 text-green-800">
        <p className="font-semibold">Thanks! We’ve received your message.</p>
        <p className="text-sm">We’ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4 rounded-2xl border bg-white p-6 md:grid-cols-2"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Full name</label>
        <input
          required
          type="text"
          className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-0 focus:border-gray-900"
          placeholder="Jane Doe"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          required
          type="email"
          className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-0 focus:border-gray-900"
          placeholder="jane@company.com"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-0 focus:border-gray-900"
          placeholder="Company Pty Ltd"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">What problem are you solving?</label>
        <textarea
          rows={5}
          className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-0 focus:border-gray-900"
          placeholder="Brief context, systems, constraints, outcomes…"
        />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-900 md:w-auto"
        >
          Send inquiry
        </button>
      </div>
    </form>
  );
}
