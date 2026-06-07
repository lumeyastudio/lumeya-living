"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Interior Designer, Mumbai",
    avatar: "PS",
    text: "Lumeya transformed how I source plants for my clients. The quality is unmatched and delivery is always perfect.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Software Engineer, Bangalore",
    avatar: "AM",
    text: "Finally, a plant app that feels premium. The care reminders alone saved half my plant collection!",
    rating: 5,
  },
  {
    name: "Kavya Nair",
    role: "Wellness Coach, Delhi",
    avatar: "KN",
    text: "The wellness plant curation is extraordinary. My home feels like a sanctuary. Absolutely love it.",
    rating: 5,
  },
  {
    name: "Rohit Joshi",
    role: "Architect, Pune",
    avatar: "RJ",
    text: "Green Spaces service is incredible. They designed my entire office garden — stunning results.",
    rating: 5,
  },
  {
    name: "Ananya Pillai",
    role: "Content Creator, Chennai",
    avatar: "AP",
    text: "The app experience is so smooth. Feels like Apple designed a gardening app. Love every detail.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur, Hyderabad",
    avatar: "VS",
    text: "Expert support is top-notch. They helped me save a near-dead monstera in just 2 days!",
    rating: 5,
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] p-6 rounded-2xl glass border border-white/8 mr-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black text-xs font-bold">
          {t.avatar}
        </div>
        <div>
          <div className="text-sm font-medium text-white">{t.name}</div>
          <div className="text-xs text-white/40">{t.role}</div>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(t.rating)].map((_, i) => (
          <span key={i} className="text-green-400 text-xs">★</span>
        ))}
      </div>
      <p className="text-sm text-white/60 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const doubled = [...testimonials, ...testimonials];

  return (
    <section ref={ref} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-green-500/60 font-medium mb-4">
            Loved by thousands
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Real stories from
            <br />
            <span className="gradient-text">real plant parents.</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite carousel - row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        <motion.div
          animate={{ x: [0, -50 * testimonials.length * 8] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex"
          style={{ width: "max-content" }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 reverse */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        <motion.div
          animate={{ x: [-50 * testimonials.length * 8, 0] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="flex"
          style={{ width: "max-content" }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
