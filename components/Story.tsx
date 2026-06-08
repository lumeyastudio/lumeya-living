"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  { number: "01", title: "Technology", desc: "AI plant identification, smart care schedules, and real-time expert support — all inside one elegant app.", emoji: "💻" },
  { number: "02", title: "Sustainability", desc: "Biodegradable packaging, zero-waste logistics, and partnerships with ethical Indian nurseries.", emoji: "♻️" },
  { number: "03", title: "Expert Knowledge", desc: "A network of certified botanists and horticulturists available for any plant question, anytime.", emoji: "🌿" },
  { number: "04", title: "Seamless Experience", desc: "From discovery to delivery and ongoing care — every touchpoint crafted for delight.", emoji: "✨" },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-4">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Where Nature<br />meets <span className="gradient-text">Technology.</span>
            </h2>
            <p className="mt-6 text-gray-500 text-lg leading-relaxed">
              Vanaya bridges ancient horticultural wisdom with modern technology. We believe the future of living is green — and we built the platform to make it effortless.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100"
          >
            <div className="text-4xl mb-4">🌱</div>
            <blockquote className="text-xl font-semibold text-gray-800 leading-relaxed mb-4">
              &ldquo;We didn&apos;t build a plant store. We built a lifestyle — rooted in humility, growth, and the belief that every home deserves more green.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-base">🌿</div>
              <div>
                <div className="text-sm font-bold text-gray-900">Lumeya Studios</div>
                <div className="text-xs text-gray-500">Creators of Vanaya</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="group p-6 rounded-2xl border border-gray-100 bg-green-50/50 hover:border-green-200 hover:bg-green-50 card-hover"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{p.emoji}</span>
                <span className="text-[11px] font-mono text-green-500 font-bold">{p.number}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
