import { Leaf } from "lucide-react";

const footerLinks = {
  Company: ["About", "Blog", "Careers", "Press"],
  Products: ["Plants", "Services", "Plant Care", "Green Spaces"],
  Support: ["Help Centre", "Contact Us", "Track Order", "Returns"],
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Lumeya <span className="text-green-400">Living</span>
              </span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              Nature. Technology. Lifestyle.
              <br />
              A Lumeya Studios experience.
            </p>
            <div className="flex gap-4 mt-6">
              {["𝕏", "📸", "💼", "📘"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl border border-white/5 bg-white/2 flex items-center justify-center text-sm text-white/40 hover:text-white hover:border-white/15 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs uppercase tracking-[0.15em] text-white/30 font-medium mb-5">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Lumeya Studios. All rights reserved.
          </p>
          <p className="text-xs text-white/20 font-medium tracking-wide">
            Lumeya Living™ — Nature. Technology. Lifestyle.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
