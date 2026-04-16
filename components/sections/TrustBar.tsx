import { SITE_META } from "@/config/site.config";

const LOGOS = [
  { icon: "💳", label: "Visa" },
  { icon: "💳", label: "Mastercard" },
  { icon: "🅿️", label: "PayPal" },
  { icon: "₿", label: "Crypto" },
  { icon: "🖥️", label: "Smart TV" },
  { icon: "📱", label: "Mobile" },
  { icon: "💻", label: "PC / Mac" },
  { icon: "🔥", label: "Firestick" },
];

const REPEATS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export default function TrustBar() {
  return (
    <section className="py-6 border-y border-white/5 overflow-hidden relative bg-[#0d0d0d]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #0d0d0d 0%, transparent 15%, transparent 85%, #0d0d0d 100%)",
          zIndex: 10,
        }}
      />

      <div className="flex items-center gap-8 mb-4 justify-center flex-wrap px-6">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            {["👤","👤","👤"].map((u, i) => (
              <span key={i} className="w-6 h-6 rounded-full bg-[#0077A8] text-[10px] flex items-center justify-center border border-[#00A8E1]">
                {u}
              </span>
            ))}
          </div>
          <span className="text-[#8a8a8a] text-sm font-medium">
            Trusted by <span className="text-[#ffffff] font-bold">10,000+</span> users worldwide
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-[#7EC88A] text-sm">●</span>
          <span className="text-[#8a8a8a] text-sm">99.9% Uptime Guarantee</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-[#00A8E1] text-sm">★★★★★</span>
          <span className="text-[#8a8a8a] text-sm">4.9/5 Average Rating</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          {REPEATS.map((item, i) => (
            <div key={i} className="inline-flex items-center gap-2 mx-6 text-[#8a8a8a] hover:text-[#ffffff] transition-colors">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
