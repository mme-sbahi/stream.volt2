"use client";

import { useState, memo, useCallback } from "react";
import { useReveal } from "@/components/ui/useReveal";
import { scrollToPricing } from "@/lib/utils";

const VERIFIED_POSTERS = [
  "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
  "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
  "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
  "https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
  "https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
  "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
  "https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg",
  "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
  "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
  "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
  "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
  "https://image.tmdb.org/t/p/w500/AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg",
  "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
];

const POSTER_MAP: Record<string, string> = {
  "Dune: Part Two": VERIFIED_POSTERS[0],
  Oppenheimer: VERIFIED_POSTERS[1],
  "John Wick: Chapter 4": VERIFIED_POSTERS[2],
  "The Batman": VERIFIED_POSTERS[3],
  "Top Gun: Maverick": VERIFIED_POSTERS[4],
  Barbie: VERIFIED_POSTERS[5],
  "Deadpool & Wolverine": VERIFIED_POSTERS[6],
  "Inside Out 2": VERIFIED_POSTERS[7],
  "The Last of Us": VERIFIED_POSTERS[8],
  "House of the Dragon": VERIFIED_POSTERS[9],
  "The Boys": VERIFIED_POSTERS[10],
  "Stranger Things": VERIFIED_POSTERS[11],
  "The Mandalorian": VERIFIED_POSTERS[12],
  Succession: VERIFIED_POSTERS[13],
  "The Witcher": VERIFIED_POSTERS[14],
  Wednesday: VERIFIED_POSTERS[15],
  Shogun: VERIFIED_POSTERS[16],
  "The Bear": VERIFIED_POSTERS[12],
  Fallout: VERIFIED_POSTERS[18],
  "Dark Matter": VERIFIED_POSTERS[19],
  "Slow Horses": VERIFIED_POSTERS[14],
  Severance: VERIFIED_POSTERS[16],
  "3 Body Problem": VERIFIED_POSTERS[18],
  "The Crown": VERIFIED_POSTERS[13],
  "Thunderbolts*": VERIFIED_POSTERS[0],
  "Mission: Impossible 8": VERIFIED_POSTERS[1],
  Sinners: VERIFIED_POSTERS[2],
  "The Fantastic Four": VERIFIED_POSTERS[3],
  Superman: VERIFIED_POSTERS[4],
  Elio: VERIFIED_POSTERS[5],
  "Avatar: Fire and Ash": VERIFIED_POSTERS[6],
  "Jurassic World: Rebirth": VERIFIED_POSTERS[7],
  "The Bride!": VERIFIED_POSTERS[8],
  "Project Hail Mary": VERIFIED_POSTERS[9],
  "Super Mario Galaxy Movie": VERIFIED_POSTERS[10],
  "Scream 7": VERIFIED_POSTERS[11],
  Hoppers: VERIFIED_POSTERS[12],
  GOAT: VERIFIED_POSTERS[13],
  Keeper: VERIFIED_POSTERS[14],
  "The Accountant 2": VERIFIED_POSTERS[15],
};

interface Movie {
  title: string;
  year: string;
  rating: string;
  quality: string;
}

interface Category {
  label: string;
  icon: string;
  items: Movie[];
}

const CATEGORIES: Category[] = [
  {
    label: "🔥 TRENDING NOW",
    icon: "⚡",
    items: [
      { title: "Thunderbolts*", year: "2025", rating: "4.7", quality: "4K" },
      { title: "Mission: Impossible 8", year: "2025", rating: "4.8", quality: "4K" },
      { title: "Sinners", year: "2025", rating: "4.9", quality: "HD" },
      { title: "The Fantastic Four", year: "2025", rating: "4.6", quality: "4K" },
      { title: "Jurassic World: Rebirth", year: "2025", rating: "4.5", quality: "HD" },
      { title: "Superman", year: "2025", rating: "4.8", quality: "4K" },
      { title: "Elio", year: "2025", rating: "4.4", quality: "HD" },
      { title: "The Accountant 2", year: "2025", rating: "4.6", quality: "HD" },
    ],
  },
  {
    label: "🎬 NEW RELEASES",
    icon: "🎬",
    items: [
      { title: "The Bride!", year: "2026", rating: "4.5", quality: "HD" },
      { title: "Project Hail Mary", year: "2026", rating: "4.7", quality: "TS" },
      { title: "Super Mario Galaxy Movie", year: "2026", rating: "4.8", quality: "TS" },
      { title: "Scream 7", year: "2026", rating: "4.5", quality: "HD" },
      { title: "Avatar: Fire and Ash", year: "2025", rating: "4.9", quality: "HD" },
      { title: "Hoppers", year: "2026", rating: "4.3", quality: "DCP" },
      { title: "GOAT", year: "2026", rating: "4.5", quality: "HD" },
      { title: "Keeper", year: "2025", rating: "4.5", quality: "HD" },
    ],
  },
  {
    label: "🎥 BLOCKBUSTERS",
    icon: "🍿",
    items: [
      { title: "Dune: Part Two", year: "2024", rating: "4.9", quality: "4K" },
      { title: "Oppenheimer", year: "2023", rating: "4.9", quality: "4K" },
      { title: "John Wick: Chapter 4", year: "2023", rating: "4.7", quality: "4K" },
      { title: "The Batman", year: "2022", rating: "4.6", quality: "4K" },
      { title: "Top Gun: Maverick", year: "2022", rating: "4.8", quality: "4K" },
      { title: "Barbie", year: "2023", rating: "4.6", quality: "HD" },
      { title: "Deadpool & Wolverine", year: "2024", rating: "4.7", quality: "4K" },
      { title: "Inside Out 2", year: "2024", rating: "4.8", quality: "4K" },
    ],
  },
  {
    label: "📺 TOP SERIES",
    icon: "📺",
    items: [
      { title: "The Last of Us", year: "2023", rating: "4.9", quality: "S2" },
      { title: "House of the Dragon", year: "2024", rating: "4.8", quality: "S2" },
      { title: "The Boys", year: "2024", rating: "4.8", quality: "S4" },
      { title: "Stranger Things", year: "2024", rating: "4.8", quality: "S5" },
      { title: "The Mandalorian", year: "2023", rating: "4.7", quality: "S3" },
      { title: "Succession", year: "2023", rating: "4.9", quality: "S4" },
      { title: "The Witcher", year: "2023", rating: "4.6", quality: "S3" },
      { title: "Wednesday", year: "2022", rating: "4.6", quality: "S2" },
    ],
  },
  {
    label: "👑 PREMIUM PICKS",
    icon: "👑",
    items: [
      { title: "The Crown", year: "2023", rating: "4.7", quality: "S6" },
      { title: "Shogun", year: "2024", rating: "4.9", quality: "S1" },
      { title: "The Bear", year: "2024", rating: "4.8", quality: "S3" },
      { title: "Fallout", year: "2024", rating: "4.7", quality: "S1" },
      { title: "3 Body Problem", year: "2024", rating: "4.5", quality: "S1" },
      { title: "Slow Horses", year: "2024", rating: "4.8", quality: "S4" },
      { title: "Severance", year: "2025", rating: "4.9", quality: "S2" },
      { title: "Dark Matter", year: "2024", rating: "4.6", quality: "S1" },
    ],
  },
];

export default function ContentPreview() {
  const ref = useReveal();
  const [hoveredCard, setHoveredCard] = useState<{
    category: number;
    index: number;
  } | null>(null);

  const handleHover = useCallback((category: number, index: number) => {
    setHoveredCard({ category, index });
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  return (
    <section
      id="content"
      className="py-16 md:py-24 relative overflow-hidden bg-[#0d0d0d]"
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(90deg, #0d0d0d, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(-90deg, #0d0d0d, transparent)" }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A8E1]/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="relative z-0 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#00A8E1] mb-4 px-3 py-1 rounded-full border border-[#00A8E1]/30 bg-[#00A8E1]/10 animate-pulse">
            Content Library
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffffff] mb-4">
            See What's{" "}
            <span className="text-gradient-unlimited">Waiting for You</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-xl mx-auto">
            50,000+ titles across every genre. Sports, Movies, Series, and Kids
            — all in one place.
          </p>
        </div>

        <div className="space-y-10 md:space-y-12">
          {CATEGORIES.map((category, catIdx) => (
            <div key={category.label}>
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">{category.icon}</span>
                  <h3 className="text-white text-sm md:text-base font-semibold tracking-wide uppercase">
                    {category.label}
                  </h3>
                  <div className="hidden md:flex gap-1 ml-2">
                    <div className="w-1 h-1 rounded-full bg-[#00A8E1]"></div>
                    <div className="w-1 h-1 rounded-full bg-[#00A8E1]"></div>
                    <div className="w-1 h-1 rounded-full bg-[#8a8a8a]"></div>
                  </div>
                </div>
                <button
                  onClick={scrollToPricing}
                  className="text-[#8a8a8a] hover:text-[#00A8E1] text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1 group"
                >
                  View All
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              <div className="overflow-x-auto hide-scrollbar">
                <div
                  className="flex gap-4 pb-4"
                  style={{ width: "max-content" }}
                >
                  {category.items.map((item, idx) => {
                    const posterUrl = POSTER_MAP[item.title] || VERIFIED_POSTERS[(catIdx * 8 + idx) % VERIFIED_POSTERS.length];
                    return (
                      <ContentCard
                        key={`${catIdx}-${idx}`}
                        title={item.title}
                        year={item.year}
                        quality={item.quality}
                        rating={item.rating}
                        posterUrl={posterUrl}
                        isHovered={
                          hoveredCard?.category === catIdx &&
                          hoveredCard?.index === idx
                        }
                        onHover={() => handleHover(catIdx, idx)}
                        onLeave={handleLeave}
                        delay={idx * 30}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 px-6 reveal flex flex-col">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E1]/20 to-[#00A8E1]/20 rounded-2xl blur-xl" />
            <p className="relative text-[#8a8a8a] text-sm mb-4">
              + 49,994 more titles available instantly after signup
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={scrollToPricing}
              type="button"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-[#00A8E1] text-white rounded-xl font-semibold transition-all duration-300 hover:bg-[#00A8E1] hover:scale-105 hover:shadow-2xl hover:shadow-[#00A8E1]/30 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true" />
              <span>Unlock Full Library</span>
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const ContentCard = memo(function ContentCard({
  title,
  year,
  quality,
  rating,
  posterUrl,
  isHovered,
  onHover,
  onLeave,
  delay,
}: {
  title: string;
  year: string;
  quality: string;
  rating: string;
  posterUrl: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  delay: number;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="content-card group w-36 md:w-44 flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={scrollToPricing}
    >
      <div className="relative rounded-xl overflow-hidden aspect-[2/3] shadow-lg bg-gradient-to-br from-gray-900 to-black">
        {posterUrl && !imageError ? (
          <img
            src={posterUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : null}
        {(!posterUrl || imageError) && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0077A8]/40 to-[#00A8E1]/40 flex flex-col items-center justify-center p-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl md:text-3xl mb-3 backdrop-blur-sm">
              🎬
            </div>
            <p className="text-white text-xs md:text-sm font-bold text-center leading-tight line-clamp-2">
              {title}
            </p>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-1.5 py-0.5 z-10">
          <span className="text-[9px] text-cyan-400">★ {rating}</span>
        </div>

        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm rounded-full px-1.5 py-0.5 z-10">
          <span className="text-[9px] text-white/80">{year}</span>
        </div>

        <div className="absolute bottom-2 left-2 right-2 z-10">
          <div className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-lg px-2 py-1 text-center border border-white/10">
            <span className="text-[9px] md:text-[10px] text-[#00A8E1] font-medium">
              {quality}
            </span>
          </div>
        </div>

        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-2 transition-all duration-300 z-20 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00A8E1]/80 backdrop-blur-md flex items-center justify-center text-xl md:text-2xl border border-white/30 transform scale-100 hover:scale-110 transition-transform">
            ▶
          </div>
          <p className="text-white text-[10px] md:text-xs font-medium">
            Watch Now
          </p>
        </div>
      </div>
    </div>
  );
});
