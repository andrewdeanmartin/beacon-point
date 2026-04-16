function Step({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="text-center">
      <div className="relative mx-auto w-10">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-bp-sage text-bp-ivory font-body text-[14px] font-medium">
          {number}
        </div>
      </div>
      <h3 className="mt-4 font-display text-[18px] font-medium text-bp-fern">{title}</h3>
      <p className="mt-2 font-body text-[13px] text-[#5E6E64] leading-[1.6]">{body}</p>
    </div>
  );
}

export function BPHowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[800px] px-6 py-20" aria-labelledby="how-title">
      <p className="font-body text-[10px] font-medium text-[#8A9690] tracking-[0.18em] uppercase">
        How it works
      </p>
      <h2 id="how-title" className="mt-2 font-display text-[28px] font-medium text-bp-fern leading-[1.2]">
        How it works
      </h2>

      <div className="relative mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-5 hidden md:block"
        >
          <div className="mx-auto grid max-w-[800px] grid-cols-3">
            <div />
            <div className="h-px border-t border-dashed border-bp-mist" />
            <div className="h-px border-t border-dashed border-bp-mist" />
          </div>
        </div>

        <Step
          number="1"
          title="Someone introduces us"
          body="A home care supervisor, physician, or family friend notices the coordination gap and connects us. We respond within 4 hours."
        />
        <Step
          number="2"
          title="We assess fit in 15 minutes"
          body="A brief triage call confirms that the need is coordination, not clinical care. If we're not the right fit, we'll say so and point you to someone who is."
        />
        <Step
          number="3"
          title="14 days of structured coordination"
          body="Fixed price. Daily updates. A closeout summary at the end documenting what was done, what's still open, and who owns each task."
        />
      </div>
    </section>
  );
}

