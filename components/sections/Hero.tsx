"use client";

import { useEffect, useState, useCallback } from "react";
import { SITE_META } from "@/config/site.config";
import { scrollToPricing } from "@/lib/utils";

const FEATURES = [
  { icon: "📺", label: "10,000+ Channels" },
  { icon: "🎬", label: "50,000+ Movies" },
  { icon: "⚡", label: "Instant Setup" },
  { icon: "🛡️", label: "Money BackGuarantee" },
] as const;

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = useCallback(scrollToPricing, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#0d0d0d]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <iframe
            className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.78vh] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/s9gSuKaKcqM?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=s9gSuKaKcqM&playsinline=1&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&branding=0&vq=hd1080&wmode=transparent"
            allow="autoplay; encrypted-media"
            loading="eager"
            title=""
            tabIndex={-1}
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 via-[#0d0d0d]/20 to-[#0d0d0d]/60" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#00A8E1]/8 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-[#0077A8]/6 rounded-full blur-[100px] pointer-events-none z-10" />

      {/* Main Content */}
      <div className="relative z-20 m-5 max-w-5xl md:px-8 w-full py-24 md:py-32 ml-8 lg:ml-24">
        <div className={`text-start transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          {/* "NOW STREAMING" Badge */}
          <div className="inline-flex items-center gap-2 bg-[#181820] backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#00A8E1] opacity-75" />
              <span className="relative rounded-full h-1.5 w-1.5 bg-[#00A8E1]" />
            </span>
            <span className="text-[#8a8a8a] text-[11px] font-medium tracking-wider uppercase">NOW STREAMING</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight">
            <span className="text-gradient-unlimited">Unlimited</span>
            <br />
            <span className="text-[#ffffff]">IPTV Streaming</span>
          </h1>

          {/* Rating Strip */}
          <div className="flex items-center justify-start gap-3 md:gap-4 mb-6">
            <div className="flex items-center gap-1">
              <span className="text-[#00A8E1] text-sm md:text-base" aria-label="Rating">★</span>
              <span className="text-[#ffffff] font-semibold text-sm md:text-base">4.9</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
            <span className="text-[#8a8a8a] text-sm md:text-base">Movies</span>
            <div className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
            <span className="text-[#8a8a8a] text-sm md:text-base">Sports</span>
            <div className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
            <span className="text-[#8a8a8a] text-sm md:text-base">4K</span>
          </div>

          {/* Description */}
          <p className="text-[#8a8a8a] text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            Access 10,000+ live channels, 50,000+ movies and series in crystal-clear HD, FHD & 4K.
            One subscription. Every screen. Instant activation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12">
            <button
              onClick={handleScroll}
              className="group px-8 py-3.5 bg-[#00A8E1] text-white rounded-full font-semibold text-base transition-all duration-300 shadow-lg shadow-[#00A8E1]/30 hover:bg-[#00A8E1] hover:shadow-[#00A8E1]/50 hover:scale-[1.03] cursor-pointer"
            >
              Start Watching
            </button>
            <a
              href="#content"
              className="px-8 py-3.5 bg-transparent backdrop-blur-sm border border-[#8a8a8a] hover:border-[#00A8E1] text-[#8a8a8a] hover:text-[#00A8E1] rounded-full font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(192,57,43,0.2)] text-center"
            >
              Watch Trailer
            </a>
          </div>

          {/* Feature Strip */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-start">
            {[
              { icon: "🎧", label: "24/7 Support" },
              { icon: "⚡", label: "Instant Activation" },
              { icon: "📶", label: "No Buffering" },
              { icon: "🛡️", label: "Secure Payment" },
            ].map((feat) => (
              <div key={feat.label} className="flex items-center gap-2">
                <span className="text-sm" aria-hidden="true">{feat.icon}</span>
                <span className="text-[#8a8a8a] text-sm">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-[scrollDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}