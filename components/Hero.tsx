"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const particles = [
  { size: 3, x: "15%", y: "20%", duration: 7, delay: 0 },
  { size: 2, x: "80%", y: "15%", duration: 9, delay: 1 },
  { size: 4, x: "70%", y: "70%", duration: 8, delay: 2 },
  { size: 2, x: "25%", y: "75%", duration: 6, delay: 0.5 },
  { size: 3, x: "55%", y: "30%", duration: 10, delay: 3 },
  { size: 2, x: "40%", y: "85%", duration: 7, delay: 1.5 },
  { size: 5, x: "90%", y: "45%", duration: 11, delay: 2.5 },
  { size: 2, x: "10%", y: "55%", duration: 8, delay: 0.8 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 aurora-bg-strong" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-600/10 blur-[80px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-teal-500/10 blur-[80px]"
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-green-400/60"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 text-green-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>By Lumeya Studios</span>
          <span className="text-green-500/50">•</span>
          <span className="text-white/50">Now Available in India</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
        >
          Nature,{" "}
          <span className="gradient-text text-glow">Beautifully</span>
          <br />
          Connected.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Transform your living spaces with plants, expert care, and a modern gardening
          experience designed for today&apos;s lifestyle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#download"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold text-sm transition-all duration-300 btn-magnetic glow-green-sm"
          >
            Download App
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#ecosystem"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/20 text-sm font-medium transition-all duration-200"
          >
            Explore Ecosystem
          </a>
        </motion.div>

        {/* Floating phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative"
        >
          {/* Glow behind phone */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-[60px]" />

          {/* Phone */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto w-[280px] md:w-[320px]"
          >
            <div className="phone-frame bg-[#0F1115] overflow-hidden aspect-[9/19]">
              {/* Phone screen content */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f10] to-[#050505]" />
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 pt-3 pb-1 text-[10px] text-white/50 font-medium z-10">
                <span>9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-3 h-1.5 rounded-sm bg-white/50" />
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0F1115] rounded-full z-20" />

              {/* App UI */}
              <div className="absolute inset-0 pt-10 px-4 pb-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div>
                    <div className="h-2.5 w-16 bg-white/20 rounded" />
                    <div className="h-1.5 w-10 bg-white/10 rounded mt-1" />
                  </div>
                </div>

                {/* Featured plant card */}
                <div className="rounded-2xl bg-gradient-to-br from-green-900/40 to-emerald-900/20 border border-green-500/10 p-3 flex-1 flex flex-col justify-end">
                  <div className="flex flex-col gap-1.5">
                    <div className="h-2.5 w-24 bg-green-400/60 rounded" />
                    <div className="h-1.5 w-32 bg-white/20 rounded" />
                    <div className="h-1.5 w-20 bg-white/10 rounded" />
                    <div className="mt-2 flex items-center justify-between">
                      <div className="h-5 w-16 bg-green-500/30 rounded-full" />
                      <div className="h-5 w-5 rounded-full bg-green-500" />
                    </div>
                  </div>
                </div>

                {/* Grid of plants */}
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-xl bg-white/5 border border-white/5 p-2">
                      <div className="h-12 rounded-lg bg-gradient-to-br from-green-900/30 to-transparent mb-1.5" />
                      <div className="h-1.5 w-12 bg-white/20 rounded" />
                      <div className="h-1.5 w-8 bg-green-400/30 rounded mt-1" />
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="flex justify-around py-2 border-t border-white/5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-5 h-5 rounded ${i === 0 ? 'bg-green-500/50' : 'bg-white/10'}`} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating glass cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-0 md:-left-10 top-20 glass rounded-2xl p-3 border border-white/10 hidden sm:block"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">🌿</div>
              <div>
                <div className="text-[11px] font-medium text-white">Plant Delivered!</div>
                <div className="text-[10px] text-white/40">Monstera Deliciosa</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute right-0 md:-right-10 top-32 glass rounded-2xl p-3 border border-white/10 hidden sm:block"
          >
            <div className="text-[11px] text-white/60 mb-1">Care Reminder</div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <div className="text-[11px] font-medium text-white">Water your Fern</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
