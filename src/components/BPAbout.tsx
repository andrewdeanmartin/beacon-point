import Image from "next/image";

const headshotSrc: string | null = null;

export function BPAbout() {
  return (
    <section id="about" className="mx-auto max-w-[720px] px-6 py-20" aria-labelledby="about-title">
      <div className="flex flex-col gap-10 md:flex-row md:items-start">
        {headshotSrc ? (
          <Image
            src={headshotSrc}
            alt="Megan Martin, MPH, founder of Beacon Point"
            width={200}
            height={200}
            className="h-[200px] w-[200px] rounded-xl object-cover"
          />
        ) : (
          <div className="flex h-[200px] w-[200px] items-center justify-center rounded-xl bg-bp-sage">
            <span className="font-display text-[48px] font-medium text-bp-ivory">M</span>
          </div>
        )}

        <div>
          <h2 id="about-title" className="font-display text-[24px] font-medium text-bp-fern">
            Megan Martin, MPH
          </h2>
          <p className="mt-1 font-body text-[13px] text-[#8A9690]">Founder · Master of Public Health</p>

          <div className="mt-4 space-y-4 font-body text-[15px] text-[#5E6E64] leading-[1.7]">
            <p>
              Beacon Point was built for the moment after discharge — when the paperwork is handed
              over, everyone is involved, and nobody is actually coordinating the next two weeks.
              Megan leads each engagement as the single point person owning the logistics end to
              end.
            </p>
            <p>
              Families and referral partners use Beacon Point when they need a calm, structured
              operator who can book follow-ups, reconcile a medication list across sources, and
              keep every party aligned — without crossing into clinical care.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-bp-linen p-4">
              <p className="font-display text-[14px] font-medium text-bp-fern">What we do</p>
              <ul className="mt-2 space-y-1 font-body text-[13px] text-[#5E6E64]">
                <li>Appointment scheduling and confirmation</li>
                <li>Medication list organization and routing questions</li>
                <li>Cross-party coordination + daily written updates</li>
              </ul>
            </div>
            <div className="rounded-xl bg-bp-linen p-4">
              <p className="font-display text-[14px] font-medium text-bp-fern">What we don’t do</p>
              <ul className="mt-2 space-y-1 font-body text-[13px] text-[#5E6E64]">
                <li>No medical advice or treatment recommendations</li>
                <li>No hands-on personal care</li>
                <li>No hiring or scheduling aides</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

