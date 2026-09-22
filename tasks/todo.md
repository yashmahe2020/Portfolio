# Portfolio redesign (Sep 2026)

- [x] Update résumé: add sub-1-bit research entry, export PDF (2 pages, same as source)
- [x] Rebuild site to match the Claude Design canvas (research-first, shorter components)
- [x] Reconcile facts with résumé (Congressional App Challenge = Honorable Mention, FRC Highest Rookie award, Common Sense 600+)
- [x] Remove Tailwind CDN / esm.sh import map / framer-motion / lucide; plain CSS + inline SVG
- [x] Responsive layout (desktop, tablet, phone) with mobile menu
- [x] SEO: meta description, Open Graph, canonical, JSON-LD, favicon
- [x] Verify: `pnpm build` clean, no console errors, no horizontal scroll at 390px, résumé link 200

- [x] Prerender to static HTML + hydrate (content visible without JS)
- [x] AI-SEO: robots.txt allowing AI crawlers, sitemap.xml, llms.txt, JSON-LD @graph, OG image
- [x] Independent PR review: fixed résumé mismatches (Shah/Kinetic split, titles, JEI accepted, press), CSS breakpoint bugs, menu Escape/aria-controls
- [x] Canvas synced to PR content

## Review
Built and checked in Chromium at 1440, 820 and 390 px. Fixed the table caption rendering inside a cell and the logo spacing found in that pass.
