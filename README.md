# ELIANE

Two things live in this repository.

## 1. The published page

- `index.html` — the whole landing page, static, no build step
- `eliane.css` — the house stylesheet
- Live at **https://dauletn.github.io/eliane/** (Settings, Pages, deploy from `main`, `/ root`)

The photography and the two brand films are served from the brand CDN, so the page works from any host.

## 2. The application source

`app-source/` is the full source of the same page as a real application: React 19 + TanStack Start, server-rendered, built as one Cloudflare Worker. It is the source of record for the live site at eliane.higgsfield.app.

- `app-source/src/routes/index.tsx` — composes the page
- `app-source/src/components/eliane/sections.tsx` — the nine sections
- `app-source/src/components/eliane/chrome.tsx` — brand marks, specimen labels, plates, the three call to action garments
- `app-source/src/styles.css` — house token layer on top of the Tailwind entry
- `app-source/public/assets/` — the photography and the two films
- `app-source/design-brief.md` — the design brief the page was built to

The platform's workspace packages are not included here, so `app-source` is not a standalone build. It needs the deployment environment it was generated in.

## House

- Palette: lavender `#CDC2E3`, cream `#F7F4ED`, gold `#D4AF37`
- Type: Cinzel (display), Montserrat Light (secondary)
- Tagline: Dreamy. Radiant. Eternal.
- Three objects: Eau de Parfum, Radiance Cream, Lip Colour
