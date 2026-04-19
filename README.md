# Beacon Point — Marketing Site

Private, non-clinical care navigation positioning for Sarasota, Florida. This repo powers the public marketing site deployed on **Vercel**.

- **Production**: `https://beaconpoint.health`
- **Repository**: `git@github.com:andrewdeanmartin/beacon-point.git`

## Stack

- **Next.js** (App Router) + **React**
- **Tailwind CSS** (brand tokens use the `bp-` prefix)
- **TypeScript**
- **Vercel**: Web Analytics + Speed Insights (wired in `src/app/layout.tsx`)

## Local development

This repo uses **pnpm** (`pnpm-lock.yaml`).

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

### Quality checks

```bash
pnpm lint
pnpm build
```

## Environment variables (Vercel)

These are read via `src/lib/tokens.ts` using `NEXT_PUBLIC_*` variables (safe for client-side usage).

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin used for metadata + schema (example: `https://beaconpoint.health`) |
| `NEXT_PUBLIC_PHONE` | E.164 phone for `tel:` links + JSON-LD (example: `+19413855872`) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Human-readable phone shown in UI |
| `NEXT_PUBLIC_EMAIL` | Contact email string used across the site |

Defaults exist for local development, but **set these in Vercel Production** so production metadata/schema matches the live domain and contact info.

## Routes

| Path | Purpose |
|---|---|
| `/` | Main landing page (all primary sections) |
| `/offering` | “What the work looks like” (bundles key sections) |
| `/founder` | Founder story page |
| `/login` | Placeholder “Founder access” page (Phase 2) |

## SEO / discovery files (static)

These live in `public/`:

- `robots.txt`
- `sitemap.xml`
- `llms.txt`

JSON-LD is emitted from `src/app/head.tsx` using `src/lib/schema.ts`.

## Domain + DNS (Namecheap → Vercel)

The site is configured on Vercel with **Namecheap Advanced DNS** similar to:

- **A** `@` → Vercel-provided apex IP (example used during setup: `216.198.79.1`)
- **CNAME** `www` → `cname.vercel-dns.com`

Remove parking/redirect records that conflict (for example `www` → `parkingpage.namecheap.com` and URL redirect rows).

## Email (Google Workspace)

Email is configured **outside** this repo (DNS MX/SPF/DKIM in Google Workspace + Namecheap). Update `NEXT_PUBLIC_EMAIL` to match the live mailbox you want displayed on the site.

## Notes / operational decisions

- **Partner one-pager PDF** was removed from `/public` (no download CTA on the site).
- `package.json` sets `"type": "module"` to align with ESM-style config files and avoid Node’s “module type” warning during builds.

## Spec

The consolidated product/build document lives at `beacon-point-final-build-spec.md` (some details evolve as copy and domains change).
