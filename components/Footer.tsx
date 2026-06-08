import Image from "next/image";

const footerLinks = {
  Products: ["Indoor Plants", "Outdoor Plants", "Plant Care", "Gardening Services", "Green Spaces"],
  Company: ["About Vanaya", "Blog", "Careers", "Press", "Sustainability"],
  Support: ["Help Centre", "Contact Us", "Track Order", "Returns Policy", "Plant Care Guide"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/vanaya-logo.png" alt="Vanaya" width={36} height={36} className="rounded-xl" />
              <span className="text-lg font-bold text-white">Vanaya</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-2">
              Discover plants, expert care, and green living solutions across India.
            </p>
            <p className="text-xs text-gray-500 mb-6">Grow With Humility 🌿</p>

            <div className="flex gap-3">
              {[
                { icon: "𝕏", label: "Twitter" },
                { icon: "📸", label: "Instagram" },
                { icon: "💼", label: "LinkedIn" },
                { icon: "▶", label: "YouTube" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-gray-700 bg-gray-800 flex items-center justify-center text-sm text-gray-400 hover:text-green-400 hover:border-green-700 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Lumeya Studios Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 font-medium">
            Vanaya™ — Grow With Humility
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">{l}</a>
            ))}
          </div>
        </div>

        {/* Lumeya Studios credit */}
        <div className="text-center mt-6">
          <p className="text-[11px] text-gray-600">
            Crafted with 🌿 by{" "}
            <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">Lumeya Studios</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
