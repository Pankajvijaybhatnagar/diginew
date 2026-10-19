"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Cloud, Code2, LineChart, ShieldCheck, TrendingUp, Wallet } from "lucide-react";

const INTERVAL = 3800;

// Pseudo candlestick data for the decorative chart (not real market data)
const candles = [
  [60, 72, 55, 78], [72, 66, 62, 76], [66, 80, 64, 84], [80, 76, 70, 86], [76, 90, 74, 94],
  [90, 86, 82, 95], [86, 98, 84, 104], [98, 94, 90, 102], [94, 108, 92, 112], [108, 116, 104, 122],
  [116, 110, 106, 120], [110, 124, 108, 130], [124, 132, 120, 138], [132, 128, 124, 136], [128, 142, 126, 148],
];

function CandleChart() {
  const w = 360;
  const h = 150;
  const min = 50;
  const max = 150;
  const y = (v) => h - ((v - min) / (max - min)) * h;
  const step = w / candles.length;
  const line = candles.map(([, c], i) => `${i === 0 ? "M" : "L"}${i * step + step / 2},${y(c)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#FF9908" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FF9908" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="white" strokeOpacity="0.06" />
      ))}
      <path d={`${line} L${w - step / 2},${h} L${step / 2},${h} Z`} fill="url(#area)" className="animate-fade-in" />
      <path d={line} stroke="#FF9908" strokeWidth="2" fill="none" pathLength="1" className="animate-draw" />
      {candles.map(([o, c, l, hi], i) => {
        const up = c >= o;
        const x = i * step + step / 2;
        return (
          <g key={i} className="animate-pop" style={{ animationDelay: `${i * 60}ms` }}>
            <line x1={x} x2={x} y1={y(hi)} y2={y(l)} stroke={up ? "#34d399" : "#fb7185"} strokeWidth="1.5" />
            <rect
              x={x - step * 0.25}
              width={step * 0.5}
              y={y(Math.max(o, c))}
              height={Math.max(Math.abs(y(o) - y(c)), 2)}
              rx="1.5"
              fill={up ? "#34d399" : "#fb7185"}
            />
          </g>
        );
      })}
    </svg>
  );
}

function CardLabel({ icon: Cmp, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-900">
      <Cmp className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function ItCard() {
  const lines = [
    <><span className="text-brand-400">import</span> {"{ cloud }"} <span className="text-brand-400">from</span> <span className="text-emerald-300">&quot;@digi1xprt&quot;</span>;</>,
    <><span className="text-brand-400">await</span> build(<span className="text-emerald-300">&quot;web-app&quot;</span>);</>,
    <><span className="text-brand-400">await</span> secure({"{"} vapt: <span className="text-sky-300">true</span> {"}"});</>,
    <><span className="text-brand-400">await</span> cloud.scale({"{"} users: <span className="text-sky-300">1e6</span> {"}"});</>,
  ];
  const checks = ["Build successful", "128 tests passed", "Deployed to cloud"];
  return (
    <>
      <div className="flex items-center justify-between">
        <CardLabel icon={Code2}>IT Solutions</CardLabel>
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
      </div>
      <div className="mt-5 rounded-2xl bg-navy-950/80 p-4 font-mono text-[11px] leading-6 text-white/75">
        {lines.map((l, i) => (
          <div key={i} className="animate-type overflow-hidden whitespace-nowrap" style={{ animationDelay: `${i * 250}ms` }}>
            <span className="mr-3 text-white/25">{i + 1}</span>
            {l}
          </div>
        ))}
      </div>
      <ul className="mt-5 space-y-2.5">
        {checks.map((c, i) => (
          <li key={c} className="animate-fade-up flex items-center gap-2 text-sm text-white/80" style={{ animationDelay: `${1100 + i * 200}ms` }}>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {c}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
        <span className="flex items-center gap-2 text-xs text-white/60">
          <Cloud className="h-4 w-4 text-brand-400" /> Uptime
        </span>
        <span className="text-lg font-bold text-white">99.99%</span>
      </div>
    </>
  );
}

function MarketCard() {
  return (
    <>
      <div className="flex items-center justify-between">
        <CardLabel icon={LineChart}>Share Market</CardLabel>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-400">
          <TrendingUp className="h-3.5 w-3.5" /> +18.4%
        </span>
      </div>
      <p className="mt-5 text-xs uppercase tracking-widest text-white/50">Portfolio Value</p>
      <p className="animate-fade-up mt-1 text-3xl font-bold text-white">₹24,86,540</p>
      <div className="mt-4">
        <CandleChart />
      </div>
      <div className="mt-4 flex gap-2 text-xs">
        {["1D", "1W", "1M", "1Y", "ALL"].map((t, i) => (
          <span key={t} className={`rounded-full px-3 py-1 ${i === 3 ? "bg-brand-500 font-semibold text-navy-900" : "text-white/50"}`}>
            {t}
          </span>
        ))}
      </div>
    </>
  );
}

function FinanceCard() {
  const allocation = [
    { label: "Equity", value: 55, color: "#FF9908" },
    { label: "Debt", value: 25, color: "#9a8bd4" },
    { label: "Gold", value: 12, color: "#ffd494" },
    { label: "Cash", value: 8, color: "#34d399" },
  ];
  const r = 42;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <>
      <div className="flex items-center justify-between">
        <CardLabel icon={Wallet}>Financial Services</CardLabel>
        <ShieldCheck className="h-5 w-5 text-emerald-400" />
      </div>
      <div className="mt-6 flex items-center gap-6">
        <svg viewBox="0 0 110 110" className="h-32 w-32 shrink-0 -rotate-90" aria-hidden="true">
          <circle cx="55" cy="55" r={r} fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="14" />
          {allocation.map((a, i) => {
            const len = (a.value / 100) * c;
            const el = (
              <circle
                key={a.label}
                cx="55"
                cy="55"
                r={r}
                fill="none"
                stroke={a.color}
                strokeWidth="14"
                strokeDasharray={`${len} ${c}`}
                strokeDashoffset={-offset}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 180}ms` }}
              />
            );
            offset += len;
            return el;
          })}
        </svg>
        <ul className="space-y-2 text-sm">
          {allocation.map((a, i) => (
            <li key={a.label} className="animate-fade-up flex items-center gap-2 text-white/75" style={{ animationDelay: `${i * 150}ms` }}>
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: a.color }} />
              {a.label} <span className="font-semibold text-white">{a.value}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 rounded-2xl bg-white p-4 text-navy-900">
        <div className="flex items-center justify-between">
          <span>
            <span className="block text-[11px] text-navy-900/50">Monthly SIP</span>
            <span className="block font-bold">₹15,000 / mo</span>
          </span>
          <span className="text-right">
            <span className="block text-[11px] text-navy-900/50">Goal</span>
            <span className="block font-bold text-brand-600">₹1 Cr</span>
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-navy-100">
          <div className="animate-grow-x h-full w-3/4 origin-left rounded-full bg-gradient-to-r from-brand-500 to-brand-300" />
        </div>
        <p className="mt-2 text-[11px] text-navy-900/50">Goal progress · 75%</p>
      </div>
    </>
  );
}

const cards = [
  { key: "it", label: "IT", Content: ItCard },
  { key: "market", label: "Market", Content: MarketCard },
  { key: "finance", label: "Finance", Content: FinanceCard },
];

// Position of each card relative to the front card: 0 = front, 1 = right/back, 2 = left/back
function slotStyle(pos, small) {
  const x = small ? 30 : 46;
  if (pos === 0) return { transform: "translate(-50%, -50%) translateX(0) scale(1) rotateY(0deg)", zIndex: 30, opacity: 1, filter: "none" };
  if (pos === 1)
    return { transform: `translate(-50%, -50%) translateX(${x}%) scale(0.74) rotateY(-32deg) rotateZ(4deg)`, zIndex: 20, opacity: 0.55, filter: "blur(1px)" };
  return { transform: `translate(-50%, -50%) translateX(-${x}%) scale(0.74) rotateY(32deg) rotateZ(-4deg)`, zIndex: 10, opacity: 0.55, filter: "blur(1px)" };
}

export default function HeroVisual() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setSmall(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % cards.length), INTERVAL);
    return () => clearTimeout(id);
  }, [active, paused]);

  return (
    <div
      className="relative mx-auto w-full max-w-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-10 -z-10 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />

      <div className="relative h-[430px] sm:h-[460px]" style={{ perspective: "1400px" }} aria-roledescription="carousel">
        {cards.map(({ key, label, Content }, i) => {
          const pos = (i - active + cards.length) % cards.length;
          const front = pos === 0;
          return (
            <div
              key={key}
              role="group"
              aria-label={label}
              aria-hidden={!front}
              onClick={() => setActive(i)}
              className={`absolute left-1/2 top-1/2 min-h-[400px] w-[300px] cursor-pointer rounded-3xl border p-5 backdrop-blur-xl transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[360px] sm:p-6 ${
                front
                  ? "border-brand-500/50 bg-navy-800 shadow-[0_30px_80px_-20px_rgba(255,153,8,0.45)]"
                  : "border-white/10 bg-navy-800/70 shadow-2xl"
              }`}
              style={{ ...slotStyle(pos, small), transformStyle: "preserve-3d" }}
            >
              {/* Re-mount content when a card comes to the front so its animations replay */}
              <div key={front ? `${key}-${active}` : key}>
                <Content />
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="mt-2 flex justify-center gap-3">
        {cards.map(({ key, label }, i) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${label} card`}
            aria-current={i === active}
            className={`group relative h-8 overflow-hidden rounded-full border px-4 text-xs font-semibold transition-all ${
              i === active ? "border-brand-500 text-white" : "border-white/15 text-white/50 hover:text-white"
            }`}
          >
            {i === active && (
              <span
                key={`${active}-${paused}`}
                className="absolute inset-0 origin-left bg-brand-500/25"
                style={{
                  animation: paused ? "none" : `grow-x ${INTERVAL}ms linear forwards`,
                  transform: paused ? "scaleX(1)" : undefined,
                }}
              />
            )}
            <span className="relative">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
