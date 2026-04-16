export function BPPricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[480px] px-6 py-20" aria-labelledby="pricing-title">
      <h2 id="pricing-title" className="sr-only">
        Pricing
      </h2>

      <div className="rounded-2xl bg-bp-evergreen p-12 text-center shadow-bp-lg">
        <p className="font-display text-[48px] font-medium text-bp-mist">$2,750</p>
        <p className="mt-2 font-display text-[16px] italic text-bp-moss">
          14-day Hospital-to-Home Transition Package
        </p>
        <p className="mt-4 font-body text-[12px] text-bp-moss">
          50% on engagement · 50% at day 7 or closeout
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-lg border border-bp-moss px-6 py-3 font-body text-[14px] font-medium text-bp-mist transition-colors [transition-duration:var(--bp-hover)] hover:border-bp-mist hover:text-bp-ivory"
        >
          Start a conversation
        </a>
      </div>

      <p className="mt-6 text-center font-body text-[12px] italic text-[#8A9690]">
        This is an independent, private-pay coordination service not covered by insurance.
      </p>
    </section>
  );
}

