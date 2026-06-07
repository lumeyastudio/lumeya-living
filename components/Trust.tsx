"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50000, suffix: "+", label: "Happy Plant Parents", emoji: "😊" },
  { value: 300, suffix: "+", label: "Plant Varieties", emoji: "🌿" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", emoji: "⭐" },
  { value: 25000, suffix: "+", label: "Orders Delivered", emoji: "📦" },
  { value: 15, suffix: "+", label: "Cities Covered", emoji: "🏙️" },
  { value: 100, suffix: "+", label: "Expert Gardeners", emoji: "👨‍🌾" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>;
}

export default function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-3">Our Growing Community</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted by plant lovers across India</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="text-center p-5 rounded-2xl bg-green-50 border border-green-100 card-hover"
            >
              <div className="text-2xl mb-2">{s.emoji}</div>
              <div className="text-2xl font-bold text-green-700">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
