"use client";

import { useState, memo, useCallback } from "react";
import { useReveal } from "@/components/ui/useReveal";
import { scrollToPricing } from "@/lib/utils";

// ============================================================================
// ADD YOUR POSTER IMAGES HERE - Just add the URLs to this array
// The posters will be automatically assigned to each content item
// Example: "https://example.com/poster.jpg"
// ============================================================================
const POSTER_URLS: string[] = [
  // Add your poster URLs here, for example:
  // "https://image.tmdb.org/t/p/w500/your-poster-1.jpg",
  // "https://image.tmdb.org/t/p/w500/your-poster-2.jpg",
  // "https://image.tmdb.org/t/p/w500/your-poster-3.jpg",
];

// Or you can map specific titles to specific posters:
const POSTER_MAP: Record<string, string> = {
  // "Title Name": "https://example.com/poster.jpg",
  "Mission: Impossible 8" : "https://www.joblo.com/wp-content/uploads/2025/02/tom-cruise-last-mission-impossible-movie.jpg",
  "Thunderbolts*" : "https://preview.redd.it/new-poster-for-thunderbolts-v0-c2ez7p4cc7ie1.jpeg?auto=webp&s=0c201be91617b9c88a6afebd324afd4974ffe26c",
  "Sinners" : "https://assets.bigcartel.com/product_images/99ee7a65-3ca9-43b4-b587-e09ff13dfd7e/sinners-poster.jpg?auto=format&fit=max&w=2000",
  "The Fantastic Four" : "https://lumiere-a.akamaihd.net/v1/images/fantastic_4_1_sheet_new_cta_dbb14854.jpeg",
  "Jurassic World: Rebirth" : "https://m.media-amazon.com/images/M/MV5BNjg2NTcwYWQtYzk4NS00MTJhLWEzZjItMzIxNjk3YzlkYzU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "Superman" : "https://i.ebayimg.com/images/g/GU0AAOSw-6RoXMdt/s-l1200.jpg",

  "Premier League": "https://i.pinimg.com/736x/7a/09/34/7a0934d0776d2475193596e0e3e0dcec.jpg",
  "NBA Finals" : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/678b8666663789.5b1e629f7e15e.jpg", 
  "UFC 310" : "https://i.ebayimg.com/images/g/Y4gAAOSwgKhnanJR/s-l1200.jpg",
  "Formula 1 GP" : "https://letitiamorris.com/wp-content/uploads/2025/07/united-states-.jpg",
  "Champions League" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE_5BKHef-u5soZaHoFcCTqHd9l9pkWrDrQ&s",
  "Wimbledon" : "https://cdn.scoopempire.com/wp-content/uploads/2016/06/Jaziri-715x476.jpg",

  "WWE WrestleMania" : "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608878253/wwe-wrestlemania-the-official-poster-collection-9781608878253_hr.jpg",
  "boxing Match" : "https://i.pinimg.com/736x/7e/8e/52/7e8e52e181bf70949129b549b133df9e.jpg",
  "MMA Fight Night" : "https://flyerheroes.com/wp-content/uploads/edd/2014/05/MMA-Fight-Night-1.jpg",
  "UFC Pay-Per-View" : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/25857b100617953.632f41cb8e827.jpg",
  "boxing Championship" : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/boxing-championship-fight-flyer-design-template-b7c01fa1287df404f2b3e9ba60e4c207_screen.jpg?ts=1677599732",
  "Bellator MMA" : "https://lh6.googleusercontent.com/proxy/XN5bddQutrpF82nfgF2i2o6XMkvAAjCxdni_16KSl1j7wVkp0azJle38Wu3pTx6M1TW6WH_CEm0BvGezjOgJrLAkGUzuSYkKjro4Kw",

  "The Last of Us" : "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/11/last-of-us-tv-1.png?ssl=1",
  "House of the Dragon" : "https://cdn.europosters.eu/image/1300/143695.jpg",
  "The Boys": "https://m.media-amazon.com/images/M/MV5BZjU4OWNiYzQtMzc1NS00NjZlLTgyYTctZWY4ZmEzMTkxYjA4XkEyXkFqcGc@._V1_.jpg",
  "Stranger Things" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mJVTNucsCTCSZX4JMZHj38z7iNE2GNBIrA&s",
  "The Mandalorian" : "https://i.redd.it/a7ghxpzj1bv31.png",
  "Succession" : "https://original.fontsinuse.com/fontsinuse.com/use-images/N202/202222/202222.jpeg",

  "Bluey" :"https://m.media-amazon.com/images/I/610Aj6kygcL.jpg",
  "Paw Patrol": "https://m.media-amazon.com/images/I/81lrqdAQywL.jpg",
  "Peppa Pig": "https://static.posters.cz/image/1300/11907.jpg",
  "SpongeBob": "https://image.tmdb.org/t/p/original/amvtZgiTty0GHIgD56gpouBWrcy.jpg",
  "Cocomelon": "https://lh6.googleusercontent.com/proxy/L-MDOxqZXnVZ7HpOhMIzf-W1uehouFhLTWYLeSfZFWXhVrqvwQO75Zd08iRE7yy69aHcazUddGkgJACWE-BJmJ-ltyksx10E",
  "Avatar: TLA": "https://m.media-amazon.com/images/I/71ZxVE+dYXL._AC_UF1000,1000_QL80_.jpg",

  "Star Wars: Andor" : "https://m.media-amazon.com/images/I/81vRGqjEJ0L.jpg",
  "The Acolyte" : "https://image.tmdb.org/t/p/original/yuCKJsbzzadXh6tMUsIwZ2zaKXy.jpg",
  "Avatar: Frontiers" : "https://static.wikia.nocookie.net/jamescameronsavatar/images/6/64/FOP_boxart.png/revision/latest/scale-to-width-down/1200?cb=20240123110407",
  "Inside Out 3" : "https://m.media-amazon.com/images/I/714xn6rxXSL.jpg",
  "Moana 2" : "https://m.media-amazon.com/images/I/81rjqvHFtkL._AC_UF894,1000_QL80_.jpg",
  "Zootopia 2" : "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_zootopia_poster_v2_a1e31204.jpeg",

  "CNN Live": "https://media.cnn.com/api/v1/images//stellar/prod/2426775-cnn-cnnnewscentral-2023-2432x1369-cnngo.jpg",
  "BBC News" : "https://ichef.bbci.co.uk/news/1024/branded_news/14A5/production/_132558250_p0bvs4dq-3.jpg",
  "Fox News" : "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/11/290/435/83544729-fox-and-friends-first-poster.png?ve=1&tl=1",
  "Sky News" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlnA1AIjCY-S3lF4gWXrVqJ2Vz0FYP9Bcmg&s",
  "Al Jazeera" : "https://m.media-amazon.com/images/M/MV5BYTFjYzdmMDQtNzYwYi00MDBmLWIyNzctYTQ2ZGYzM2FiZDI4XkEyXkFqcGc@._V1_.jpg",
  "Euronews" : "https://pbs.twimg.com/profile_images/1594718198049406976/m8DZS7n2_400x400.jpg",

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
    label: "🎬 MOVIES",
    icon: "🎬",
    items: [
      { title: "Thunderbolts*", year: "2025", rating: "4.7", quality: "4K" },
      { title: "Mission: Impossible 8", year: "2025", rating: "4.8", quality: "4K" },
      { title: "Sinners", year: "2025", rating: "4.9", quality: "HD" },
      { title: "The Fantastic Four", year: "2025", rating: "4.6", quality: "4K" },
      { title: "Jurassic World: Rebirth", year: "2025", rating: "4.5", quality: "HD" },
      { title: "Superman", year: "2025", rating: "4.8", quality: "4K" },
    ],
  },
  {
    label: "⚽ SPORTS",
    icon: "⚽",
    items: [
      { title: "Premier League", year: "LIVE", rating: "4.9", quality: "4K" },
      { title: "NBA Finals", year: "LIVE", rating: "4.8", quality: "4K" },
      { title: "UFC 310", year: "LIVE", rating: "4.7", quality: "HD" },
      { title: "Formula 1 GP", year: "LIVE", rating: "4.9", quality: "4K" },
      { title: "Champions League", year: "LIVE", rating: "4.8", quality: "4K" },
      { title: "Wimbledon", year: "LIVE", rating: "4.7", quality: "HD" },
    ],
  },
  {
    label: "🏆 PPV EVENTS",
    icon: "🏆",
    items: [
      { title: "WWE WrestleMania", year: "LIVE", rating: "4.9", quality: "4K" },
      { title: "boxing Match", year: "LIVE", rating: "4.8", quality: "4K" },
      { title: "MMA Fight Night", year: "LIVE", rating: "4.7", quality: "HD" },
      { title: "UFC Pay-Per-View", year: "LIVE", rating: "4.9", quality: "4K" },
      { title: "boxing Championship", year: "LIVE", rating: "4.8", quality: "4K" },
      { title: "Bellator MMA", year: "LIVE", rating: "4.6", quality: "HD" },
    ],
  },
  {
    label: "📺 SERIES",
    icon: "📺",
    items: [
      { title: "The Last of Us", year: "2023", rating: "4.9", quality: "S2" },
      { title: "House of the Dragon", year: "2024", rating: "4.8", quality: "S2" },
      { title: "The Boys", year: "2024", rating: "4.8", quality: "S4" },
      { title: "Stranger Things", year: "2024", rating: "4.8", quality: "S5" },
      { title: "The Mandalorian", year: "2023", rating: "4.7", quality: "S3" },
      { title: "Succession", year: "2023", rating: "4.9", quality: "S4" },
    ],
  },
  {
    label: "👶 KIDS",
    icon: "👶",
    items: [
      { title: "Bluey", year: "2024", rating: "4.9", quality: "S4" },
      { title: "Paw Patrol", year: "2024", rating: "4.8", quality: "S10" },
      { title: "Peppa Pig", year: "FULL", rating: "4.7", quality: "HD" },
      { title: "SpongeBob", year: "FULL", rating: "4.8", quality: "HD" },
      { title: "Cocomelon", year: "2024", rating: "4.9", quality: "S8" },
      { title: "Avatar: TLA", year: "FULL", rating: "4.9", quality: "HD" },
    ],
  },
  {
    label: "🦄 DISNEY+",
    icon: "🏰",
    items: [
      { title: "Star Wars: Andor", year: "2024", rating: "4.9", quality: "S3" },
      { title: "The Acolyte", year: "2024", rating: "4.5", quality: "S1" },
      { title: "Avatar: Frontiers", year: "2024", rating: "4.7", quality: "4K" },
      { title: "Inside Out 3", year: "2025", rating: "4.8", quality: "4K" },
      { title: "Moana 2", year: "2024", rating: "4.9", quality: "4K" },
      { title: "Zootopia 2", year: "2025", rating: "4.7", quality: "4K" },
    ],
  },
  {
    label: "📰 NEWS",
    icon: "📰",
    items: [
      { title: "CNN Live", year: "LIVE", rating: "4.5", quality: "HD" },
      { title: "BBC News", year: "LIVE", rating: "4.6", quality: "HD" },
      { title: "Fox News", year: "LIVE", rating: "4.4", quality: "HD" },
      { title: "Sky News", year: "LIVE", rating: "4.7", quality: "HD" },
      { title: "Al Jazeera", year: "LIVE", rating: "4.5", quality: "HD" },
      { title: "Euronews", year: "LIVE", rating: "4.6", quality: "HD" },
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
            <div key={category.label} className="reveal opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{ animationDelay: `${catIdx * 0.15}s` }}>
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
                    const posterUrl = POSTER_MAP[item.title] || POSTER_URLS[(catIdx * 6 + idx) % POSTER_URLS.length] || "";
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
                        delay={idx * 50}
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

  const getCategoryEmoji = () => {
    if (title.includes("League") || title.includes("NBA") || title.includes("UFC") || title.includes("Formula") || title.includes("Wimbledon") || title.includes("Champions")) return "⚽";
    if (title.includes("WWE") || title.includes("MMA") || title.includes("boxing") || title.includes("Bellator")) return "🥊";
    if (title.includes("Bluey") || title.includes("Paw") || title.includes("Peppa") || title.includes("Sponge") || title.includes("Cocomelon") || title.includes("Avatar")) return "👶";
    if (title.includes("Star Wars") || title.includes("Andor") || title.includes("Acolyte") || title.includes("Avatar: Frontiers") || title.includes("Inside Out") || title.includes("Moana") || title.includes("Zootopia")) return "🏰";
    if (title.includes("CNN") || title.includes("BBC") || title.includes("Fox") || title.includes("Sky") || title.includes("Al Jazeera") || title.includes("Euronews")) return "📺";
    return "🎬";
  };

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
              {getCategoryEmoji()}
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
