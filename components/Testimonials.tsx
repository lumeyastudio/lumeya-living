"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  { name: "Priya Sharma", role: "Interior Designer, Mumbai", avatar: "PS", text: "Vanaya transformed how I source plants for clients. Quality is unmatched and delivery always arrives perfectly.", rating: 5, color: "bg-green-100" },
  { name: "Arjun Mehta", role: "Software Engineer, Bangalore", avatar: "AM", text: "Finally a plant app that feels premium. The care reminders alone saved half my plant collection!", rating: 5, color: "bg-emerald-100" },
  { name: "Kavya Nair", role: "Wellness Coach, Delhi", avatar: "KN", text: "The wellness plant curation is extraordinary. My home feels like a sanctuary. Absolutely love it.", rating: 5, color: "bg-teal-100" },
  { name: "Rohit Joshi", role: "Architect, Pune", avatar: "RJ", text: "Green Spaces service is incredible. They designed my entire office garden — stunning results, on budget.", rating: 5, color: "bg-lime-100" },
  { name: "Ananya Pillai", role: "Content Creator, Chennai", avatar: "AP", text: "The app feels like Apple designed a gardening app. So smooth, so beautiful. Love every single detail.", rating: 5, color: "bg-green-100" },
  { name: "Vikram Singh", role: "Entrepreneur, Hyderabad", avatar: "VS", text: "Expert support is amazing. They helped me save a near-dead monstera in 2 days. Truly incredible service.", rating: 5, color: "bg-emerald-100" },
];

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] p-5 rounded-2xl bg-white border border-gray-100 shadow-sm mr-4">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-green-800`}>{t.avatar}</div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{t.name}</div>
          <div className="text-xs text-gray-400">{t.role}</div>
        </div>
      </div>
      <div className="flex gap-0.5 mb-2">
        {[...Array(t.rating)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const doubled = [...testimonials, ...testimonials];

  return (
    <section ref={ref} className="py-28 bg-[#F7F9F5] overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-3">Loved by thousands</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Real stories from real <span className="gradient-text">plant parents.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F7F9F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F7F9F5] to-transparent z-10 pointer-events-none" />
        <motion.div animate={{ x: [0, -300 * testimonials.length] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="flex" style={{ width: "max-content" }}>
          {doubled.map((t, i) => <Card key={i} t={t} />)}
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F7F9F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F7F9F5] to-transparent z-10 pointer-events-none" />
        <motion.div animate={{ x: [-300 * testimonials.length, 0] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="flex" style={{ width: "max-content" }}>
          {doubled.map((t, i) => <Card key={i} t={t} />)}
        </motion.div>
      </div>
    </section>
  );
}
