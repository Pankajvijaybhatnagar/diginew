import { TrendingDown, TrendingUp } from "lucide-react";
import { tickerItems } from "@/data/site";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-navy-950 py-3" aria-label="Indicative market snapshot">
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {items.map((t, i) => {
          const up = t.change >= 0;
          return (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap text-sm" aria-hidden={i >= tickerItems.length}>
              <span className="font-semibold text-white">{t.symbol}</span>
              <span className="text-white/70">{t.price}</span>
              <span className={`inline-flex items-center gap-1 font-medium ${up ? "text-emerald-400" : "text-rose-400"}`}>
                {up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                {up ? "+" : ""}
                {t.change.toFixed(2)}%
              </span>
              <span className="text-brand-500/60">•</span>
            </div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy-950 to-transparent" />
    </div>
  );
}
