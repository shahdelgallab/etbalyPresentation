import { Slide } from "@/data/slides";
import { memo } from "react";
import { X, Check, Wifi, DollarSign, Brain, Layers } from "lucide-react";

interface CompetitiveSlideProps {
  slide: Slide;
}

const OTHERS = [
  { label: "Physical Hassle",      desc: "Requires visiting local workshops in person." },
  { label: "Technical Barrier",    desc: "Forces you to learn CAD and manual file slicing." },
  { label: "Unreliable",           desc: "Frequently results in failed or unprintable files." },
];

const OURS = [
  { Icon: Brain,  label: "Zero Expertise Needed",  desc: "We auto-heal and prep files for you. No 3D printing background required." },
  { Icon: Layers, label: "Material Savings",        desc: "Smart AI slicing optimizes infill and supports, reducing wasted plastic and lowering cost." },
  { Icon: DollarSign, label: "Clear Prices",        desc: "Exact cost calculated instantly — no waiting for quotes, no hidden fees." },
  { Icon: Wifi,   label: "100% Remote",             desc: "Design, order, and receive everything from your laptop or phone." },
];

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const CompetitiveSlide = memo(({ slide }: CompetitiveSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (5).png" alt="" loading="lazy"
        className="absolute top-16 left-16 w-16 md:w-24 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (13).png" alt="" loading="lazy"
        className="absolute bottom-24 right-24 w-36 md:w-52 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16">
        <div className="w-full max-w-4xl flex flex-col gap-6">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="mt-3 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Comparison grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Others column */}
            <div
              className="p-5 rounded-2xl bg-rose-50/60 border border-rose-100 backdrop-blur-sm animate-[fadeUp_0.5s_ease-out_both]"
              style={fadeUp("0.1s")}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-rose-100 flex items-center justify-center">
                  <X className="w-4 h-4 text-rose-500" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-rose-500 text-sm uppercase tracking-wider">Others</span>
              </div>
              <div className="flex flex-col gap-3">
                {OTHERS.map(({ label, desc }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-sm md:text-base text-primary/70 font-medium leading-relaxed">
                      <span className="font-bold text-primary">{label}:</span> {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Etb3haly column */}
            <div
              className="p-5 rounded-2xl bg-secondary/5 border border-secondary/20 backdrop-blur-sm animate-[fadeUp_0.5s_ease-out_both]"
              style={fadeUp("0.2s")}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-secondary" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-secondary text-sm uppercase tracking-wider">Etb3haly</span>
              </div>
              <div className="flex flex-col gap-3">
                {OURS.map(({ Icon, label, desc }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-sm md:text-base text-primary/80 font-medium leading-snug">
                      <span className="font-bold text-primary">{label}:</span> {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});
