// ============================================================
// SITE CONFIGURATION — single source of truth
// Edit colors, content, pricing, links here
// ============================================================

export const COLORS = {
  // Brand palette
  primary: "#C0392B",        // accent-hot
  primaryLight: "#E8A090",   // warm
  primaryGlow: "#C0392B80",  // accent-hot @ 50%
  secondary: "#8B1A1A",      // accent
  secondaryGlow: "#8B1A1A80",
  accent: "#E8A090",         // warm (badges/highlights)

  // Backgrounds
  bgDeep: "#0E0E10",         // bg
  bgCard: "#181820",         // card surface
  bgCardHover: "#1f1f28",
  bgGlass: "rgba(255,255,255,0.04)",
  bgGlassBorder: "rgba(255,255,255,0.08)",

  // Text
  textPrimary: "#EDE9E0",
  textSecondary: "#8C8C9C",
  textMuted: "#8C8C9C",

  // Gradients (used as Tailwind arbitrary values or inline styles)
  gradHero: "linear-gradient(135deg, #0E0E10 0%, #1a0e0e 50%, #0E0E10 100%)",
  gradCard: "linear-gradient(135deg, rgba(192,57,43,0.1), rgba(232,160,144,0.05))",
  gradText: "linear-gradient(90deg, #C0392B, #E8A090)",
  gradButton: "linear-gradient(135deg, #C0392B, #E8A090)",
  gradButtonHover: "linear-gradient(135deg, #8B1A1A, #C0392B)",
} as const;

export const SITE_META = {
  name: "PrimeStream",
  tagline: "Unlimited IPTV Streaming Experience",
  subTagline: "Access 10,000+ Channels, Movies & Series in HD, FHD & 4K",
  email: "support@primestream.tv",
  whatsapp: "+1 (555) 000-0000",
  telegram: "@primestream",
} as const;

export const TRUST_BADGES = [
  { label: "24/7 Support", icon: "headset" },
  { label: "Instant Activation", icon: "bolt" },
  { label: "No Buffering", icon: "wifi" },
  { label: "Secure Payment", icon: "shield" },
] as const;

export const FEATURES = [
  {
    icon: "📺",
    title: "10,000+ Live Channels",
    description: "Access premium channels from 50+ countries in crystal-clear HD & 4K quality.",
  },
  {
    icon: "🎬",
    title: "Movies & TV Library",
    description: "Explore 50,000+ on-demand titles — blockbusters, series, documentaries and more.",
  },
  {
    icon: "⚡",
    title: "Anti-Freeze Technology",
    description: "Our CDN infrastructure guarantees zero-lag, buffer-free viewing 24/7.",
  },
  {
    icon: "📱",
    title: "Multi-Device Support",
    description: "Watch on Smart TV, iOS, Android, Firestick, PC — up to 5 screens simultaneously.",
  },
  {
    icon: "🛡️",
    title: "24/7 Customer Support",
    description: "Dedicated support team available around the clock via chat, email & WhatsApp.",
  },
  {
    icon: "🎯",
    title: "4K Ultra HD Streaming",
    description: "Experience cinema-quality resolution with Dolby Atmos audio on compatible devices.",
  },
] as const;

export const PLANS = [
  {
    id: "1m",
    label: "1 Month",
    price: 12,
    originalPrice: 18,
    popular: false,
    features: [
      "10,000+ Live Channels",
      "50,000+ Movies & Series",
      "HD / FHD Quality",
      "1 Device",
      "24/7 Support",
      "Instant Activation",
    ],
  },
  {
    id: "3m",
    label: "3 Months",
    price: 28,
    originalPrice: 54,
    popular: false,
    features: [
      "10,000+ Live Channels",
      "50,000+ Movies & Series",
      "HD / FHD / 4K Quality",
      "2 Devices",
      "24/7 Priority Support",
      "Instant Activation",
    ],
  },
  {
    id: "6m",
    label: "6 Months",
    price: 45,
    originalPrice: 108,
    popular: true,
    features: [
      "10,000+ Live Channels",
      "50,000+ Movies & Series",
      "Full 4K + Dolby Audio",
      "3 Devices",
      "24/7 VIP Support",
      "Instant Activation",
      "EPG Guide Included",
    ],
  },
  {
    id: "12m",
    label: "12 Months",
    price: 75,
    originalPrice: 216,
    popular: false,
    features: [
      "10,000+ Live Channels",
      "50,000+ Movies & Series",
      "Full 4K + Dolby Audio",
      "5 Devices",
      "24/7 VIP Support",
      "Instant Activation",
      "EPG Guide Included",
      "Free Renewal Bonus",
    ],
  },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Choose Your Plan",
    description: "Pick the subscription that fits your needs. Monthly, quarterly or annual — all include full access.",
    icon: "📋",
  },
  {
    number: "02",
    title: "Get Credentials",
    description: "Receive your login details instantly via email. Start watching in minutes.",
    icon: "✉️",
  },
  {
    number: "03",
    title: "Start Streaming",
    description: "Login on any device and enjoy unlimited entertainment.",
    icon: "▶️",
  },
] as const;

export const DEVICES = [
  { name: "Smart TV", icon: "📺" },
  { name: "Fire TV", icon: "🔥" },
  { name: "Android", icon: "🤖" },
  { name: "iPhone", icon: "📱" },
  { name: "PC / Mac", icon: "💻" },
  { name: "Tablet", icon: "⬜" },
  { name: "Chromecast", icon: "🔴" },
  { name: "Mag Box", icon: "📦" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marcus J.",
    country: "🇺🇸",
    rating: 5,
    avatar: "MJ",
    review: "Switched from 3 other IPTV providers. PrimeStream is on another level — zero buffering, insane channel selection. Worth every penny.",
  },
  {
    name: "Sofia L.",
    country: "🇩🇪",
    rating: 5,
    avatar: "SL",
    review: "Crystal clear 4K on my LG TV. Setup was done in literally 2 minutes. The support team replied at 2am. Incredible service.",
  },
  {
    name: "Karim A.",
    country: "🇦🇪",
    rating: 5,
    avatar: "KA",
    review: "Best IPTV service I've ever used. All Arabic, European and Sports channels. My whole family uses it on different devices — seamless.",
  },
  {
    name: "James T.",
    country: "🇬🇧",
    rating: 5,
    avatar: "JT",
    review: "Premier League in 4K with no lag. I cancelled my cable subscription the same day I signed up. Should have done this years ago.",
  },
  {
    name: "Priya M.",
    country: "🇮🇳",
    rating: 4,
    avatar: "PM",
    review: "Amazing Bollywood and regional content library. Smooth streaming even on mobile data. Highly recommend the 6-month plan.",
  },
  {
    name: "Carlos R.",
    country: "🇧🇷",
    rating: 5,
    avatar: "CR",
    review: "La Liga matches in 4K, Netflix-level UI, and my kids use it for cartoons on their tablets. Best money I spend monthly.",
  },
] as const;

export const FAQS = [
  {
    question: "How does IPTV work?",
    answer: "IPTV delivers television content over the internet instead of traditional cable or satellite. You receive a login (m3u link or app credentials) that you plug into a compatible app on your device. Channels and VOD content stream directly to you in real-time.",
  },
  {
    question: "Is it compatible with my device?",
    answer: "Yes! PrimeStream works on Smart TVs (Samsung, LG, Sony), Android TV boxes, Firestick, iOS and Android phones/tablets, Mac and Windows PCs, and Chromecast. Any device that supports IPTV apps or VLC is compatible.",
  },
  {
    question: "How do I receive my login credentials?",
    answer: "Immediately after your payment is confirmed, your login details are automatically sent to your email address. The entire process takes under 60 seconds. If you don't receive them within 5 minutes, our 24/7 support team is ready to help.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 24-hour satisfaction guarantee. If you experience technical issues that our support team cannot resolve within 24 hours of your purchase, we will issue a full refund. We are confident in our service quality.",
  },
  {
    question: "Will I experience buffering?",
    answer: "Our servers run on enterprise-grade CDN infrastructure with 99.9% uptime. The vast majority of users experience zero buffering on a standard 10 Mbps connection. For 4K streams, we recommend 25 Mbps+.",
  },
  {
    question: "Can I use it on multiple devices simultaneously?",
    answer: "Yes, depending on your plan. The 1-Month plan supports 1 device, 3-Month supports 2 devices, 6-Month supports 3 devices, and the 12-Month plan supports up to 5 simultaneous connections.",
  },
] as const;

export const CONTENT_CATEGORIES = [
  {
    label: "🏆 Sports",
    items: [
      { title: "Premier League", year: "LIVE", genre: "Football" },
      { title: "NBA Finals", year: "LIVE", genre: "Basketball" },
      { title: "UFC 310", year: "LIVE", genre: "MMA" },
      { title: "Formula 1 GP", year: "LIVE", genre: "Racing" },
      { title: "Champions League", year: "LIVE", genre: "Football" },
      { title: "Wimbledon", year: "LIVE", genre: "Tennis" },
    ],
  },
  {
    label: "🎬 Movies",
    items: [
      { title: "Dune: Part Two", year: "2024", genre: "Sci-Fi" },
      { title: "Oppenheimer", year: "2023", genre: "Drama" },
      { title: "The Batman", year: "2022", genre: "Action" },
      { title: "Interstellar", year: "2014", genre: "Sci-Fi" },
      { title: "Top Gun: Maverick", year: "2022", genre: "Action" },
      { title: "Inception", year: "2010", genre: "Thriller" },
    ],
  },
  {
    label: "📺 Series",
    items: [
      { title: "House of the Dragon", year: "S2", genre: "Fantasy" },
      { title: "The Last of Us", year: "S2", genre: "Drama" },
      { title: "Breaking Bad", year: "FULL", genre: "Crime" },
      { title: "Succession", year: "FULL", genre: "Drama" },
      { title: "Severance", year: "S2", genre: "Thriller" },
      { title: "Shogun", year: "S1", genre: "Historical" },
    ],
  },
  {
    label: "👶 Kids",
    items: [
      { title: "Bluey", year: "S4", genre: "Animation" },
      { title: "Paw Patrol", year: "S10", genre: "Animation" },
      { title: "Peppa Pig", year: "FULL", genre: "Animation" },
      { title: "SpongeBob", year: "FULL", genre: "Animation" },
      { title: "Cocomelon", year: "S8", genre: "Education" },
      { title: "Avatar: TLA", year: "FULL", genre: "Animation" },
    ],
  },
] as const;

export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#devices", label: "Devices" },
  { href: "#content", label: "Content" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;
