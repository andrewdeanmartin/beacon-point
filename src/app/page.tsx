import { BPNav } from "@/components/BPNav";
import { BPHero } from "@/components/BPHero";
import { BPProblem } from "@/components/BPProblem";
import { BPService } from "@/components/BPService";
import { BPHowItWorks } from "@/components/BPHowItWorks";
import { BPPricing } from "@/components/BPPricing";
import { BPAbout } from "@/components/BPAbout";
import { BPPartners } from "@/components/BPPartners";
import { BPFAQ } from "@/components/BPFAQ";
import { BPContact } from "@/components/BPContact";
import { BPFooter } from "@/components/BPFooter";

export default function Home() {
  return (
    <>
      <BPNav />
      <main id="main" className="flex-1">
        <BPHero />
        <BPProblem />
        <BPService />
        <BPHowItWorks />
        <BPPricing />
        <BPAbout />
        <BPPartners />
        <BPFAQ />
        <BPContact />
      </main>
      <BPFooter />
    </>
  );
}
