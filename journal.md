# Project Journal — Sheikh of Falafel and Hummus Landing Page

## Status: COMPLETE ✅
Date: 2026-08-19

All 8 sections + App.tsx + main.tsx delivered in one pass, per course assignment scope.

## Files delivered
- src/components/Navbar.tsx — floating island nav, translates out on scroll-down, back in on scroll-up
- src/components/Hero.tsx — full-viewport hero, hero.jpg background, CTA to #menu
- src/components/About.tsx — history since 2001, about.png image, stat row
- src/components/Features.tsx — 4 highlight cards (Fresh Ingredients, Master Chefs, Fast Service, Authentic Taste)
- src/components/Menu.tsx — 4 dish cards (dish1–dish4.jpg) with Arabic (RTL) descriptions
- src/components/Location.tsx — Google Maps iframe embed (Al Salamah, Jeddah) + address/hours card
- src/components/Contact.tsx — 3 direct action cards (WhatsApp, Call, Instagram), no form
- src/components/Footer.tsx — closing message, social icon row, copyright bar
- src/App.tsx — assembles all 8 sections, react-helmet-async SEO tags
- src/main.tsx — HelmetProvider + React root

## Design system used
- Palette: charcoal #1E1B16, parchment #FBF4E4, olive #57642B, saffron #D79A2C (primary accent), paprika #9C3B2A (secondary accent)
- Type: Fraunces (display), Work Sans (body/UI), Noto Kufi Arabic (Arabic dish copy)
- Signature motif: eight-point khatim star, used in Navbar, Hero, About, Menu, Footer

## Setup required before running
1. Add Google Fonts to `index.html` `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600&family=Noto+Kufi+Arabic:wght@400;500&display=swap" rel="stylesheet">
   ```
2. Install dependencies:
   ```
   npm install lucide-react react-helmet-async
   ```
3. Place required images in `public/images/`: hero.jpg, about.png, logo.png, dish1.jpg, dish2.jpg, dish3.jpg, dish4.jpg
4. Ensure Tailwind CSS is configured (Vite + Tailwind standard setup) — no custom theme extension is required since all colors/fonts use Tailwind arbitrary values (e.g. `bg-[#1E1B16]`, `font-['Fraunces',serif]`).

## Scope adherence (Judge persona check)
- Zero backend/database dependencies — confirmed. All data is hardcoded in-component (dish list, contact links).
- Contact section uses direct links only (wa.me, tel:, instagram.com) — no form, no submit handler.
- All 8 required sections present, each in its own file under src/components/.

## Responsiveness pass (E2E Tester persona check)
- Mobile (< 640px): single-column stacks, hamburger nav, dish cards stack image-over-text.
- Tablet (640–1024px): Features 2-col grid, Menu 2-col grid, About retains 2-col from lg breakpoint.
- Laptop (1024–1536px): full desktop nav links visible, About/Location split layouts active.
- Ultrawide (1536px+): all sections capped at `max-w-6xl` (About/Features/Menu/Location/Contact) or `max-w-4xl` (Navbar) and centered, preventing content from over-stretching.
