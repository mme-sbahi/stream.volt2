"use client";

import { useReveal } from "@/components/ui/useReveal";
import { PLANS } from "@/config/site.config";

const scrollToPricing = () => {
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
};

export default function Pricing() {
  const ref = useReveal();

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-[#0d0d0d]">
      {/* BG accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0077A8]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00A8E1]/8 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-5 reveal">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#00A8E1] mb-4 px-3 py-1 rounded-full border border-[#00A8E1]/30 bg-[#00A8E1]/10">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffffff] mb-4">
            Simple Pricing,{" "}
            <span className="text-gradient-unlimited">No Hidden Fees</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-xl mx-auto">
            Pay once, stream forever. Cancel anytime. No subscriptions traps.
          </p>
        </div>

        {/* Urgency banner */}
        <div className="reveal reveal-delay-1 flex justify-center mb-12">
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold"
            style={{ background: "linear-gradient(90deg, rgba(0,168,225,0.15), rgba(0,168,225,0.1))", border: "1px solid rgba(0,168,225,0.3)" }}
          >
            <span className="text-cyan-400 animate-pulse">🔥</span>
            <span className="text-cyan-300">Limited Time: Up to 65% OFF — Ends Soon</span>
            <span className="text-cyan-400 animate-pulse">🔥</span>
          </div>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Guarantee */}
        <div className="reveal mt-12 flex flex-wrap justify-center gap-6 text-sm text-[#8a8a8a]">
          <div className="flex items-center gap-2">
            <span className="text-[#7EC88A]">✓</span> 24-Hour Money-Back Guarantee
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#7EC88A]">✓</span> Instant Delivery
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#7EC88A]">✓</span> Secure SSL Payment
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#7EC88A]">✓</span> No Auto-Renewal
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: typeof PLANS[number]; index: number }) {
  const savings = Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100);

  return (
    <div
      className={`reveal reveal-delay-${index + 1} relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
        plan.popular
          ? "ring-1 ring-[#00A8E1]/70 animate-[glowPulse_3s_ease-in-out_infinite] scale-[1.02] lg:scale-[1.05]"
          : "glass-card hover:ring-1 hover:ring-[#00A8E1]/30"
      }`}
      style={
        plan.popular
          ? {
              background: "linear-gradient(160deg, rgba(0,168,225,0.18), rgba(0,168,225,0.08))",
              boxShadow: "0 0 40px rgba(0,168,225,0.25), 0 0 80px rgba(0,168,225,0.1)",
            }
          : {}
      }
    >
      {/* Popular badge */}
      {plan.popular && (
        <div
          className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-black tracking-widest uppercase text-white"
          style={{ background: "var(--gradient-cta)" }}
        >
          ⭐ Most Popular — Best Value
        </div>
      )}

      <div className={`p-7 flex flex-col h-full ${plan.popular ? "pt-14" : ""}`}>
        {/* Plan label */}
        <div className="mb-4">
          <span className="text-[#8a8a8a] text-xs font-bold uppercase tracking-widest">{plan.label}</span>
          {savings > 0 && (
            <span className="ml-2 text-xs font-bold text-[#7EC88A] bg-[#7EC88A]/10 px-2 py-0.5 rounded-full">
              -{savings}%
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className={`font-display font-black text-5xl ${plan.popular ? "text-[#00A8E1]" : "text-[#ffffff]"}`}>
              ${plan.price}
            </span>
            <span className="text-[#8a8a8a] text-sm">total</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#8a8a8a] text-sm line-through">${plan.originalPrice}</span>
            <span className="text-[#7EC88A] text-xs font-semibold">Save ${plan.originalPrice - plan.price}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="flex-1 space-y-2.5 mb-8">
          {plan.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5 text-sm">
              <span
                className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center text-[10px]"
                style={{ background: plan.popular ? "rgba(0,168,225,0.3)" : "rgba(255,255,255,0.1)" }}
              >
                ✓
              </span>
              <span className={plan.popular ? "text-[#ffffff]" : "text-[#8a8a8a]"}>{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={scrollToPricing}
          className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
            plan.popular
              ? "btn-primary animate-[glowPulse_3s_ease-in-out_infinite]"
              : "btn-outline hover:btn-primary"
          }`}
        >
          {plan.popular ? "🚀 Buy Now — Best Deal" : "Buy Now →"}
        </button>
      </div>
    </div>
  );
}
