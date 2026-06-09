import { Slide } from "@/data/slides";
import { memo } from "react";
import { Package, Cpu, Upload, Wand2, CheckCircle2 } from "lucide-react";

interface SolutionSlideProps {
  slide: Slide;
}

const OPTIONS = [
  { Icon: Package,  label: "Buy a rare part",         desc: "Browse our catalog for hard-to-find replacement parts." },
  { Icon: Wand2,    label: "Customize a template",    desc: "Pick a smart template and personalize it — no design skills needed." },
  { Icon: Cpu,      label: "AI-generated model",      desc: "Turn text or an image into a 3D model instantly using AI." },
  { Icon: Upload,   label: "Upload your own file",    desc: "Already have a design? Upload it and get it printed fast." },
];

const BENEFITS = [
  "Guaranteed printable files",
  "Instant clear pricing",
  "Direct delivery to your door",
];

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const SolutionSlide = memo(({ slide }: SolutionSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (4).png" alt="" loading="lazy"
        className="absolute top-8 right-12 w-24 md:w-36 object-contain pointer-events-none opacity-50 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (9).png" alt="" loading="lazy"
        className="absolute bottom-10 left-10 w-28 md:w-40 object-contain pointer-events-none opacity-40 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16">
        <div className="w-full max-w-4xl flex flex-col gap-6">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <div className="flex items-baseline gap-3 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <span className="text-lg md:text-xl font-medium text-secondary">
                  — {slide.subtitle}
                </span>
              )}
            </div>
            <div className="mt-3 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Hero statement */}
          <div
            className="p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
            style={fadeUp("0.1s")}
          >
            <p className="text-base md:text-lg text-primary/80 font-medium leading-relaxed">
              An <span className="font-bold text-primary">all-in-one platform</span> that makes custom 3D printing as easy as ordering food online — no design skills, no workshop negotiations.
            </p>
          </div>

          {/* 4 options grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {OPTIONS.map(({ Icon, label, desc }, i) => (
              <div
                key={label}
                className="flex flex-col gap-3 p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
                style={fadeUp(`${0.2 + i * 0.08}s`)}
              >
                <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-secondary" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary mb-1">{label}</p>
                  <p className="text-xs text-primary/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key benefits */}
          <div
            className="flex flex-wrap justify-center gap-3 animate-[fadeUp_0.5s_ease-out_both]"
            style={fadeUp("0.55s")}
          >
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" strokeWidth={2} />
                <span className="text-sm font-semibold text-secondary">{b}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
});
