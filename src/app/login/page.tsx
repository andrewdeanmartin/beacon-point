import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder access — Beacon Point",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[720px] flex-col justify-center px-6 py-20">
      <p className="font-body text-[10px] font-medium text-[#8A9690] tracking-[0.18em] uppercase">
        Founder access
      </p>
      <h1 className="mt-3 font-display text-[32px] font-medium text-bp-fern leading-[1.15]">
        Coming soon
      </h1>
      <p className="mt-4 font-body text-[15px] text-[#5E6E64] leading-[1.7]">
        The founder dashboard (PIN-gated) ships in Phase 2.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center justify-center self-start rounded-lg border border-bp-mist px-5 font-body text-[14px] font-medium text-bp-fern transition-colors [transition-duration:var(--bp-hover)] hover:bg-bp-linen"
      >
        Back to home
      </Link>
    </main>
  );
}

