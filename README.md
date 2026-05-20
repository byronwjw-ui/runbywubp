# RBW Web

> RBW builds AI-guided experiences across play, self-discovery, wellness education, and skill learning.
>
> **Separate products, unified engine.**
>
> _RBW is not a single-category app. It is an AI Experience Engine._

This repository contains the RBW global web presence: the brand homepage, four product landing pages, the cross-product sponsored card system, analytics scaffolding, and a market-aware (`global` / `china`) configuration layer.

---

## Strategic positioning

- **RBW builds AI-guided experiences across play, self-discovery, wellness education, and skill learning.**
- AI consumer products are evolving from tools into guided experiences.
- **Separate products, unified engine.**
- Vibe Party creates group distribution. RBW Meta monetizes self-discovery. Acu Map builds wellness education trust. Magic Cube turns learning into a trackable challenge.

## Product matrix

| Product | What it is | Path |
|---|---|---|
| **RBW Meta** | AI tarot, Xiao Liu Ren, Zi Wei Dou Shu, relationship / career / annual reports | `/products/rbw-meta` |
| **Vibe Party** | 32 free AI-powered party games with sponsored cross-product cards | `/products/vibe-party` |
| **Magic Cube** | AI cube coach for 2x2 (12) and 3x3 (78) formulas, 14-day challenge | `/products/magic-cube` |
| **Acu Map** | Acupoint and meridian learning, traditional Chinese wellness **education** | `/products/acu-map` |

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript (strict)
- Server Components by default, client components where interactivity is needed
- Zero CSS framework dependency — a single themed `globals.css`
- Fully config-driven products, pricing, and cross-promotions

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Then open http://localhost:3000.

### Scripts

```bash
npm run dev        # local dev
npm run build      # production build
npm run start      # serve production build
npm run lint       # next lint
npm run typecheck  # tsc --noEmit
```

## Environment variables

See [`.env.example`](./.env.example). No real keys are committed.

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical / OG base URL |
| `NEXT_PUBLIC_MARKET` | `global` \| `china` |
| `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` / `NEXT_PUBLIC_POSTHOG_KEY` | Analytics providers (optional) |
| `WAITLIST_API_URL` / `WAITLIST_API_KEY` | Optional waitlist backend forwarder |
| `STRIPE_SECRET_KEY` / `LEMONSQUEEZY_API_KEY` / `PADDLE_API_KEY` | Reserved for payments (not wired) |

## Pages

- `/` — RBW homepage (hero, product matrix, engine, why-now, growth loop, investor section)
- `/products/rbw-meta`
- `/products/vibe-party` (with sponsored cross-product cards)
- `/products/magic-cube`
- `/products/acu-map`
- `/waitlist`
- `/privacy`, `/terms`, `/disclaimer`
- `robots.txt`, `sitemap.xml`

## Architecture

```
src/
  app/                      # App Router pages
    page.tsx                # Homepage
    products/{slug}/page.tsx
    waitlist/{page,WaitlistClient}.tsx
    api/waitlist/route.ts   # Mock waitlist endpoint
    privacy|terms|disclaimer/page.tsx
    robots.ts, sitemap.ts, not-found.tsx
  components/
    layout/{Header,Footer}.tsx
    marketing/{Hero,ProductCard,ProductMatrix,EngineSection,WhyNow,
               GrowthLoop,InvestorSection,PricingCards,CrossPromoCard,
               SponsoredCardsSection,DisclaimerBlock,WaitlistForm,
               FeatureGrid,PageView}.tsx
    ui/{Button,Card,Badge}.tsx
  config/
    site.ts, products.ts, pricing.ts, crossPromotions.ts, navigation.ts
  content/
    en.ts, zh.ts            # i18n-ready content layer
  lib/
    analytics.ts, tracking.ts
```

## Cross-promotion (sponsored cards) system

- Configured in `src/config/crossPromotions.ts`.
- Vibe Party renders 4 cards (`game_start`, `game_pause`, `game_end`, `result_card`) pointing to RBW Meta (×2), Acu Map, and Magic Cube.
- Each link is wrapped through `buildTrackingUrl()` (`src/lib/tracking.ts`), which appends `source`, `campaign`, `placement`, and `product` query parameters.
- Each card fires `sponsored_card_viewed` on mount and `sponsored_card_clicked` on click.

## Analytics

- Wrapper: `src/lib/analytics.ts`. Phase 1 logs to the console in dev.
- It also detects `window.gtag` / `window.plausible` / `window.posthog` and forwards events when present — wire those providers via `<Script>` tags or your preferred loader without changing call sites.
- Events implemented:
  - `homepage_viewed`
  - `product_card_clicked`
  - `product_landing_viewed`
  - `vibe_party_started`
  - `sponsored_card_viewed`
  - `sponsored_card_clicked`
  - `pricing_cta_clicked`
  - `report_cta_clicked`
  - `cube_challenge_clicked`
  - `acu_map_cta_clicked`
  - `waitlist_submitted`, `waitlist_success`, `cta_clicked`

## Pricing

- Tiers in `src/config/pricing.ts`.
- Phase 1 CTAs route to `/waitlist?campaign=...` (or `#start` for free tiers).
- Ready to wire to Stripe / LemonSqueezy / Paddle by replacing `ctaHref` per tier and creating `/api/checkout/{provider}/route.ts`.

## Waitlist

- Form: `src/components/marketing/WaitlistForm.tsx`.
- API route: `src/app/api/waitlist/route.ts`. Currently logs to console.
- If `WAITLIST_API_URL` + `WAITLIST_API_KEY` are present, the route forwards the payload (works with Resend, Loops, Notion, Airtable, Supabase Edge Functions, etc.).

## Legal & disclaimers

- **RBW Meta** — entertainment, reflection, self-discovery only. **Not** financial, legal, medical, or professional advice.
- **Acu Map** — **educational and wellness learning only. Not medical advice, diagnosis, or treatment.** No “treat / cure / doctor recommended” language anywhere in the codebase.
- **Magic Cube** — educational tool only.
- **Vibe Party** — hosts and venues must follow local laws and venue rules.
- Full text at `/disclaimer`.

## Markets (global vs. China)

- `src/config/site.ts` exposes a `market` flag and `PRODUCTS` carry a `markets: Market[]`.
- Phase 1 ships the global build only; ICP / China payment / WeChat ecosystem hooks are not rendered but the structure is prepared.
- An `src/content/zh.ts` stub exists for future Chinese localization.

---

## Delivery summary (Phase 1)

**Pages**
- Homepage `/` (hero, product matrix, engine, why-now, growth loop, investor section)
- 4 product landing pages (Vibe Party, RBW Meta, Acu Map, Magic Cube)
- `/waitlist`
- `/privacy`, `/terms`, `/disclaimer`
- `/sitemap.xml`, `/robots.txt`, `not-found`

**Components**
- Layout: Header, Footer
- Marketing: Hero, ProductCard, ProductMatrix, EngineSection, WhyNow, GrowthLoop, InvestorSection, PricingCards, CrossPromoCard, SponsoredCardsSection, DisclaimerBlock, WaitlistForm, FeatureGrid, PageView
- UI: Button, Card, Badge

**Configs**
- `site.ts` (brand, market, locale)
- `products.ts` (4 products, full schema, colors, markets, keywords)
- `pricing.ts` (4 products × 4 tiers each, waitlist-routed CTAs)
- `crossPromotions.ts` (4 sponsored cards from Vibe Party)
- `navigation.ts` (header + footer)

**Tracking**
- `buildTrackingUrl(baseUrl, { source, campaign, placement, product })` appends UTM-style params to every sponsored card and is reusable for any CTA.

**Analytics**
- Currently console-logs in dev and forwards to `gtag` / `plausible` / `posthog` if globally available. To wire a real provider, add a `<Script>` in `app/layout.tsx` and the wrapper will start forwarding automatically.

**Waitlist**
- Posts to `/api/waitlist`, which forwards to any backend defined by `WAITLIST_API_URL` + `WAITLIST_API_KEY`.

**Pricing**
- Structure ready. To wire payments, swap each tier’s `ctaHref` to a checkout route (e.g. `/api/checkout/stripe?priceId=...`) and add a server route reading `STRIPE_SECRET_KEY`.

**Known placeholders**
- OG/social image is a generic `public/og.svg` — replace with a designed asset per product.
- Privacy and Terms pages are scaffolds for legal review.
- Chinese content (`src/content/zh.ts`) is stubbed for phase 2.

## Next steps

- Add real analytics provider (recommend PostHog or Plausible).
- Wire waitlist to Resend / Loops / Notion / Airtable.
- Wire payments (Stripe first, LemonSqueezy as fallback for indie SaaS).
- Build `/zh` locale and ICP footer block for the China market build.
- Add product screenshots and per-product OG images.
- Add an in-app `<RoomCode>` demo on the Vibe Party page.

## Commit log

1. `chore: initialize repo`
2. `chore: bootstrap Next.js 14 + TS, base config, product matrix, pricing, cross-promo data`
3. `feat: global layout, styles, analytics wrapper, UI primitives, marketing components, homepage`
4. `feat: four product landing pages, sponsored cross-promo card system, pricing cards, disclaimer blocks`
5. `feat: waitlist form (mock API), privacy/terms/disclaimer pages, robots & sitemap, OG image config`
6. `docs: README with full delivery summary; chore: not-found page`
