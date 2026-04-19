# Beacon Point — Final Build Specification

> **Version:** 2.0 (consolidated) · **Date:** April 16, 2026  
> **Status:** Ready for build — target: live today  
> **Stack:** Next.js 14+ (App Router) · Tailwind CSS · Vercel Pro  
> **Estimated build time:** 3-4 hours for public site  
> **Lighthouse target:** 100 across all categories  

-----

## Changes from v1.0

This document consolidates and supersedes three prior documents:

- `beacon-point-spec.md` (v1.0)
- `beacon-point-seo-geo-addendum.md`
- `beacon-point-vercel-addendum.md`

Key decisions since v1.0:

- Platform: custom Next.js on Vercel (not Framer, not Squarespace)
- Analytics: Vercel Web Analytics + Speed Insights (not Plausible)
- Font loading: next/font/google (not Google Fonts CDN link)
- PIN gate: middleware + cookie (not localStorage)
- Founder dashboard: deferred to month 2-3 as separate build phase
- Business name: Beacon Point (locked)
- Tagline: “Your fixed point when everything is moving.”
- Build philosophy: ship at 100 Lighthouse, polish with real data later

-----

## Part 1: Architecture

### Stack

```
Framework:        Next.js 14+ (App Router)
Styling:          Tailwind CSS with custom bp- prefix tokens
Fonts:            next/font/google (Cormorant Garamond + DM Sans)
Deployment:       Vercel Pro ($20/month)
Analytics:        Vercel Web Analytics + Speed Insights (zero config, no cookies)
Images:           next/image (auto WebP, lazy loading, no CLS)
API:              Single serverless function (deferred — for dashboard LLM)
CMS:              None at launch. Megan texts Andrew for edits.
Domain:           beaconpointcare.com (or chosen variant)
```

### What ships now (Phase 1 — today)

```
□ Public landing page (single page, 8 sections)
□ Schema markup (LocalBusiness, Service, FAQPage)
□ robots.txt with AI crawler permissions
□ llms.txt for AI discovery
□ sitemap.xml
□ OG image and social meta tags
□ Vercel Analytics + Speed Insights
□ Google Business Profile (external, same day)
```

### What ships later (Phase 2 — month 2-3)

```
□ Founder dashboard at /founder (PIN-gated)
□ Claude API integration (persona builder, tone tester, scenario analyzer)
□ Business model calculator
□ Runway calculator
□ Service architect with phase gating
□ Brand guide reference
□ Blog / resource pages (SEO content strategy)
```

### Route structure (Phase 1)

```
/                   → Public landing page (all sections)
/login              → PIN entry (hidden, linked from footer — Phase 2)
/founder/*          → Dashboard modules (Phase 2)
/api/claude         → LLM API route (Phase 2)
```

### File structure

```
src/
  app/
    layout.tsx          # Root layout: fonts, metadata, analytics
    page.tsx            # Public landing page (all sections composed here)
    globals.css         # Tailwind base + custom properties
  components/
    BPNav.tsx           # Navigation (client component — scroll listener)
    BPHero.tsx          # Hero section (server component)
    BPProblem.tsx       # Problem / pain points (server)
    BPService.tsx       # What's included (server)
    BPHowItWorks.tsx    # 3-step process (server)
    BPPricing.tsx       # Pricing card (server)
    BPAbout.tsx         # Megan's bio (server)
    BPPartners.tsx      # Partner section + red-flag checklist (server)
    BPFAQ.tsx           # FAQ section — visible, not accordion (server)
    BPContact.tsx       # CTA section (client — click-to-call)
    BPFooter.tsx        # Footer (server)
  lib/
    tokens.ts           # Brand colors, shadows as constants
    schema.ts           # JSON-LD schema objects
    metadata.ts         # SEO metadata config
public/
  robots.txt
  llms.txt
  sitemap.xml
  og-image.png          # 1200x630, sage bg, Beacon Point in Cormorant
  favicon.ico
  favicon.svg
  apple-touch-icon.png  # 180x180
tailwind.config.ts
vercel.json
next.config.ts
```

### Server vs. client components

```
Server (zero JS shipped):       Client ("use client"):
  BPHero                          BPNav (scroll listener, mobile menu toggle)
  BPProblem                       BPContact (click-to-call, optional form)
  BPService
  BPHowItWorks
  BPPricing
  BPAbout
  BPPartners
  BPFAQ
  BPFooter
```

This split means the public site ships almost no JavaScript. Critical for Lighthouse 100.

-----

## Part 2: Lighthouse 100 checklist

### Performance

```
□ next/font/google for both fonts (no external stylesheet, no FOUT, no CLS)
□ next/image for Megan's headshot with explicit width/height (no CLS)
□ If no headshot yet: use CSS initials circle (zero image weight)
□ All public components are server components (zero JS bundle for content)
□ No third-party scripts at launch (no analytics script tags — Vercel Analytics
  uses a tiny inline snippet that doesn't block rendering)
□ No Google Analytics, no chat widgets, no social embeds
□ Inline critical CSS via Tailwind (automatic with Next.js)
□ Static generation (page has no dynamic data — full SSG)
□ Images: WebP via next/image, lazy loading default, priority on hero only
□ vercel.json: security headers don't add latency (edge-applied)
```

### Accessibility

```
□ Single h1 in hero, h2 for each section, h3 for sub-sections (never skip)
□ All interactive elements: 44px minimum touch target
□ All text: 4.5:1 contrast minimum
□ Visible focus rings: 2px solid sage, 2px offset
□ All images: descriptive alt text
□ Skip-to-content link as first element in body
□ Phone number: <a href="tel:+19415550142"> (accessible, click-to-call)
□ All sections: aria-labelledby pointing to their h2
□ FAQ: use semantic h3 + p pairs (NOT <details>/<summary>)
□ Lang attribute: <html lang="en">
□ Keyboard navigable: tab through all interactive elements, enter activates
```

### Best practices

```
□ HTTPS (automatic on Vercel)
□ No console errors
□ No mixed content
```

### SEO

```
□ <title> tag present and descriptive
□ <meta name="description"> present and under 160 chars
□ Canonical URL
□ Structured data valid
□ Heading hierarchy correct
```

-----

## Part 3–8

This file is a direct paste of the April 16, 2026 consolidated spec provided in chat.
If you want it to be the authoritative spec going forward, we can tighten it to match
current copy (e.g., updated phone number, founder name, and updated tagline).

