"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AppleLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.3.17.64.24.99.19l13.12-7.57-2.89-2.89-11.22 10.27zM.54 1.18C.2 1.54 0 2.11 0 2.86v18.28c0 .75.2 1.32.55 1.67l.09.09 10.24-10.24v-.24L.63 1.09l-.09.09zM20.38 10.34l-2.71-1.56-3.21 3.21 3.21 3.22 2.73-1.58c.78-.45.78-1.84-.02-2.29zM3.17.24L16.3 7.8l-2.89 2.89L3.08.43l.09-.19z"/>
    </svg>
  );
}

export default function Download() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="download" ref={ref} className="py-28 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />

      {/* Decorative leaves */}
      {["🌿", "🍃", "🌱"].map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20 select-none pointer-events-none"
          style={{ left: `${[5, 85, 45][i]}%`, top: `${[20, 15, 75][i]}%` }}
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
        >
          {leaf}
        </motion.div>
      ))}

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="text-6xl mb-6">🌱</div>
          <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-4">Free to Download</p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
            Start Your Green<br />
            <span className="gradient-text">Journey Today.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-3 max-w-md mx-auto leading-relaxed">
            Download Vanaya free and get <strong className="text-green-700">₹200 off</strong> your first plant order.
          </p>
          <p className="text-sm text-gray-400 mb-10">No code needed. Offer for new users only.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* App Store */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-gray-900 hover:bg-gray-800 text-white transition-all duration-200 glow-green-sm"
            >
              <AppleLogo />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-0.5">Download on the</div>
                <div className="text-[17px] font-bold leading-none">App Store</div>
              </div>
            </motion.a>

            {/* Play Store */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-gray-900 hover:bg-gray-800 text-white transition-all duration-200 glow-green-sm"
            >
              <PlayLogo />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-0.5">Get it on</div>
                <div className="text-[17px] font-bold leading-none">Google Play</div>
              </div>
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <span>⭐ 4.9 rating</span>
            <span>•</span>
            <span>📱 iOS & Android</span>
            <span>•</span>
            <span>🆓 Free forever</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
