# Yash Maheshwari · Portfolio

Source for [yash-maheshwari.com](https://yash-maheshwari.com): research, experience, speaking and AI policy work.

## Stack

- React 19 + TypeScript, built with Vite
- Plain CSS (`index.css`) with design tokens, no runtime CSS framework
- No UI dependencies beyond React; icons are inline SVG

## Editing content

All copy lives in `content.ts`. Change text, numbers or links there; components in `components/` only handle layout.

The résumé PDF is served from `public/resume/Yash_Maheshwari_Resume.pdf`.

## Running locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # type-checks, then builds to dist/
pnpm preview    # serves dist/
```

## Deploying

Pushing to `main` deploys through the Vercel GitHub integration. The build output is `dist/`.
