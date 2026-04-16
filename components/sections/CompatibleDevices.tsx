"use client";

import { useReveal } from "@/components/ui/useReveal";
import { scrollToPricing } from "@/lib/utils";

const DEVICES = [
  { name: "Mac & PC", icon: "💻" },
  { name: "Xbox", icon: "🎮" },
  { name: "Apple TV", icon: "🍎" },
  { name: "Fire TV", icon: "🔥" },
  { name: "Roku", icon: "📡" },
  { name: "LG Smart TV", icon: "📺" },
  { name: "Samsung", icon: "📺" },
  { name: "IPTV Box", icon: "📦" },
  { name: "Android TV", icon: "🤖" },
  { name: "Consoles", icon: "🎮" },
];

export default function CompatibleDevices() {
  const ref = useReveal();

  return (
    <section id="compatible-devices" className="py-24 px-6 relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(0,168,225,0.06), transparent)" }} />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#00A8E1] mb-4 px-3 py-1 rounded-full border border-[#00A8E1]/30 bg-[#00A8E1]/10">
            Universal Compatibility
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4">
            Compatible With <span className="text-gradient-unlimited">All Devices</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-xl mx-auto">
            Watch live TV, series, and movies at home or on-the-go. Zero freeze, real-time streaming, and no delays.
          </p>
        </div>

        {/* Scrolling Device Row */}
        <div className="reveal">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #0d0d0d, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #0d0d0d, transparent)" }} />
            
            <div className="overflow-hidden">
              <div className="flex gap-4 animate-[scroll_10s_linear_infinite]">
                {[...DEVICES, ...DEVICES, ...DEVICES, ...DEVICES].map((device, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 glass-card rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-1 hover:ring-[#00A8E1]/40 group"
                    onClick={scrollToPricing}
                  >
                    <span className="text-4xl group-hover:scale-110 transition-transform">{device.icon}</span>
                    <span className="text-[#8a8a8a] text-sm font-medium text-center group-hover:text-white transition-colors">
                      {device.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="reveal text-center mt-10 text-[#8a8a8a] text-sm">
          Works with any device supporting IPTV apps, VLC, or m3u playlists. No restrictions.
        </p>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
