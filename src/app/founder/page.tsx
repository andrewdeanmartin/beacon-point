import type { Metadata } from "next";
import Link from "next/link";

import { BP } from "@/lib/tokens";
import { BPFooter } from "@/components/BPFooter";

export const metadata: Metadata = {
  title: "Founder — Beacon Point",
  description:
    "Meet Megan Martin, MPH — founder of Beacon Point, a private, non-clinical care navigation service in Sarasota, Florida.",
  alternates: { canonical: "/founder" },
};

export default function FounderPage() {
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
        <section className="mx-auto max-w-[720px] px-6 pb-20 pt-14">
          <p className="font-body text-[10px] font-medium text-[#8A9690] tracking-[0.18em] uppercase">
            Founder
          </p>
          <h1 className="mt-3 font-display text-[34px] font-medium text-bp-fern leading-[1.15]">
            Megan Martin, MPH
          </h1>
          <p className="mt-2 font-body text-[15px] text-[#5E6E64] leading-[1.7]">
            Beacon Point is a private, non-clinical care navigation service in Sarasota, Florida.
            We take over the coordination burden for the first 14 days after a loved one comes
            home from the hospital.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-bp-linen p-5">
              <p className="font-display text-[14px] font-medium text-bp-fern">What Beacon Point does</p>
              <ul className="mt-3 space-y-2 font-body text-[13px] text-[#5E6E64]">
                <li>Owns the follow-up schedule and confirms every appointment</li>
                <li>Organizes medication lists across sources and routes questions to prescribers</li>
                <li>Coordinates across family, caregivers, home health, and medical offices</li>
                <li>Sends daily written updates and a day-14 closeout summary</li>
              </ul>
            </div>
            <div className="rounded-xl bg-bp-linen p-5">
              <p className="font-display text-[14px] font-medium text-bp-fern">What Beacon Point isn’t</p>
              <ul className="mt-3 space-y-2 font-body text-[13px] text-[#5E6E64]">
                <li>No medical advice, diagnosis, or treatment recommendations</li>
                <li>No hands-on personal care</li>
                <li>No hiring, placing, or scheduling aides</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-bp-mist/70 bg-bp-ivory p-6 shadow-bp-sm">
            <h2 className="font-display text-[20px] font-medium text-bp-fern">Why I built Beacon Point</h2>
            <div className="mt-4 space-y-4 font-body text-[15px] text-[#5E6E64] leading-[1.7]">
              <p>
                The hardest part of a hospital-to-home transition is rarely a single task — it’s the
                handoffs. The plan lives in paperwork, portals, voicemail, and a dozen conversations.
                Families get a stack of instructions and become the default project manager overnight.
              </p>
              <p>
                Beacon Point exists to be the calm operator in the middle: one point person who turns
                the discharge plan into a tracked list of tasks, closes loops with the right parties,
                and keeps everyone aligned through the first two weeks home.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-bp-fern px-6 font-display text-[16px] font-medium text-bp-ivory transition-colors [transition-duration:var(--bp-hover)] hover:bg-bp-evergreen"
            >
              Start a conversation
            </Link>
            <a
              href={`tel:${BP.phoneE164}`}
              className="inline-flex h-12 items-center justify-center rounded-lg border border-bp-mist/70 bg-bp-ivory px-6 font-body text-[14px] font-medium text-bp-fern transition-colors [transition-duration:var(--bp-hover)] hover:bg-bp-linen"
            >
              Call {BP.phoneDisplay}
            </a>
          </div>
        </section>
      </main>

      <BPFooter />
    </>
  );
}

