"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const screens = [
  { step: "01", title: "Discover Plants", desc: "Browse 300+ plants by category, room type, light condition, or pet-friendliness. Use AR to preview any plant in your space before buying.", icon: "🔍" },
  { step: "02", title: "Smart Care Reminders", desc: "Set it once — Vanaya sends personalised reminders for watering, fertilizing, misting, and repotting based on your plant and your city's climate.", icon: "⏰" },
  { step: "03", title: "Book Expert Services", desc: "Schedule a professional gardener for pruning, repotting, landscape setup, or regular maintenance — available in 15+ cities.", icon: "📅" },
  { step: "04", title: "Diagnose & Heal", desc: "Something wrong with your plant? Snap a photo. Our AI diagnoses yellowing, pests, root rot, and more with instant fix suggestions.", icon: "📸" },
  { step: "05", title: "Community & Wishlist", desc: "Save your dream plants, share your garden journey, get tips from our community of 50,000+ plant parents across India.", icon: "❤️" },
];

export default function AppExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="app" ref={ref} className="py-28 bg-[#F7F9F5] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-3">The App Experience</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-gray-900">
            Your garden, <span className="gradient-text">in your pocket.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="mt-4 text-gray-500 max-w-lg mx-auto text-lg">
            Everything you need to discover, buy, grow, and care for plants — beautifully designed.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {screens.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group bg-white rounded-2xl border border-green-100 p-6 card-hover"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{s.icon}</span>
                <span className="text-[11px] font-mono text-green-500 font-bold">{s.step}</span>
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* App screenshot area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-green-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'1\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }} />
          <div className="relative z-10">
            <p className="text-green-200 text-sm font-semibold mb-3">Join 50,000+ plant parents</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Start growing today.<br />It&apos;s free.</h3>
            <p className="text-green-100 mb-8 max-w-md mx-auto">Download Vanaya and get ₹200 off your first plant order. No code needed.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#download" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-xl font-bold text-sm hover:bg-green-50 transition-colors">
                🍎 App Store
              </a>
              <a href="#download" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-xl font-bold text-sm hover:bg-green-50 transition-colors">
                ▶ Google Play
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
