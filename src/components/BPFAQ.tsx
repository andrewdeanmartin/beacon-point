const faqs = [
  {
    q: "What is a care navigator?",
    a: "A care navigator is a non-clinical professional who coordinates the logistics of care transitions — scheduling follow-ups, organizing medication lists, aligning caregivers, and keeping families informed. Beacon Point provides this service as a fixed-price, 14-day package for families in the Sarasota, Florida area.",
  },
  {
    q: "How much does Beacon Point cost?",
    a: "Beacon Point's 14-Day Hospital-to-Home Transition Package is $2,750 fixed price. This includes daily written updates, medication list organization, appointment scheduling, cross-party coordination, and a closeout summary. Payment terms are 50% on engagement, 50% at day 7 or closeout. This is a private-pay service not covered by insurance.",
  },
  {
    q: "Is Beacon Point a medical service?",
    a: "No. Beacon Point is a non-clinical coordination service. We do not provide medical advice, diagnose conditions, recommend treatments, or perform hands-on care. We organize the non-clinical logistics so families don't have to manage every task themselves. All medical questions are directed to licensed providers.",
  },
  {
    q: "What area does Beacon Point serve?",
    a: "Beacon Point serves families in Sarasota County, Florida, including Sarasota, Lakewood Ranch, Bradenton, Venice, and Longboat Key.",
  },
  {
    q: "How do I get started?",
    a: "Call (941) 385-5872 or email megan@beaconpointcare.com. We schedule a 15-minute triage call to confirm fit, urgency, and scope. If we're a good match, we can start the same day the engagement letter is signed. We respond to all inquiries within 4 hours.",
  },
  {
    q: "What happens after the 14 days?",
    a: "On day 14, you receive a closeout summary documenting everything that was completed, what items remain unresolved with named owners, and whether ongoing coordination support is recommended. Most families do not need ongoing support.",
  },
  {
    q: "How is Beacon Point different from a home care agency?",
    a: "Home care agencies provide caregivers who assist with daily living tasks. Beacon Point does not provide caregivers. We coordinate across the family, home care agency, medical providers, and other parties to make sure everyone has the same information and nothing falls through the cracks. We complement home care, not compete with it.",
  },
  {
    q: "Can you help if my parent lives in Sarasota but I live out of state?",
    a: "Yes — remote adult children are our most common client. We serve as your local point person in Sarasota, coordinating everything on the ground and sending you daily written updates so you always know what's done, what's open, and who owns each task.",
  },
] as const;

export function BPFAQ() {
  return (
    <section id="faq" className="mx-auto max-w-[720px] px-6 py-20" aria-labelledby="faq-title">
      <p className="font-body text-[10px] font-medium text-[#8A9690] tracking-[0.18em] uppercase">
        Common questions
      </p>
      <h2 id="faq-title" className="mt-2 font-display text-[28px] font-medium text-bp-fern leading-[1.2]">
        FAQ
      </h2>

      <div className="mt-10">
        {faqs.map((item) => (
          <div key={item.q} className="mb-8">
            <h3 className="mb-2 font-display text-[18px] font-medium text-bp-fern">{item.q}</h3>
            <p className="font-body text-[15px] text-[#5E6E64] leading-[1.7]">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

