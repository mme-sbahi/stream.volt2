"use client";

import { useReveal } from "@/components/ui/useReveal";
import { scrollToPricing } from "@/lib/utils";

const OLD_SERVICES = [
  { name: "Netflix (Standard)", price: "$15.49" },
  { name: "Hulu (No Ads)", price: "$17.99" },
  { name: "Disney+", price: "$13.99" },
  { name: "HBO Max", price: "$15.99" },
  { name: "Apple TV+", price: "$9.99" },
  { name: "Amazon Prime", price: "$14.99" },
  { name: "Paramount+", price: "$11.99" },
  { name: "Peacock Premium", price: "$11.99" },
];

export default function StopOverpaying() {
  const ref = useReveal();

  return (
    <section id="stop-overpaying" className="py-24 px-6 relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0077A8]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#00A8E1] mb-4 px-3 py-1 rounded-full border border-[#00A8E1]/30 bg-[#00A8E1]/10">
            Save Money
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4">
            Stop <span className="text-gradient-unlimited">Overpaying</span> for Streaming
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-xl mx-auto">
            Why pay for separate subscriptions when you can have it all in one place?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Old Way Card */}
          <div className="reveal reveal-delay-1 glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#8a8a8a] mb-6">
                The &quot;Old Way&quot;
              </span>
              
              <ul className="space-y-3 mb-8">
                {OLD_SERVICES.map((service) => (
                  <li key={service.name} className="flex items-center justify-between text-sm">
                    <span className="text-[#8a8a8a]">{service.name}</span>
                    <span className="text-[#ffffff] font-semibold">{service.price}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#8a8a8a]">Monthly Total</span>
                  <span className="text-[#ffffff] font-bold">$112.42</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#8a8a8a]">Yearly Cost</span>
                  <span className="text-[#FF6B6B] font-bold line-through">$1,349.04</span>
                </div>
              </div>
            </div>
          </div>

          {/* New Way Card */}
          <div className="reveal reveal-delay-2 relative rounded-2xl overflow-hidden" style={{
            background: "linear-gradient(160deg, rgba(0,168,225,0.18), rgba(0,168,225,0.08))",
            boxShadow: "0 0 40px rgba(0,168,225,0.25), 0 0 80px rgba(0,168,225,0.1)"
          }}>
            <div className="absolute top-0 left-0 right-0 py-3 text-center text-xs font-black tracking-widest uppercase text-white" style={{ background: "var(--gradient-cta)" }}>
              Best Choice
            </div>
            
            <div className="p-8 pt-16 relative">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#00A8E1] mb-6">
                With PrimeStream
              </span>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black text-[#00A8E1]">$59.97</span>
                  <span className="text-[#8a8a8a] text-lg">/ YEAR</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#00A8E1]/20 flex items-center justify-center text-[#00A8E1] text-xs">✓</span>
                  <span className="text-[#ffffff]">Everything on the left, <strong>plus</strong></span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#00A8E1]/20 flex items-center justify-center text-[#00A8E1] text-xs">✓</span>
                  <span className="text-[#ffffff]">50,000+ Live Channels</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#00A8E1]/20 flex items-center justify-center text-[#00A8E1] text-xs">✓</span>
                  <span className="text-[#ffffff]">PPV Events (UFC, NBA, NFL)</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#00A8E1]/20 flex items-center justify-center text-[#00A8E1] text-xs">✓</span>
                  <span className="text-[#ffffff]">No Hidden Fees, Ever</span>
                </li>
              </ul>

              <div className="bg-[#0d0d0d]/50 rounded-xl p-4 text-center">
                <p className="text-[#7EC88A] text-xl font-bold">
                  You Save: $1,289.07 / year
                </p>
              </div>

              <button
                onClick={scrollToPricing}
                className="w-full mt-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 bg-[#00A8E1] text-white hover:bg-[#0077A8] hover:shadow-lg hover:shadow-[#00A8E1]/30 cursor-pointer"
              >
                Get It Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
