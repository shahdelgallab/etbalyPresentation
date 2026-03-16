import { Slide } from "@/data/slides";
import { memo } from "react";
import { Cpu, Printer, Truck } from "lucide-react";

interface BusinessSlideProps {
  slide: Slide;
}

const STREAMS = [
  {
    Icon: Cpu,
    label: "Compute & AI Fee",
    tag: "Pay-Per-Use",
    color: "text-secondary",
    bg: "bg-secondary/5 border-secondary/20",
    iconBg: "bg-secondary/10",
    tagBg: "bg-secondary/10 border-secondary/20 text-secondary",
    desc: "A micro-transaction applied when generating AI models or running our automated slicing and healing pipeline. Covers API, server processing, and cloud costs.",
  },
  {
    Icon: Printer,
    label: "Dynamic Print Pricing",
    tag: "Material + Time",
    color: "text-violet-500",
    bg: "bg-violet-50/60 border-violet-100",
    iconBg: "bg-violet-100",
    tagBg: "bg-violet-50 border-violet-200 text-violet-500",
    desc: "Highly transparent hardware costs. Exactly 5 EGP per gram of filament used, plus a small nominal fee for machine operating time — both calculated instantly before checkout.",
    highlight: "5 EGP / gram",
  },
  {
    Icon: Truck,
    label: "Logistics",
    tag: "Delivery",
    color: "text-amber-500",
    bg: "bg-amber-50/60 border-amber-100",
    iconBg: "bg-amber-100",
    tagBg: "bg-amber-50 border-amber-200 text-amber-500",
    desc: "Standard, location-based delivery fees applied for direct doorstep fulfillment.",
  },
];

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const BusinessSlide = memo(({ slide }: BusinessSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (5).png" alt="" loading="lazy"
        className="absolute top-16 left-16 w-16 md:w-24 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (7).png" alt="" loading="lazy"
        className="absolute bottom-24 right-24 w-36 md:w-52 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16">
        <div className="w-full max-w-4xl flex flex-col gap-6">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">{slide.title}</h1>
            <div className="mt-3 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Tagline */}
          <div
            className="px-5 py-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
            style={fadeUp("0.1s")}
          >
            <p className="text-base md:text-lg text-primary/80 font-medium leading-relaxed">
              Our monetization is <span className="font-bold text-primary">straightforward, scalable,</span> and covers all operational costs.
            </p>
          </div>

          {/* Revenue streams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STREAMS.map(({ Icon, label, tag, color, iconBg, tagBg, desc, highlight }, i) => (
              <div
                key={label}
                className="flex flex-col gap-4 p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
                style={fadeUp(`${0.2 + i * 0.1}s`)}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.8} />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${tagBg}`}>{tag}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary mb-1">{label}</p>
                  {highlight && (
                    <p className={`text-xl font-bold ${color} mb-2`}>{highlight}</p>
                  )}
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
