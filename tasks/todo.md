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

# Nov 2026 update (2026-11-25)

- [x] BabyLM: published in ACL Anthology (2026.babylm-main.1): real title, sole author, Anthology + PDF links, DOI in JSON-LD
- [x] ODI: real title, sole author, camera-ready (v61) claims; storage chart (22.9x smaller at 10.03M) replaces the AXIOM bpb chart
- [x] Removed AXIOM "under review" (rejected ~Oct 4) from cards, JSON-LD and llms.txt
- [x] Trace the Ace 12th/530 (solo): highlight, award, JSON-LD, llms.txt
- [x] FETC 2027 keynote: session title + speaker-page link + official keynote graphic
- [x] Press as linked chips (WaPo, Verde, CDE/GovTech, Exceptional Educators Podcast); unlinked names kept dashed
- [x] New senior photo (hero, JSON-LD, og.png); US tile map of bill states in Policy
- [x] CI: prerender check grepped a string removed on Sep 30 (CI red since); now greps the paper title
- [ ] Resume PDF still says "Submitted ... AXIOM, ODI" and BabyLM "accepted" (needs source edit + re-export)
- [ ] Shah Lab paper: add once the arXiv ID is live

## Review
Built clean; CI checks pass locally; JSON-LD parses. Chrome screenshots at 1440 and 390 px: no console errors, no horizontal scroll.
