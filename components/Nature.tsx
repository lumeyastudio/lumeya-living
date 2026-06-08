"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  { icon: "🌬️", title: "Purify Your Air", desc: "Plants like Snake Plant, Spider Plant, and Peace Lily remove toxins like formaldehyde and benzene from indoor air — proven by NASA research.", stat: "87% toxin reduction" },
  { icon: "😌", title: "Reduce Stress", desc: "Studies show that being around plants reduces cortisol levels by up to 37%. A greener home means a calmer mind.", stat: "37% less cortisol" },
  { icon: "🧠", title: "Boost Productivity", desc: "Plants in workspaces increase focus and productivity by up to 15%. Nature helps your brain recharge.", stat: "15% more focus" },
  { icon: "💤", title: "Sleep Better", desc: "Lavender, Jasmine, and Aloe Vera release calming compounds at night, improving sleep quality naturally.", stat: "Better sleep quality" },
  { icon: "🌡️", title: "Control Humidity", desc: "Indoor plants naturally regulate humidity levels, reducing the risk of dry skin, cold, and respiratory issues.", stat: "Natural humidifier" },
  { icon: "🌍", title: "Fight Climate Change", desc: "Every plant you grow sequesters CO₂. Vanaya has helped plant 10,000+ trees across India through its green initiative.", stat: "10K+ trees planted" },
];

const howItWorks = [
  { step: "1", title: "Browse & Choose", desc: "Open the Vanaya app and explore plants by category, room type, or mood.", icon: "📱" },
  { step: "2", title: "Place Your Order", desc: "Add to cart and checkout in seconds. Pay via UPI, card, or COD.", icon: "🛒" },
  { step: "3", title: "We Deliver", desc: "Your plant is carefully packed and delivered to your door — same day or next day.", icon: "🚚" },
  { step: "4", title: "We Help You Grow", desc: "Get care reminders, expert tips, and support right inside the app.", icon: "🌱" },
];

export default function Nature() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const inView2 = useInView(ref2, { once: true, margin: "-80px" });

  return (
    <>
      {/* How plants help */}
      <section id="nature" ref={ref} className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-3">Science of Green</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-gray-900">
              Why every home needs <span className="gradient-text">plants.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
              Plants aren&apos;t just beautiful — they make you healthier, happier, and more productive.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-gray-100 bg-gradient-to-b from-green-50/50 to-white hover:border-green-200 card-hover"
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{b.desc}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {b.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section ref={ref2} className="py-28 bg-gradient-to-b from-green-50 to-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} animate={inView2 ? { opacity: 1 } : {}} className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-3">Simple Process</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-gray-900">
              How <span className="gradient-text">Vanaya</span> works
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200" />

            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.12 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-green-300 flex items-center justify-center text-2xl mx-auto mb-4 shadow-sm relative z-10">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
