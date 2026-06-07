"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Technology",
    desc: "AI-powered plant identification, smart care scheduling, and real-time expert consultations — all inside one elegant app.",
    gradient: "from-green-500/20 to-transparent",
  },
  {
    number: "02",
    title: "Sustainability",
    desc: "Biodegradable packaging, zero-waste logistics, carbon-neutral deliveries, and partnerships with ethical nurseries.",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    number: "03",
    title: "Expert Knowledge",
    desc: "A network of botanists, landscape architects, and horticulturists — all at your fingertips.",
    gradient: "from-teal-500/20 to-transparent",
  },
  {
    number: "04",
    title: "Seamless Experience",
    desc: "From discovery to delivery and beyond — every interaction is crafted for delight and ease.",
    gradient: "from-lime-500/20 to-transparent",
  },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" ref={ref} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Big bg text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-black text-white/[0.015] select-none pointer-events-none tracking-tighter whitespace-nowrap">
        NATURE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Headline */}
        <div className="max-w-3xl mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs uppercase tracking-[0.2em] text-green-500/60 font-medium mb-4"
          >
            Our Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Where Nature
            <br />
            meets{" "}
            <span className="gradient-text">Technology.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-white/40 text-lg leading-relaxed max-w-xl"
          >
            We believe the future of living is green. Lumeya Living bridges the ancient wisdom of
            horticulture with the precision of modern technology.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-[#0F1115] overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${p.gradient}`}
              />
              <div className="text-[11px] font-mono text-green-500/50 mb-4">{p.number}</div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <p className="text-2xl md:text-4xl font-semibold text-white/20 leading-relaxed max-w-2xl mx-auto">
            &ldquo;We didn&apos;t build a plant store.
            <br />
            <span className="text-white/60">We built a lifestyle.</span>&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-sm">
              🌿
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-white/70">Lumeya Studios</div>
              <div className="text-xs text-white/30">Founders, Lumeya Living</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
