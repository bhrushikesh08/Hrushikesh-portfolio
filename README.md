# Hrushikesh — Portfolio

Personal portfolio for **B. Padma Hrushikesh** — Web Developer, UI/UX Designer, Mobile App Developer, Vibecoder & Freelancer.

![Portfolio Preview](/public/og.png)

## ✨ Features

- **Single-page scroll** with smooth section navigation
- **Magnetic cursor effects** and scroll-driven animations (Framer Motion)
- **Parallax marquee** showcase with image fallback (`.webp` → `.png` → `.jpg`)
- **Sticky-stacking project cards** with formula-based scaling
- **Glassmorphic navbar** with mobile drawer
- **Dark theme** with Kanit typography and gradient text effects
- **Fully responsive** — tested at 375 / 768 / 1440 px
- **Accessible** — `prefers-reduced-motion`, skip-to-content, visible focus states, alt text, `aria-labels`
- **SEO optimised** — Open Graph, Twitter Cards, JSON-LD structured data, semantic HTML

## 🛠️ Tech Stack

| Layer     | Technology                                 |
| --------- | ------------------------------------------ |
| Framework | [React](https://react.dev) ^18.3.1         |
| Build     | [Vite](https://vitejs.dev) ^5.4.2          |
| Language  | TypeScript (strict mode)                   |
| Styling   | [Tailwind CSS](https://tailwindcss.com) ^3.4.1 |
| Motion    | [Framer Motion](https://www.framer.com/motion/) ^12.38.0 |
| Icons     | [Lucide React](https://lucide.dev) ^0.344.0 |
| Font      | [Kanit](https://fonts.google.com/specimen/Kanit) 300–900 |

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── motion/       # FadeIn, Magnet, AnimatedText, Heading
│   ├── sections/     # Hero, Marquee, About, Services, Projects, Skills, Education, Contact
│   └── ui/           # ContactButton, LiveProjectButton
├── data/             # All text/content sourced from docs/mydata.md
├── types/            # Strict TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
public/
├── images/           # Project screenshots, portrait
├── favicon.svg
├── og.png
├── resume.pdf
├── robots.txt
└── sitemap.xml
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Clone the repository
git clone https://github.com/bhrushikesh08/Hrushikesh-portfolio.git
cd Hrushikesh-portfolio

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

### Build for Production

```bash
npm run build        # TypeScript check + Vite build
npm run preview      # Preview production bundle locally
```

### Quality Checks

```bash
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint with zero-warning policy
```

## 🌐 Deployment

This project is ready for deployment on:

- **[Vercel](https://vercel.com)** — auto-detects Vite, zero config needed
- **[Netlify](https://netlify.com)** — uses the included `netlify.toml`
- **GitHub Pages** — includes `404.html` SPA redirect

## 📄 License

© 2026 B. Padma Hrushikesh. All rights reserved.

---

Built with Vite, React & Framer Motion.
