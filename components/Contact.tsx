"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-28 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold mb-3">Get in Touch</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-gray-900">
            We&apos;d love to <span className="gradient-text">hear from you.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="mt-4 text-gray-500 max-w-md mx-auto text-lg">
            Questions about plants, the app, or partnerships? Our team is always here.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="space-y-5">
            {[
              { icon: <Mail className="w-5 h-5" />, label: "Email Us", value: "hello@lumeyaliving.com", sub: "We reply within 24 hours" },
              { icon: <Phone className="w-5 h-5" />, label: "Call Us", value: "+91 98765 43210", sub: "Mon–Sat, 9am–7pm IST" },
              { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "+91 98765 43210", sub: "Quick replies on WhatsApp" },
              { icon: <MapPin className="w-5 h-5" />, label: "Headquarters", value: "Bangalore, India", sub: "Lumeya Studios Pvt. Ltd." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-5 rounded-2xl bg-green-50 border border-green-100 card-hover">
                <div className="w-10 h-10 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center text-green-700 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                  <div className="text-sm font-bold text-gray-900">{item.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}
            className="bg-green-50 rounded-2xl border border-green-100 p-7"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-5">Send us a message</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">First Name</label>
                  <input type="text" placeholder="Arjun" className="w-full px-4 py-2.5 rounded-xl border border-green-200 bg-white text-sm focus:outline-none focus:border-green-400 transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Last Name</label>
                  <input type="text" placeholder="Mehta" className="w-full px-4 py-2.5 rounded-xl border border-green-200 bg-white text-sm focus:outline-none focus:border-green-400 transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Email</label>
                <input type="email" placeholder="arjun@example.com" className="w-full px-4 py-2.5 rounded-xl border border-green-200 bg-white text-sm focus:outline-none focus:border-green-400 transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Message</label>
                <textarea rows={4} placeholder="Tell us how we can help..." className="w-full px-4 py-2.5 rounded-xl border border-green-200 bg-white text-sm focus:outline-none focus:border-green-400 transition-colors resize-none" />
              </div>
              <button className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm transition-colors btn-magnetic">
                Send Message 🌿
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
