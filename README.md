# 🎬 PrimeStream — Premium IPTV Landing Page

A high-converting IPTV subscription website built with **Next.js 14** + **Tailwind CSS**.  
Designed with a Netflix-style UI, SaaS-level UX, and full conversion optimization.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🗂️ Project Structure

```
PrimeStream-iptv/
│
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx           # Root layout + Google Fonts (Playfair Display, DM Sans)
│   └── page.tsx             # Main page — assembles all sections
│
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx       # Sticky glassmorphism navbar + mobile menu
│   │   ├── Hero.tsx         # Full-screen hero with floating cards + animations
│   │   ├── TrustBar.tsx     # Marquee trust bar (payment icons, devices)
│   │   ├── Features.tsx     # 6-card feature grid with hover glow
│   │   ├── ContentPreview.tsx # Netflix-style tabbed content rows
│   │   ├── HowItWorks.tsx   # 3-step process section
│   │   ├── Pricing.tsx      # 4-plan pricing cards with popular highlight
│   │   └── Others.tsx       # Devices, Testimonials, FAQ, CTA, Footer
│   │
│   └── ui/
│       └── useReveal.ts     # IntersectionObserver scroll-reveal hook
│
├── config/
│   └── site.config.ts       # ⭐ SINGLE SOURCE OF TRUTH — all content & colors
│
├── tailwind.config.ts       # Custom design tokens extending Tailwind
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ⚙️ Configuration

### 🎨 Colors & Branding
All colors are centralized in **`config/site.config.ts`**:

```ts
export const COLORS = {
  primary: "#7C3AED",      // Main violet — change to your brand color
  secondary: "#06B6D4",    // Cyan accent
  accent: "#F59E0B",       // Amber for badges
  bgDeep: "#03010A",       // Background
  // ...
}
```

### 💰 Pricing Plans
Edit plans in `config/site.config.ts` → `PLANS`:

```ts
export const PLANS = [
  {
    id: "1m",
    label: "1 Month",
    price: 12,           // ← change price
    originalPrice: 18,   // ← shown as strikethrough
    popular: false,
    features: [...],
  },
  // ...
]
```

### 🏢 Site Info
```ts
export const SITE_META = {
  name: "PrimeStream",           // ← your brand name
  email: "support@yoursite.tv", // ← your email
  whatsapp: "+1 (555) 000-0000",
  telegram: "@yourtelegram",
}
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#7C3AED` | Buttons, accents, glows |
| Secondary | `#06B6D4` | Cyan highlights, borders |
| Accent | `#F59E0B` | Badges, urgency elements |
| BG Deep | `#03010A` | Page background |
| BG Card | `#0D0B1A` | Card surfaces |

### CSS Classes
```css
.glass          /* Glassmorphism card */
.glass-card     /* Tinted glass with gradient */
.glow-violet    /* Violet box shadow glow */
.text-gradient  /* Purple → Cyan gradient text */
.text-shimmer   /* Animated shimmer text */
.btn-primary    /* Gradient CTA button */
.btn-outline    /* Outlined secondary button */
.reveal         /* Scroll-triggered fade-in */
```

---

## 📱 Sections Included

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navbar** | Sticky, glassmorphism, mobile responsive |
| 2 | **Hero** | Full-screen, floating cards, animated |
| 3 | **Trust Bar** | Scrolling marquee with payment/device icons |
| 4 | **Features** | 6-card grid with hover glow effects |
| 5 | **Content Preview** | Netflix-style tabbed rows (Sports/Movies/Series/Kids) |
| 6 | **How It Works** | 3-step visual process |
| 7 | **Pricing** | 4-plan cards, popular badge, discount urgency |
| 8 | **Devices** | 8-device compatibility grid |
| 9 | **Testimonials** | 6 review cards with star ratings |
| 10 | **FAQ** | Animated accordion |
| 11 | **Final CTA** | Conversion push section |
| 12 | **Footer** | Links, contact, socials, legal |

---

## ⚡ Performance Features

- **Next.js 14 App Router** — server components by default
- **Google Fonts** via `next/font` — zero CLS
- **CSS-only animations** — no JS animation libraries needed
- **IntersectionObserver** — scroll animations with no layout shifts
- **Mobile-first** responsive design
- **Semantic HTML** for SEO

---

## 🔧 Customization Tips

1. **Change brand name** → `SITE_META.name` in `site.config.ts`
2. **Change colors** → `COLORS` object in `site.config.ts`
3. **Add/remove pricing plans** → `PLANS` array
4. **Edit features** → `FEATURES` array
5. **Update testimonials** → `TESTIMONIALS` array
6. **Add payment link** → Replace `href="#"` in `PricingCard` CTA with your payment URL

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2 | React framework |
| Tailwind CSS | 3.4 | Utility-first styling |
| TypeScript | 5 | Type safety |
| Playfair Display | — | Display font (headlines) |
| DM Sans | — | Body font |
| JetBrains Mono | — | Monospace font |

---

## 🌐 Deploy

```bash
# Vercel (recommended — zero config)
npx vercel

# Or build for production
npm run build
npm start
```

---

*Built with ❤️ — PrimeStream IPTV Landing Page*
