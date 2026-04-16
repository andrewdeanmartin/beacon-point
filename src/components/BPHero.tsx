export function BPHero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-24 pb-16">
      <div className="mx-auto max-w-2xl px-6">
        <p className="font-body text-[10px] font-medium text-[#8A9690] tracking-[0.18em] uppercase">
          Private transition navigation · Sarasota, Florida
        </p>
        <h1 className="mt-4 font-display text-[clamp(36px,5vw,52px)] font-medium text-bp-fern leading-[1.12] tracking-[-0.01em]">
          Your fixed point when everything is moving.
        </h1>
        <p className="mx-auto mt-6 max-w-[520px] font-body text-[15px] text-[#5E6E64] leading-[1.7]">
          Beacon Point is a private, non-clinical care navigation service in Sarasota,
          Florida. We take over the coordination burden for the first 14 days your loved
          one is home from the hospital.
        </p>

        <div className="mt-10 flex flex-col items-center">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-bp-fern px-8 font-display text-[16px] font-medium text-bp-ivory transition-colors [transition-duration:var(--bp-hover)] hover:bg-bp-evergreen"
          >
            Start a conversation
          </a>
          <a
            href="#included"
            className="mt-4 font-body text-[14px] text-bp-sage transition-colors [transition-duration:var(--bp-hover)] hover:underline"
          >
            See what&apos;s included ↓
          </a>
        </div>
      </div>
    </section>
  );
}

