"use client";

const DEVICES = [
  { name: "Smart TV", icon: "📺" },
  { name: "Fire TV", icon: "🔥" },
  { name: "Android", icon: "🤖" },
  { name: "iPhone", icon: "📱" },
  { name: "PC", icon: "💻" },
  { name: "Mac", icon: "💻" },
  { name: "iPad", icon: "⬜" },
  { name: "Android TV", icon: "📺" },
  { name: "Chromecast", icon: "📺" },
  { name: "Mag Box", icon: "📦" },
];

const REPEATS = [...DEVICES, ...DEVICES, ...DEVICES, ...DEVICES];

export default function CompatibleDevices() {
  return (
    <section id="devices" className="py-24 px-6 relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(0,168,225,0.06), transparent)" }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#00A8E1] mb-4 px-3 py-1 rounded-full border border-[#00A8E1]/30 bg-[#00A8E1]/10">
            Universal Compatibility
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4">
            Watch on <span className="text-gradient-unlimited">Any Device</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-xl mx-auto">
            Stream on your big screen, laptop, or mobile. One account, unlimited screens.
          </p>
        </div>

        <div className="overflow-hidden py-4">
          <div className="marquee-track">
            {REPEATS.map((device, i) => (
              <div
                key={i}
                className="inline-flex flex-col items-center gap-4 mx-8 p-8 rounded-3xl border border-white/5 bg-white/[0.03] min-w-[200px] text-[#8a8a8a] hover:text-[#ffffff] cursor-pointer transition-all hover:bg-white/[0.06] hover:scale-110 hover:shadow-xl hover:shadow-[#00A8E1]/10"
              >
                <span className="text-6xl">{device.icon}</span>
                <span className="text-base font-semibold whitespace-nowrap">{device.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-10 text-[#8a8a8a] text-sm">
          Compatible with Firestick, Smart TV, Android, iOS, PC, Mag Box, and more.
        </p>
      </div>
    </section>
  );
}