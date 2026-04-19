const checklistItems = [
  "Family doesn't understand the discharge plan",
  "Follow-up appointments aren't booked",
  "Medication lists don't match",
  "Adult child lives out of state, keeps calling",
  "Spouse caregiver is overwhelmed",
  "Everyone's involved but nobody's in charge",
] as const;

export function BPPartners() {
  return (
    <section
      id="partners"
      className="mx-auto max-w-[720px] px-6 py-20"
      aria-labelledby="partners-title"
    >
      <p className="font-body text-[10px] font-medium text-[#8A9690] tracking-[0.18em] uppercase">
        For referral partners
      </p>
      <h2 id="partners-title" className="mt-2 font-display text-[28px] font-medium text-bp-fern leading-[1.2]">
        When a client comes home and the family is overwhelmed
      </h2>
      <p className="mt-4 font-body text-[15px] text-[#5E6E64] leading-[1.7]">
        Beacon Point is a resource for your clients, not a competitor to your services. We handle
        the coordination burden for the first 14 days so your team can focus on what they do best.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
        {checklistItems.map((text) => (
          <div key={text} className="flex gap-3 items-start">
            <div
              className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-[1.5px] border-bp-moss"
              aria-hidden="true"
            />
            <p className="font-body text-[13px] text-[#2A3B32]">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <p className="font-body text-[13px] font-medium text-bp-fern">We respond within 4 hours.</p>
        <p className="font-body text-[13px] font-medium text-bp-fern">
          We never compete with your staffing.
        </p>
        <p className="font-body text-[13px] font-medium text-bp-fern">
          We close the loop on every referral.
        </p>
      </div>
    </section>
  );
}

