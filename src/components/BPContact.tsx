"use client";

import { BP } from "@/lib/tokens";

export function BPContact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[480px] px-6 py-20 text-center"
      aria-labelledby="contact-title"
    >
      <h2
        id="contact-title"
        className="font-display text-[28px] font-medium text-bp-fern leading-[1.2]"
      >
        Start a conversation
      </h2>
      <p className="mt-4 font-body text-[15px] text-[#5E6E64] leading-[1.7]">
        If someone in your family is coming home from the hospital and you&apos;re not sure who&apos;s
        going to manage the next two weeks, we should talk.
      </p>

      <a
        href={`tel:${BP.phoneE164}`}
        className="mt-8 block font-display text-[28px] font-medium text-bp-fern transition-colors [transition-duration:var(--bp-hover)] hover:text-bp-evergreen"
      >
        {BP.phoneDisplay}
      </a>
      <a
        href={`mailto:${BP.email}`}
        className="mt-3 block font-body text-[14px] text-bp-sage transition-colors [transition-duration:var(--bp-hover)] hover:text-bp-fern"
      >
        {BP.email}
      </a>

      <p className="mt-6 font-body text-[12px] italic text-[#8A9690]">
        We respond to all inquiries within 4 hours.
      </p>
    </section>
  );
}

