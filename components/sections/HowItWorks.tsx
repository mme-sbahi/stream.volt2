"use client";

import { useReveal } from "@/components/ui/useReveal";
import { STEPS } from "@/config/site.config";

const scrollToPricing = () => {
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
};

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00A8E1]/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#00A8E1] mb-4 px-3 py-1 rounded-full border border-[#00A8E1]/30 bg-[#00A8E1]/10">
            Simple Setup
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffffff] mb-4">
            Up and Running in{" "}
            <span className="text-gradient-unlimited">Under 2 Minutes</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-xl mx-auto">
            No tech skills needed. No hardware to buy. Just pick a plan and start streaming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px"
               style={{ background: "linear-gradient(90deg, transparent, rgba(0,168,225,0.5), rgba(0,168,225,0.5), transparent)" }} />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center group`}
            >
              {/* Step number circle */}
              <div className="relative mb-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,168,225,0.2), rgba(0,168,225,0.1))",
                    border: "1px solid rgba(0,168,225,0.3)",
                    boxShadow: "0 0 30px rgba(0,168,225,0.1)",
                  }}
                >
                  {step.icon}
                </div>
                {/* Number badge */}
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  {i + 1}
                </div>
              </div>

              <h3 className="text-[#ffffff] font-bold text-xl mb-3 group-hover:text-[#00A8E1] transition-all">
                {step.title}
              </h3>
              <p className="text-[#8a8a8a] text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>

              {/* Arrow (not on last) */}
              {i < STEPS.length - 1 && (
                <div className="md:hidden mt-6 text-[#00A8E1] text-2xl animate-bounce">↓</div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <button onClick={scrollToPricing} className="btn-primary inline-block px-10 py-4 rounded-2xl text-base font-bold cursor-pointer">
            Start in 2 Minutes →
          </button>
        </div>
      </div>
    </section>
  );
}
