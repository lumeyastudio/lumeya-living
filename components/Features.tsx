"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "🌱",
    title: "Expert Plant Guidance",
    desc: "Get personalised care plans from certified horticulturists. Never lose a plant again.",
  },
  {
    icon: "🪴",
    title: "Curated Collection",
    desc: "Every plant passes through quality checks. Healthy, beautiful, and ready for your space.",
  },
  {
    icon: "♻️",
    title: "Sustainable Living",
    desc: "Eco-friendly packaging, sustainable sourcing, and a commitment to a greener tomorrow.",
  },
  {
    icon: "🏠",
    title: "Home Gardening Solutions",
    desc: "From seed to sanctuary — everything you need for indoor and balcony gardening.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "Same-day and next-day delivery in major cities. Plants arrive safe, fresh, and thriving.",
  },
  {
    icon: "💬",
    title: "Dedicated Support",
    desc: "Real experts. Real answers. Chat or call for guidance on any plant concern.",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-32 bg-[#050505] relative">
      {/* top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-green-500/60 font-medium mb-4">Why Lumeya Living</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Built for how
              <br />
              modern India{" "}
              <span className="gradient-text">lives.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/40 text-lg leading-relaxed"
          >
            We built Lumeya Living because urban life deserves more green. Every feature
            is crafted to make plant parenting effortless, beautiful, and rewarding.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-white/5 bg-[#0F1115] hover:border-green-500/15 transition-all duration-300 hover:bg-[#111610]"
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2 text-[15px] group-hover:text-green-300 transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
