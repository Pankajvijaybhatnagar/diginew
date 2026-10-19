"use client";

import { useMemo, useState } from "react";

const inr = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

function Slider({ label, value, setValue, min, max, step, format }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-navy-900/70">{label}</label>
        <span className="rounded-lg bg-brand-50 px-3 py-1 text-sm font-bold text-brand-700">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label={label}
        className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-brand-500"
        style={{ background: `linear-gradient(to right, #FF9908 ${pct}%, #e2ddf4 ${pct}%)` }}
      />
    </div>
  );
}

export default function SipCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const { invested, total, gains } = useMemo(() => {
    const n = years * 12;
    const i = rate / 12 / 100;
    const fv = monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const inv = monthly * n;
    return { invested: inv, total: fv, gains: fv - inv };
  }, [monthly, rate, years]);

  const investedPct = (invested / total) * 100;
  const r = 70;
  const c = 2 * Math.PI * r;

  return (
    <div className="grid gap-10 rounded-[2rem] border border-navy-900/10 bg-white p-6 shadow-2xl shadow-navy-900/10 sm:p-10 lg:grid-cols-2">
      <div className="space-y-8">
        <Slider label="Monthly investment" value={monthly} setValue={setMonthly} min={500} max={200000} step={500} format={inr} />
        <Slider label="Expected return (p.a.)" value={rate} setValue={setRate} min={1} max={30} step={0.5} format={(v) => `${v}%`} />
        <Slider label="Time period" value={years} setValue={setYears} min={1} max={40} step={1} format={(v) => `${v} yrs`} />
        <p className="text-xs text-navy-900/50">
          Illustration only. Actual mutual fund returns vary with market conditions and are not guaranteed.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row lg:flex-col xl:flex-row">
        <svg viewBox="0 0 180 180" className="h-48 w-48 shrink-0 -rotate-90" role="img" aria-label="Invested vs returns">
          <circle cx="90" cy="90" r={r} fill="none" stroke="#FF9908" strokeWidth="22" />
          <circle
            cx="90"
            cy="90"
            r={r}
            fill="none"
            stroke="#0B0039"
            strokeWidth="22"
            strokeDasharray={`${(investedPct / 100) * c} ${c}`}
          />
        </svg>
        <dl className="w-full max-w-xs space-y-4">
          <div className="flex items-center justify-between gap-4">
            <dt className="flex items-center gap-2 text-sm text-navy-900/60">
              <span className="h-3 w-3 rounded-full bg-navy-900" /> Invested
            </dt>
            <dd className="font-semibold">{inr(invested)}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="flex items-center gap-2 text-sm text-navy-900/60">
              <span className="h-3 w-3 rounded-full bg-brand-500" /> Est. returns
            </dt>
            <dd className="font-semibold">{inr(gains)}</dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-navy-900/10 pt-4">
            <dt className="text-sm font-semibold">Total value</dt>
            <dd className="text-xl font-bold text-brand-600">{inr(total)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
