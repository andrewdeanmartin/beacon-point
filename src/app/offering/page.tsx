import type { Metadata } from "next";
import Link from "next/link";

import { BPFooter } from "@/components/BPFooter";
import { BPHowItWorks } from "@/components/BPHowItWorks";
import { BPService } from "@/components/BPService";
import { BPFAQ } from "@/components/BPFAQ";
import { BPContact } from "@/components/BPContact";
import { BPPricing } from "@/components/BPPricing";

export const metadata: Metadata = {
  title: "The 14-day package — Beacon Point",
  description:
    "What the work looks like: a fixed-price, 14-day coordination engagement that starts at discharge. Daily updates. One point person.",
  alternates: { canonical: "/offering" },
};

export default function OfferingPage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-bp-mist/70 bg-bp-ivory/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[960px] items-center justify-between px-6">
          <Link href="/" className="font-display text-[20px] font-medium text-bp-fern">
            Beacon Point
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-bp-fern px-4 text-[14px] font-medium text-bp-ivory transition-colors [transition-duration:var(--bp-hover)] hover:bg-bp-evergreen"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1">
        <section className="mx-auto max-w-[720px] px-6 pb-10 pt-14">
          <p className="font-body text-[10px] font-medium text-[#8A9690] tracking-[0.18em] uppercase">
            The offering
          </p>
          <h1 className="mt-3 font-display text-[34px] font-medium text-bp-fern leading-[1.15]">
            What the work looks like
          </h1>
          <p className="mt-4 font-body text-[15px] text-[#5E6E64] leading-[1.7]">
            Beacon Point is a private, non-clinical care navigation service. We take over the
            coordination burden for the first 14 days after discharge — scheduling follow-ups,
            organizing medication lists, aligning everyone involved, and sending daily written
            updates so nothing gets dropped.
          </p>
        </section>

        <BPService />
        <BPHowItWorks />
        <BPPricing />

        <section className="mx-auto max-w-[720px] px-6 pb-4">
          <div className="rounded-2xl border border-bp-mist/70 bg-bp-ivory p-6 shadow-bp-sm">
            <h2 className="font-display text-[20px] font-medium text-bp-fern">What you’ll receive</h2>
            <ul className="mt-4 space-y-2 font-body text-[14px] text-[#5E6E64]">
              <li>Daily written status: what’s done, what’s open, and who owns it</li>
              <li>A booked and confirmed follow-up schedule</li>
              <li>A reconciled medication list with questions routed to prescribers</li>
              <li>A day-14 closeout summary documenting outcomes and open items</li>
            </ul>
          </div>
        </section>

        <BPFAQ />
        <BPContact />
      </main>

      <BPFooter />
    </>
  );
}

