"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ecosystem = [
  { icon: "🌿", title: "Indoor Plants", desc: "Monstera, Pothos, Peace Lily, Snake Plant — curated for Indian homes and light conditions.", tag: "150+ varieties", color: "bg-green-50 border-green-200 hover:bg-green-100" },
  { icon: "☀️", title: "Outdoor & Garden", desc: "Flowering plants, climbers, hedges, and fruit trees perfect for balconies and gardens.", tag: "100+ varieties", color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100" },
  { icon: "✂️", title: "Gardening Services", desc: "Expert horticulturists at your doorstep for pruning, repotting, landscape design, and care.", tag: "Book in 60 sec", color: "bg-teal-50 border-teal-200 hover:bg-teal-100" },
  { icon: "💧", title: "Plant Care Products", desc: "Premium organic fertilizers, nutrient-rich soils, beautiful pots, and gardening tools.", tag: "500+ products", color: "bg-lime-50 border-lime-200 hover:bg-lime-100" },
  { icon: "🏡", title: "Green Spaces", desc: "End-to-end design for offices, balconies, terraces, and living rooms. Turn any space lush.", tag: "Custom design", color: "bg-green-50 border-green-200 hover:bg-green-100" },
  { icon: "🧘", title: "Wellness Living", desc: "Air-purifying plants, aromatics, and stress-busting greens for mindful modern living.", tag: "Lifestyle", color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100" },
];

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ecosystem" ref={ref} className="py-28 bg-[#F7F9F5] relative">
      <div className="absolute inset-0 grid-pattern" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-3">Everything you need</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-gray-900">
            The Vanaya <span className="gradient-text">Ecosystem</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            One platform. Every green need. Beautifully connected.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ecosystem.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`group rounded-2xl border p-6 card-hover cursor-pointer transition-all duration-300 ${item.color}`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-green-200 text-green-700 font-semibold">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
