# AGENTS.md — B. Padma Hrushikesh Portfolio

Personal portfolio for B. Padma Hrushikesh (Web Developer, UI/UX Designer, Mobile App Developer, Vibecoder, Freelancer).
Visual/structural base: docs/reference/jack-spec.txt (follow exact sizes, delays, clamp values, class names).
Content source: docs/mydata.md ONLY. Never invent facts, clients, numbers, awards or years of experience.
Anything marked CONFIRM renders with a visible <Todo> badge until answered.

Stack (only these; ask before adding anything): Vite, React ^18.3.1, TypeScript strict, Tailwind ^3.4.1,
framer-motion ^12.38.0, lucide-react ^0.344.0, NO router: single-page scroll like the reference. Font: Kanit 300–900.

Rules:
- No `any`. Named exports. One component per file. All text/data in src/data/*.ts, never hard-coded in JSX.
- Mobile-first, test at 375 / 768 / 1440 px. No horizontal scroll.
- Respect prefers-reduced-motion. Alt text on images. Visible focus states. rel="noopener noreferrer" on external links.
- Never hotlink third-party images; store assets in public/images with lazy loading and width/height.
- Never commit secrets or .env. Never name the AI API provider or include any API key anywhere in the site or repo.
- Work one phase at a time. After each: npm run typecheck && npm run lint && npm run build must pass. Then stop and report.
- Prefer the simplest solution (reuse > native > installed dependency > new code).
