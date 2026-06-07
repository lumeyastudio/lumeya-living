"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ecosystem = [
  {
    icon: "🌿",
    title: "Plants",
    desc: "Hundreds of indoor and outdoor plants, from rare tropicals to hardy succulents. Every plant, hand-picked.",
    tag: "300+ varieties",
    color: "from-green-900/40 to-transparent",
    glow: "rgba(74, 222, 128, 0.08)",
  },
  {
    icon: "✂️",
    title: "Gardening Services",
    desc: "Expert horticulturists at your doorstep. Pruning, repotting, landscape design, and ongoing maintenance.",
    tag: "Pan India",
    color: "from-emerald-900/40 to-transparent",
    glow: "rgba(16, 185, 129, 0.08)",
  },
  {
    icon: "💧",
    title: "Plant Care",
    desc: "Premium fertilizers, soils, pots, and tools. Everything your plants need to thrive, delivered fast.",
    tag: "500+ products",
    color: "from-teal-900/40 to-transparent",
    glow: "rgba(20, 184, 166, 0.08)",
  },
  {
    icon: "🏡",
    title: "Green Spaces",
    desc: "End-to-end design for balconies, offices, and homes. Transform any corner into a lush sanctuary.",
    tag: "Custom design",
    color: "from-green-900/30 to-transparent",
    glow: "rgba(74, 222, 128, 0.06)",
  },
  {
    icon: "🧘",
    title: "Wellness Living",
    desc: "Air-purifying plants, aromatics, and wellness products designed for mindful modern living.",
    tag: "Lifestyle",
    color: "from-lime-900/30 to-transparent",
    glow: "rgba(163, 230, 53, 0.06)",
  },
];

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" ref={ref} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs uppercase tracking-[0.2em] text-green-500/60 font-medium mb-4"
          >
            Everything you need
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            The Lumeya
            <br />
            <span className="gradient-text">Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-white/40 max-w-md mx-auto text-lg"
          >
            One platform for every green need. Seamlessly connected.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-5 gap-4">
          {ecosystem.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-white/5 bg-[#0F1115] p-6 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow: `0 0 0 1px rgba(255,255,255,0.03)`,
              }}
              whileHover={{
                boxShadow: `0 0 40px ${item.glow}, 0 0 0 1px rgba(74,222,128,0.1)`,
              }}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-auto">
                  <span className="text-[11px] px-2.5 py-1 rounded-full border border-green-500/20 text-green-400/70 font-medium">
                    {item.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
