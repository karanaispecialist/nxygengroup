# NXGEN PEOPLE Group (NPG / NPS)

> **Pioneers of Fashion, Haute Couture, Food & Education Across Central India Since 1987**  
> Headquartered in Bhopal, Madhya Pradesh | Founded & Chaired by **Vicky Da**

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat&logo=framer)](https://www.framer.com/motion/)
[![Lenis Scroll](https://img.shields.io/badge/Lenis-Smooth_Scroll-yellow?style=flat)](https://github.com/darkroomengineering/lenis)

---

## 🌟 Executive Overview

**NXGEN PEOPLE** is a diversified Indian business group with a four-decade legacy (established in 1987). The official digital portal presents the group's corporate brand identity while articulating its business vertical hierarchy:

1. **Flagship Primary Vertical — Fashion, Pageantry & Entertainment (Maximum Real Estate)**
   - **NXGEN Apparels (NA)**: High-fashion runway collections, Khadi modern haute couture, bespoke apparel manufacturing.
   - **NXGEN Films & Television Productions (NFTP)**: Cinematic productions, telefilms, casting management, and media distribution.
   - **NXGEN National Pageants**: Organizers of **NXGEN Miss India 2026** (Grand Finale at 5-Star Resort, Noida UP) and **The Khadi Beauty Pageant: "Threads of Freedom & Elegance"** (in association with KVIC & FDCI at Bhopal Haat).
   - **NXGEN Celebrations & Tours (NXC)**: Celebrity management and luxury tourism.

2. **Secondary Business Segment — Food & Hospitality**
   - **Chilliflakes Café**: Fast-casual gourmet café brand serving artisanal stone-fired pizzas, handcrafted mocktails, and fresh coffee.
   - **Suveez Big Bites**: Quick-service dining specializing in giant burgers and loaded sides.
   - **NCCK Cloudkitchens**: Centralized culinary network supporting rapid urban delivery.

3. **Secondary Business Segment — Education & Social Impact**
   - **NXGEN Public School**: Value-driven institution with free/subsidized admissions for Below Poverty Line (BPL) children.
   - **NIIFPA Academy**: National Institute of Indian Fashion & Performing Arts.
   - **NPSCES NGO Society**: Environmental tree plantation drives (50,000+ saplings) and civic cleanliness programs felicitated by the District Collector.

---

## 🚀 Key Design & Technical Capabilities

- **Mobile-First Experience**:
  - Persistent glassmorphism sticky bottom dock (`MobileStickyFooter.tsx`) with thumb navigation across all verticals and a quick-dial phone helpline pill (`tel:+917805987151`).
  - No iOS Safari zoom bug: all input fields and selectors styled with $\ge 16\text{px}$ font sizes.
  - Finger-friendly tap targets ($\ge 44\text{px}$) and touch-optimized horizontal gallery filters.
- **Awwwards-Level Luxury Animations**:
  - **Inertial Smooth Scrolling**: Powered by `lenis` on desktop, keeping native 120Hz touch responsiveness on mobile.
  - **Interactive Gold Cursor**: Precision pointer dot with trailing fluid spring aura (`CustomCursor.tsx`).
  - **Top Golden Progress Beam**: Dynamic reading progress indicator (`ScrollProgress.tsx`).
  - **Mouse-Following Spotlight Cards**: Dynamic radial lighting on cards (`SpotlightCard.tsx`).
  - **Organic Magnetic Buttons**: Physics-based cursor attraction on primary CTAs (`MagneticButton.tsx`).
  - **Kinetic Heritage Counters**: Rolling numbers for stats ($40+$, $500+$, $100,000+$, $100\%$) via `CountUp.tsx`.
  - **Celebratory Particle Fireworks**: Multi-tier metallic gold and champagne bursts (`canvas-confetti`) on audition and contact submissions.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom luxury gradients & dark palette (`#08090D`)
- **Typography**: Cinzel (Luxury Serif), Playfair Display, and Plus Jakarta Sans
- **Animation**: [Framer Motion 11](https://www.framer.com/motion/) & [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-Interactions**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Testing**: [Playwright](https://playwright.dev/) end-to-end responsive audit suite

---

## 📦 Getting Started

### 1. Prerequisites
- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### 2. Installation
```bash
git clone https://github.com/karanaispecialist/nxygengroup.git
cd nxygengroup
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

### 5. Automated Responsive Testing
```bash
python scripts/test_responsiveness.py
```

---

## 🏢 Contact & Head Office

- **Address**: A - 10, Gulabi Nagar, 80 Feet Road, Bag Mugaliya, Bhopal, Madhya Pradesh, India
- **Helplines**: +91 7805987151 / +91 9827217552 / +91 8770579372
- **Email**: nxgenpeople@gmail.com / vickyda17@gmail.com
- **Founder & Chairman**: Vicky Da

---

© 2026 NXGEN PEOPLE'S GROUP. All Rights Reserved.

