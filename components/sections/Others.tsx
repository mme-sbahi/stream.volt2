"use client";

import { useState } from "react";
import { useReveal } from "@/components/ui/useReveal";
import {
  DEVICES,
  TESTIMONIALS,
  FAQS,
  SITE_META,
  NAV_LINKS,
} from "@/config/site.config";

/* ============================================================
   DEVICES
   ============================================================ */
export function Devices() {
  const ref = useReveal();

  return (
    <section id="devices" className="py-24 px-6 relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(0,168,225,0.06), transparent)" }} />

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#00A8E1] mb-4 px-3 py-1 rounded-full border border-[#00A8E1]/30 bg-[#00A8E1]/10">
            Any Device
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffffff] mb-4">
            Watch on{" "}
            <span className="text-gradient-unlimited">Every Screen</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-xl mx-auto">
            One subscription. Unlimited devices. Stream seamlessly across all your gadgets.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {DEVICES.map((device, i) => (
            <div
              key={device.name}
              className={`reveal reveal-delay-${(i % 4) + 1} group glass-card rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default transition-all duration-300 hover:scale-105 hover:ring-1 hover:ring-[#00A8E1]/40`}
            >
              {device.icon === "apple" ? (
                <svg className="w-10 h-10 text-[#ffffff] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              ) : device.icon === "android" ? (
                <svg className="w-10 h-10 text-[#7EC88A] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-2.12-1.1-3.98-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                </svg>
              ) : (
                <span className="text-4xl transition-transform duration-300 group-hover:scale-110">{device.icon}</span>
              )}
              <span className="text-[#8a8a8a] text-sm font-medium group-hover:text-[#ffffff] transition-colors">
                {device.name}
              </span>
            </div>
          ))}
        </div>

        <p className="reveal text-center mt-10 text-[#8a8a8a] text-sm">
          Works with any device supporting IPTV apps, VLC, or m3u playlists.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
export function Testimonials() {
  const ref = useReveal();

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0077A8]/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#00A8E1] mb-4 px-3 py-1 rounded-full border border-[#00A8E1]/30 bg-[#00A8E1]/10">
            Real Reviews
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffffff] mb-4">
            Loved by{" "}
            <span className="text-gradient-unlimited">10,000+ Subscribers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${(i % 3) + 1} glass-card rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300 hover:ring-1 hover:ring-[#00A8E1]/30`}
            >
              {/* Stars */}
              <div className="stars text-base">
                {"★".repeat(t.rating)}
                <span className="text-[#8a8a8a]/30">{"★".repeat(5 - t.rating)}</span>
              </div>

              {/* Review */}
              <p className="text-[#8a8a8a] text-sm leading-relaxed flex-1">
                "{t.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[#ffffff] text-sm font-semibold">{t.name} {t.country}</p>
                  <p className="text-[#8a8a8a] text-xs">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden bg-[#0d0d0d]">
      <div ref={ref} className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#00A8E1] mb-4 px-3 py-1 rounded-full border border-[#00A8E1]/30 bg-[#00A8E1]/10">
            FAQ
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffffff] mb-4">
            Got{" "}
            <span className="text-gradient-unlimited">Questions?</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg">
            Everything you need to know before signing up.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? "ring-1 ring-[#00A8E1]/40" : "hover:ring-1 hover:ring-[#00A8E1]/20"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => toggle(i)}
              >
                <span className={`font-semibold transition-colors ${openIndex === i ? "text-[#ffffff]" : "text-[#8a8a8a]"}`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                    openIndex === i ? "rotate-45 text-white" : "text-[#8a8a8a]"
                  }`}
                  style={{ background: openIndex === i ? "#00A8E1" : "rgba(255,255,255,0.05)" }}
                >
                  +
                </span>
              </button>
              <div
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={{ maxHeight: openIndex === i ? "300px" : "0px", opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="text-[#8a8a8a] text-sm leading-relaxed px-6 pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-base"
                style={{ background: "var(--gradient-cta)" }}
              >
                P
              </div>
              <span className="font-display text-xl font-bold text-[#ffffff]">{SITE_META.name}</span>
            </div>
            <p className="text-[#8a8a8a] text-sm leading-relaxed mb-5">
              Premium IPTV service with 10,000+ channels and 50,000+ VOD titles worldwide.
            </p>
            <div className="flex gap-3">
              {["𝕏", "f", "in", "▶"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-[#8a8a8a] hover:text-[#ffffff] hover:bg-[#00A8E1]/20 transition-all text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#ffffff] font-semibold text-sm mb-4 uppercase tracking-widest">Navigation</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#8a8a8a] text-sm hover:text-[#ffffff] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-[#ffffff] font-semibold text-sm mb-4 uppercase tracking-widest">Support</p>
            <ul className="space-y-2.5 text-[#8a8a8a] text-sm">
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Setup Guides</a></li>
              <li><a href="#" className="hover:text-[#ffffff] transition-colors">Compatible Apps</a></li>
              <li><a href="#faq" className="hover:text-[#ffffff] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#ffffff] font-semibold text-sm mb-4 uppercase tracking-widest">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${SITE_META.email}`} className="flex items-center gap-2 text-[#8a8a8a] text-sm hover:text-[#ffffff] transition-colors">
                  <span>📧</span> {SITE_META.email}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-[#8a8a8a] text-sm hover:text-[#ffffff] transition-colors">
                  <span>💬</span> {SITE_META.whatsapp}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-[#8a8a8a] text-sm hover:text-[#ffffff] transition-colors">
                  <span>✈️</span> {SITE_META.telegram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8a8a8a]/50 text-xs">
            © 2025 {SITE_META.name}. All rights reserved. For entertainment purposes only.
          </p>
          <div className="flex gap-6 text-[#8a8a8a]/50 text-xs">
            <a href="#" className="hover:text-[#8a8a8a] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#8a8a8a] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#8a8a8a] transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
