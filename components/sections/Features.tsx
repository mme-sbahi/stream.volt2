"use client";

import { useReveal } from "@/components/ui/useReveal";
import { FEATURES } from "@/config/site.config";

export default function Features() {
  const ref = useReveal();

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden bg-[#0d0d0d]">
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00A8E1]/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#00A8E1] mb-4 px-3 py-1 rounded-full border border-[#00A8E1]/30 bg-[#00A8E1]/10">
            Why StreamVault
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffffff] mb-4">
            Everything You Need,{" "}
            <span className="text-gradient-unlimited">Nothing You Don't</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-2xl mx-auto">
            Built from the ground up for the modern viewer. No compromises, no complexity.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group glass-card rounded-2xl p-7 cursor-default transition-all duration-300 hover:scale-[1.02] hover:border-[#00A8E1]/40`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:scale-110"
                   style={{ background: "linear-gradient(135deg, rgba(0,168,225,0.2), rgba(0,168,225,0.1))", border: "1px solid rgba(0,168,225,0.25)" }}>
                {feat.icon}
              </div>

              <h3 className="text-[#ffffff] font-bold text-lg mb-2 group-hover:text-gradient transition-all">
                {feat.title}
              </h3>
              <p className="text-[#8a8a8a] text-sm leading-relaxed">
                {feat.description}
              </p>

              {/* Bottom glow line */}
              <div className="mt-5 h-px bg-gradient-to-r from-[#00A8E1]/0 via-[#00A8E1]/50 to-[#00A8E1]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
