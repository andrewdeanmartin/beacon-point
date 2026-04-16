import Image from "next/image";

const headshotSrc: string | null = null;

export function BPAbout() {
  return (
    <section id="about" className="mx-auto max-w-[720px] px-6 py-20" aria-labelledby="about-title">
      <div className="flex flex-col gap-10 md:flex-row md:items-start">
        {headshotSrc ? (
          <Image
            src={headshotSrc}
            alt="Megan [Last Name], MPH, founder of Beacon Point"
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
            Megan [Last Name], MPH
          </h2>
          <p className="mt-1 font-body text-[13px] text-[#8A9690]">Master of Public Health</p>
          <p className="mt-4 font-body text-[15px] text-[#5E6E64] leading-[1.7]">
            Megan [Last Name] founded Beacon Point after years of watching families struggle with
            the coordination gap that opens the moment a loved one comes home from the hospital.
            Based in the Sarasota area, she holds a Master of Public Health and brings [X years]
            of experience in [relevant background]. Beacon Point exists because she believes no
            family should have to be the default project manager for a process nobody trained them
            for.
          </p>
        </div>
      </div>
    </section>
  );
}

