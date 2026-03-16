import { Slide } from "@/data/slides";
import { memo } from "react";
import { Globe, MapPin, Target } from "lucide-react";

interface MarketSlideProps {
  slide: Slide;
}

const CARDS = [
  {
    Icon: Globe,
    stat: "$20B+",
    growth: "↑ 20% / year",
    label: "Global Growth",
    color: "text-secondary",
    bg: "bg-secondary/5 border-secondary/20",
    iconBg: "bg-secondary/10",
    desc: "The 3D printing industry is huge and growing fast. The world is shifting to Print-on-Demand.",
  },
  {
    Icon: MapPin,
    stat: "MENA Gap",
    growth: "Zero platforms",
    label: "The Local Gap",
    color: "text-violet-500",
    bg: "bg-violet-50/60 border-violet-100",
    iconBg: "bg-violet-100",
    desc: "Egypt & MENA have massive demand for spare parts, custom products, and rapid prototyping — but no easy, automated platform to serve it.",
  },
  {
    Icon: Target,
    stat: "100K+",
    growth: "Immediate demand",
    label: "Our Starting Point",
    color: "text-amber-500",
    bg: "bg-amber-50/60 border-amber-100",
    iconBg: "bg-amber-100",
    desc: "STEM & engineering students building graduation projects, plus thousands of local repair shops and creators who need fast, local 3D printing.",
  },
];

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const MarketSlide = memo(({ slide }: MarketSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (5).png" alt="" loading="lazy"
        className="absolute top-16 right-16 w-16 md:w-24 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (4).png" alt="" loading="lazy"
        className="absolute bottom-16 left-16 w-36 md:w-52 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16">
        <div className="w-full max-w-4xl flex flex-col gap-6">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="mt-3 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CARDS.map(({ Icon, stat, growth, label, color, bg, iconBg, desc }, i) => (
              <div
                key={label}
                className={`flex flex-col gap-4 p-5 rounded-2xl border bg-white/40 backdrop-blur-sm border-white/60 shadow-sm animate-[fadeUp_0.5s_ease-out_both]`}
                style={fadeUp(`${0.1 + i * 0.1}s`)}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.8} />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${bg} ${color} border`}>
                    {growth}
                  </span>
                </div>
                <div>
                  <p className={`text-3xl font-bold ${color} mb-1`}>{stat}</p>
                  <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{label}</p>
                  <p className="text-sm text-primary/70 font-medium leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
});
