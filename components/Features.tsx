"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  { icon: "🌱", title: "Expert Plant Guidance", desc: "AI-powered plant identification + certified horticulturists answer every question inside the app." },
  { icon: "🪴", title: "Curated Collection", desc: "Every plant passes a 7-point quality check. Healthy, beautiful, and thriving — guaranteed." },
  { icon: "♻️", title: "Sustainable Packaging", desc: "100% biodegradable packaging, eco-friendly logistics, and ethical sourcing from Indian nurseries." },
  { icon: "🏠", title: "Home Garden Solutions", desc: "Everything for indoor gardens, balcony setups, terrace farms, and kitchen herb gardens." },
  { icon: "⚡", title: "Fast Delivery", desc: "Same-day delivery in Bangalore, Delhi, Mumbai, Pune, Hyderabad. Next-day in 15+ cities." },
  { icon: "💬", title: "Dedicated Support", desc: "Real plant experts via chat, call, or video — available 7 days a week inside the Vanaya app." },
  { icon: "📅", title: "Smart Care Reminders", desc: "Personalised watering, fertilizing, and repotting reminders so your plants always thrive." },
  { icon: "📸", title: "Plant Diagnosis", desc: "Snap a photo of any sick plant — our AI diagnoses the issue and suggests a fix instantly." },
  { icon: "🎁", title: "Gift Plants", desc: "Send living gifts with personalised notes. Perfect for birthdays, housewarmings, and more." },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-3">Why Vanaya</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Built for how<br />modern India <span className="gradient-text">grows.</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }} className="text-gray-500 text-lg leading-relaxed">
            Whether you&apos;re a first-time plant parent or a seasoned gardener, Vanaya gives you the tools, knowledge, and community to succeed.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              className="group p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-green-200 hover:bg-green-50 card-hover"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-1.5 group-hover:text-green-700 transition-colors">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
