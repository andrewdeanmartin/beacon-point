import { BP } from "@/lib/tokens";

export function BPFooter() {
  return (
    <footer className="mt-20 bg-bp-linen px-6 py-12">
      <div className="mx-auto max-w-[720px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-[18px] font-medium text-bp-fern">Beacon Point</p>
            <p className="font-body text-[13px] text-[#8A9690]">Sarasota, Florida</p>
          </div>

          <div>
            <p className="font-body text-[13px] text-[#8A9690]">{BP.phoneDisplay}</p>
            <p className="font-body text-[13px] text-[#8A9690]">{BP.email}</p>
          </div>
        </div>

        <p className="mt-8 font-body text-[11px] leading-[1.6] text-[#8A9690]">
          Beacon Point provides non-clinical coordination services. We do not provide medical
          advice, diagnosis, or treatment. All medical decisions remain with licensed healthcare
          providers.
        </p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="font-body text-[11px] text-[#8A9690]">© 2026 Beacon Point</p>
          <a href="/founder" className="font-body text-[11px] text-[#8A9690] hover:underline">
            Founder
          </a>
        </div>
      </div>
    </footer>
  );
}

