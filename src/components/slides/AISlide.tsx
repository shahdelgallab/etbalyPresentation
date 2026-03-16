import { Slide } from "@/data/slides";
import { memo } from "react";
import { Wand2, ShieldCheck, Layers, FlaskConical } from "lucide-react";

interface AISlideProps {
  slide: Slide;
}

const FEATURES = [
  {
    Icon: Wand2,
    label: "Making Ideas Real",
    color: "text-secondary",
    numBg: "bg-secondary/10 border-secondary/20",
    desc: "We use Generative AI to turn simple text and 2D images into printable 3D models for creative users.",
  },
  {
    Icon: ShieldCheck,
    label: "Auto-Healing",
    color: "text-rose-500",
    numBg: "bg-rose-50 border-rose-100",
    desc: "Our system acts as an automated quality controller — it finds and fixes structural holes or broken lines in 3D files to guarantee real-world printability.",
  },
  {
    Icon: Layers,
    label: "Smart Slicing",
    color: "text-violet-500",
    numBg: "bg-violet-50 border-violet-100",
    desc: "The AI automatically determines optimal infill density and generates supports, saving material and preventing failures — no user expertise required.",
  },
  {
    Icon: FlaskConical,
    label: "The Future",
    color: "text-amber-500",
    numBg: "bg-amber-50 border-amber-100",
    desc: "We are planning to build a highly accurate AI model that designs exact mechanical engineering parts based on specific measurements.",
    tag: "Track 5",
  },
];

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const AISlide = memo(({ slide }: AISlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (5).png" alt="" loading="lazy"
        className="absolute top-16 right-16 w-16 md:w-24 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (10).png" alt="" loading="lazy"
        className="absolute bottom-24 left-24 w-36 md:w-52 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16">
        <div className="w-full max-w-4xl flex flex-col gap-6">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="mt-3 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURES.map(({ Icon, label, color, numBg, desc, tag }, i) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
                style={fadeUp(`${0.1 + i * 0.1}s`)}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${numBg}`}>
                  <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.8} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-sm font-bold text-primary">{label}</span>
                    {tag && (
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${numBg} ${color}`}>
                        {tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-primary/70 font-medium leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
});
