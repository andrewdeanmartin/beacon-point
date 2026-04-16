function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 flex-shrink-0 text-bp-sage"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.5 4.5L6.5 11.5L2.5 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-bp-clay" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BPService() {
  return (
    <section
      id="included"
      className="mx-auto max-w-[720px] px-6 py-20"
      aria-labelledby="included-title"
    >
      <p className="font-body text-[10px] font-medium text-[#8A9690] tracking-[0.18em] uppercase">
        The 14-day package
      </p>
      <h2 id="included-title" className="mt-2 font-display text-[28px] font-medium text-bp-fern leading-[1.2]">
        One package. One price. One point person.
      </h2>

      <div className="mt-8">
        <div className="flex gap-3 items-start mb-5">
          <CheckIcon />
          <div>
            <p className="font-body text-[15px] text-[#2A3B32] font-medium">
              Family intake and task extraction
            </p>
            <p className="mt-1 font-body text-[13px] text-[#8A9690]">
              We capture the discharge plan, medications, providers, and family contacts in one
              structured session.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start mb-5">
          <CheckIcon />
          <div>
            <p className="font-body text-[15px] text-[#2A3B32] font-medium">
              Medication list organization
            </p>
            <p className="mt-1 font-body text-[13px] text-[#8A9690]">
              We compile, compare sources, and route questions to prescribers. We never advise
              on doses or changes.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start mb-5">
          <CheckIcon />
          <div>
            <p className="font-body text-[15px] text-[#2A3B32] font-medium">
              Appointment sequencing and confirmation
            </p>
            <p className="mt-1 font-body text-[13px] text-[#8A9690]">
              Every follow-up gets booked and confirmed according to the discharge plan.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start mb-5">
          <CheckIcon />
          <div>
            <p className="font-body text-[15px] text-[#2A3B32] font-medium">
              Cross-party coordination
            </p>
            <p className="mt-1 font-body text-[13px] text-[#8A9690]">
              We align what the family, aides, home health team, and medical offices are all
              doing — so everyone has the same information.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start mb-5">
          <CheckIcon />
          <div>
            <p className="font-body text-[15px] text-[#2A3B32] font-medium">Daily written updates</p>
            <p className="mt-1 font-body text-[13px] text-[#8A9690]">
              What&apos;s done. What&apos;s open. Who owns it. Every day, in writing.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start mb-5">
          <CheckIcon />
          <div>
            <p className="font-body text-[15px] text-[#2A3B32] font-medium">Day-14 closeout summary</p>
            <p className="mt-1 font-body text-[13px] text-[#8A9690]">
              A documented record of completed tasks, unresolved items, and whether ongoing
              support is recommended.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-bp-mist pt-8">
        <div className="flex gap-3 items-start">
          <XIcon />
          <p className="font-body text-[13px] text-[#8A9690]">
            We do not provide medical advice or treatment recommendations.
          </p>
        </div>
        <div className="mt-3 flex gap-3 items-start">
          <XIcon />
          <p className="font-body text-[13px] text-[#8A9690]">
            We do not provide hands-on personal care.
          </p>
        </div>
        <div className="mt-3 flex gap-3 items-start">
          <XIcon />
          <p className="font-body text-[13px] text-[#8A9690]">
            We do not place, hire, or schedule aides.
          </p>
        </div>
      </div>
    </section>
  );
}

