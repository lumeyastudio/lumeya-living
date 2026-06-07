"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const appFeatures = [
  { icon: "🔍", label: "Plant Discovery", desc: "Explore 300+ plants with AR preview" },
  { icon: "⏰", label: "Care Reminders", desc: "Smart watering & fertilizing alerts" },
  { icon: "🛠️", label: "Garden Services", desc: "Book experts in seconds" },
  { icon: "❤️", label: "Wishlist", desc: "Save and track your dream plants" },
  { icon: "🌍", label: "Community", desc: "Connect with plant lovers" },
];

export default function AppExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section id="app" ref={ref} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs uppercase tracking-[0.2em] text-green-500/60 font-medium mb-4"
          >
            The App
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Your garden,
            <br />
            <span className="gradient-text">in your pocket.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Phone */}
          <motion.div style={{ y: phoneY }} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/10 rounded-full blur-[60px] scale-150" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative phone-frame bg-[#0F1115] w-[260px] md:w-[300px] overflow-hidden"
                style={{ aspectRatio: "9/19" }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f10] via-[#060f08] to-[#050505]" />
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0F1115] rounded-full z-20" />
                {/* App screens UI */}
                <div className="absolute inset-0 pt-10 px-3 pb-3 flex flex-col gap-2">
                  <div className="h-6 flex items-center justify-between px-1 pt-2">
                    <div className="h-2 w-20 bg-white/30 rounded" />
                    <div className="flex gap-1">
                      <div className="w-5 h-5 rounded-full bg-white/10" />
                      <div className="w-5 h-5 rounded-full bg-white/10" />
                    </div>
                  </div>
                  {/* Banner */}
                  <div className="rounded-2xl bg-gradient-to-br from-green-900/50 to-emerald-900/30 border border-green-500/10 p-3 h-28 flex flex-col justify-end">
                    <div className="h-2 w-24 bg-green-400/70 rounded mb-1" />
                    <div className="h-1.5 w-32 bg-white/20 rounded mb-2" />
                    <div className="h-5 w-16 bg-green-500/50 rounded-full" />
                  </div>
                  {/* Grid */}
                  <div className="h-2 w-16 bg-white/20 rounded ml-1" />
                  <div className="grid grid-cols-2 gap-1.5 flex-1">
                    {[
                      { c: "from-green-900/40", h: 16 },
                      { c: "from-teal-900/40", h: 20 },
                      { c: "from-lime-900/40", h: 12 },
                      { c: "from-emerald-900/40", h: 18 },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`rounded-xl bg-gradient-to-b ${item.c} to-transparent border border-white/5 p-2 flex flex-col justify-end gap-1`}
                      >
                        <div className="h-1.5 w-10 bg-white/20 rounded" />
                        <div className="h-1.5 w-8 bg-green-400/30 rounded" />
                      </div>
                    ))}
                  </div>
                  {/* Bottom tabs */}
                  <div className="flex justify-around py-1 border-t border-white/5 mt-auto">
                    {["🏠", "🔍", "🛒", "👤"].map((icon, i) => (
                      <div
                        key={i}
                        className={`text-sm ${i === 0 ? "opacity-100" : "opacity-30"}`}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Second phone behind */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-16 top-8 phone-frame bg-[#0F1115] w-[200px] overflow-hidden opacity-40 scale-90 blur-[0.5px]"
                style={{ aspectRatio: "9/19" }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 to-[#050505]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Feature list */}
          <div className="flex flex-col gap-5">
            {appFeatures.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-[#0F1115] hover:border-green-500/15 hover:bg-[#111610] transition-all duration-300 group"
              >
                <div className="text-2xl mt-0.5">{f.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                    {f.label}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
