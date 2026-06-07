"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const floatingLeaves = [
  { emoji: "🌿", x: "8%", y: "25%", size: 28, duration: 7, delay: 0 },
  { emoji: "🍃", x: "88%", y: "18%", size: 22, duration: 9, delay: 1 },
  { emoji: "🌱", x: "75%", y: "72%", size: 20, duration: 8, delay: 2 },
  { emoji: "🪴", x: "15%", y: "70%", size: 26, duration: 6, delay: 0.5 },
  { emoji: "🌸", x: "50%", y: "12%", size: 18, duration: 10, delay: 3 },
  { emoji: "🍀", x: "92%", y: "55%", size: 20, duration: 7, delay: 1.5 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg pt-20">
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating leaves */}
      {floatingLeaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute select-none pointer-events-none"
          style={{ left: leaf.x, top: leaf.y, fontSize: leaf.size }}
          animate={{ y: [0, -18, 0], rotate: [0, 10, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: leaf.duration, delay: leaf.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {leaf.emoji}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-16">
        {/* Left content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Now Available Across India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5"
          >
            Nature,{" "}
            <span className="gradient-text">Beautifully</span>
            <br />
            Connected.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg"
          >
            Vanaya brings plants, expert care, and sustainable green living to your home.
            Discover 300+ plants, book gardening services, and grow with humility.
          </motion.p>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">4.9 · 10,000+ reviews</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#download"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm transition-all duration-300 btn-magnetic glow-green"
            >
              Download Free App
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border-2 border-green-200 text-green-700 hover:border-green-400 hover:bg-green-50 font-semibold text-sm transition-all duration-200"
            >
              Explore Plants
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex items-center gap-6 mt-8"
          >
            {[
              { val: "300+", label: "Plant Varieties" },
              { val: "50K+", label: "Happy Customers" },
              { val: "98%", label: "Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-bold text-green-700">{s.val}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center relative"
        >
          {/* Decorative circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-green-200/40 blur-[60px]" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Main phone */}
            <div className="phone-frame bg-[#f0f7f0] w-[260px] md:w-[290px] overflow-hidden relative" style={{ aspectRatio: "9/19.5" }}>
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 pt-2 z-20 text-[10px] font-semibold text-gray-800">
                <span>9:41</span>
                <div className="flex gap-1 items-center text-gray-700">
                  <span>●●●</span>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a1a] rounded-full z-30" />

              {/* App UI */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5e9] to-white pt-10 px-3 pb-3 flex flex-col gap-2.5">
                {/* Header */}
                <div className="flex items-center justify-between px-1 pt-1">
                  <div>
                    <div className="h-2 w-20 bg-gray-800 rounded-full opacity-80" />
                    <div className="h-1.5 w-14 bg-green-600 rounded-full mt-1 opacity-70" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-green-200 flex items-center justify-center text-sm">🌿</div>
                </div>

                {/* Banner card */}
                <div className="rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 p-3 text-white">
                  <div className="text-[9px] opacity-80 mb-1">Featured Plant</div>
                  <div className="h-2 w-24 bg-white/80 rounded mb-1" />
                  <div className="h-1.5 w-16 bg-white/50 rounded mb-2" />
                  <div className="flex justify-between items-end">
                    <div className="h-5 w-14 bg-white/20 rounded-full" />
                    <div className="text-xl">🪴</div>
                  </div>
                </div>

                {/* Search */}
                <div className="h-7 rounded-xl bg-gray-100 border border-gray-200 flex items-center px-2 gap-1">
                  <div className="text-[10px]">🔍</div>
                  <div className="h-1.5 w-20 bg-gray-300 rounded" />
                </div>

                {/* Categories */}
                <div className="flex gap-1.5 overflow-hidden">
                  {["Indoor", "Outdoor", "Succulents", "Herbs"].map((c, i) => (
                    <div key={c} className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[9px] font-medium ${i === 0 ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {c}
                    </div>
                  ))}
                </div>

                {/* Plant grid */}
                <div className="grid grid-cols-2 gap-1.5 flex-1">
                  {[
                    { name: "Monstera", price: "₹399", emoji: "🌿", bg: "from-green-100" },
                    { name: "Peace Lily", price: "₹299", emoji: "🌸", bg: "from-emerald-100" },
                    { name: "Snake Plant", price: "₹249", emoji: "🪴", bg: "from-teal-100" },
                    { name: "Pothos", price: "₹199", emoji: "🍃", bg: "from-lime-100" },
                  ].map((p) => (
                    <div key={p.name} className={`rounded-xl bg-gradient-to-b ${p.bg} to-white border border-gray-100 p-2 flex flex-col`}>
                      <div className="text-2xl text-center mb-1">{p.emoji}</div>
                      <div className="h-1.5 w-12 bg-gray-700 rounded opacity-70" />
                      <div className="h-1.5 w-8 bg-green-600 rounded mt-0.5 opacity-80" />
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="flex justify-around py-1 border-t border-gray-100">
                  {["🏠", "🔍", "🛒", "❤️", "👤"].map((icon, i) => (
                    <div key={i} className={`text-sm ${i === 0 ? 'opacity-100' : 'opacity-30'}`}>{icon}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-16 top-16 bg-white rounded-2xl shadow-xl border border-green-100 p-3 w-44"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-base">💧</div>
                <div>
                  <div className="text-[11px] font-semibold text-gray-800">Time to Water!</div>
                  <div className="text-[10px] text-gray-500">Your Monstera</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -right-16 top-32 bg-white rounded-2xl shadow-xl border border-green-100 p-3 w-40"
            >
              <div className="text-[10px] text-gray-500 mb-1">Order Delivered 🎉</div>
              <div className="text-[11px] font-semibold text-gray-800">Peace Lily arrived!</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[9px] text-amber-400">★</span>)}
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-14 bottom-20 bg-white rounded-2xl shadow-xl border border-green-100 p-3 w-36"
            >
              <div className="text-[10px] text-gray-500">Expert Tips 🌱</div>
              <div className="text-[11px] font-semibold text-gray-800 mt-0.5">Bright indirect light for best growth</div>
            </motion.div>
          </motion.div>

          {/* Lumeya Studios credit */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[11px] text-gray-400 whitespace-nowrap">
            by Lumeya Studios
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white" fillOpacity="0.6"/>
        </svg>
      </div>
    </section>
  );
}
