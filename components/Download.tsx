"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AppBadge({ store, icon, sub }: { store: string; icon: string; sub: string }) {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300 group glow-green-sm hover:glow-green"
    >
      <span className="text-3xl">{icon}</span>
      <div className="text-left">
        <div className="text-[10px] text-white/40 uppercase tracking-wider">{sub}</div>
        <div className="text-base font-semibold text-white group-hover:text-green-300 transition-colors">{store}</div>
      </div>
    </motion.a>
  );
}

export default function Download() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" ref={ref} className="py-40 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      {/* Aurora glow */}
      <div className="absolute inset-0 aurora-bg-strong" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-green-500/10 blur-[120px]"
      />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Phone mockup */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-12 relative w-40"
          >
            <div className="absolute inset-0 bg-green-500/20 blur-[30px] rounded-full scale-150" />
            <div className="relative phone-frame bg-[#0F1115] overflow-hidden" style={{ aspectRatio: "9/19" }}>
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-[#050505]" />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#0F1115] rounded-full z-20" />
              <div className="absolute inset-0 pt-8 px-2 pb-2 flex flex-col gap-1.5">
                <div className="h-20 rounded-xl bg-gradient-to-br from-green-500/20 to-transparent" />
                <div className="flex gap-1">
                  <div className="flex-1 h-10 rounded-lg bg-white/5" />
                  <div className="flex-1 h-10 rounded-lg bg-white/5" />
                </div>
                <div className="h-8 rounded-lg bg-white/5" />
                <div className="h-8 rounded-lg bg-green-500/20" />
              </div>
            </div>
          </motion.div>

          <p className="text-xs uppercase tracking-[0.2em] text-green-500/60 font-medium mb-4">
            Available Now
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-5">
            Start Your Green
            <br />
            <span className="gradient-text">Journey Today.</span>
          </h2>
          <p className="text-white/40 text-lg mb-12 max-w-md mx-auto">
            Join thousands of plant parents already transforming their homes with Lumeya Living.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppBadge store="App Store" icon="🍎" sub="Download on the" />
            <AppBadge store="Google Play" icon="▶" sub="Get it on" />
          </div>

          <p className="mt-8 text-xs text-white/20">
            iOS 16+ · Android 9+ · Free to download
          </p>
        </motion.div>
      </div>
    </section>
  );
}
