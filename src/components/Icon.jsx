import {
  Activity, Award, Brain, Briefcase, Building2, CandlestickChart, Clock, Cloud, Code2,
  Factory, Gem, Globe, GraduationCap, Headset, HeartPulse, Landmark, Layers, LineChart,
  Megaphone, PieChart, Receipt, Rocket, Search, ShieldCheck, ShoppingCart, Smartphone,
  Sunset, TrendingUp, Truck, Umbrella, Wallet, Zap,
} from "lucide-react";

const icons = {
  activity: Activity,
  award: Award,
  brain: Brain,
  briefcase: Briefcase,
  building: Building2,
  candlestick: CandlestickChart,
  cart: ShoppingCart,
  chart: LineChart,
  clock: Clock,
  cloud: Cloud,
  code: Code2,
  factory: Factory,
  gem: Gem,
  globe: Globe,
  graduation: GraduationCap,
  headset: Headset,
  heart: HeartPulse,
  landmark: Landmark,
  layers: Layers,
  megaphone: Megaphone,
  pie: PieChart,
  receipt: Receipt,
  rocket: Rocket,
  search: Search,
  shield: ShieldCheck,
  smartphone: Smartphone,
  sunset: Sunset,
  trending: TrendingUp,
  truck: Truck,
  umbrella: Umbrella,
  wallet: Wallet,
  zap: Zap,
};

export default function Icon({ name, className = "h-6 w-6", strokeWidth = 1.8 }) {
  const Cmp = icons[name] || Zap;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
