# Portfolio site (drissfarji.github.io)

Vite + React 18 + TypeScript + Tailwind 3 + Motion (`motion/react`) + i18next (EN/FR). Deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

## Commands
- `npm run dev` — dev server on :5173
- `npm run build` — typecheck + production build (must pass before commit)
- `npm run review` — build, serve the preview, and write desktop/mobile screenshots to `review/`

## Conventions
- Animation: import from `motion/react` only (not `framer-motion`). Shared easing is `[0.22, 1, 0.36, 1]`. Type variant objects as `Variants`.
- Respect `prefers-reduced-motion` for any new animation (use `useReducedMotion`).
- All user-facing copy goes in `src/i18n/en.ts` and `src/i18n/fr.ts` — keep both in sync.
- Use the `frontend-design` skill for visual changes; avoid generic template aesthetics.
- Root `style.css` / `script.js` are gitignored legacy files; ignore them.
