import { Slide } from "@/data/slides";
import { memo } from "react";
import { ArrowRight, Wand2, SlidersHorizontal, Upload, Calculator, Box } from "lucide-react";

interface KeyFeaturesSlideProps {
  slide: Slide;
}

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

const FEATURES = [
  {
    icon: Wand2,
    title: "AI-Driven Design",
    desc: "Generate unique 3D models from simple text prompts",
  },
  {
    icon: SlidersHorizontal,
    title: "Parametric Customization",
    desc: "Easily modify dimensions of existing designs using simple sliders",
  },
  {
    icon: Upload,
    title: "Professional File Upload",
    desc: "Upload standard STL/OBJ files for manufacturing",
  },
  {
    icon: Calculator,
    title: "Automated Analysis & Quote",
    desc: "Instant cost estimation and automatic checks for printability errors",
  },
  {
    icon: Box,
    title: "Interactive 3D Viewer",
    desc: "Visually inspect designs in real-time before ordering",
  },
];

export const KeyFeaturesSlide = memo(({ slide }: KeyFeaturesSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (6).png" alt="" loading="lazy"
        className="absolute bottom-8 left-8 w-32 md:w-52 object-contain pointer-events-none opacity-45 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (11).png" alt="" loading="lazy"
        className="absolute top-8 right-10 w-20 md:w-32 object-contain pointer-events-none opacity-40 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 py-6 gap-6">
        <div className="w-full max-w-4xl flex flex-col gap-6">

          {/* Header */}
          <div className="text-center animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="mt-3 mx-auto h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Features grid: 2 cols top, then last one centered */}
          <div className="flex flex-col gap-3">
            {/* Row 1: first 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {FEATURES.slice(0, 2).map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
                  style={fadeUp(`${0.1 + i * 0.08}s`)}
                >
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <div>
                    <span className="font-bold text-primary text-sm">{title}: </span>
                    <span className="text-sm text-primary/70">{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: next 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {FEATURES.slice(2, 4).map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
                  style={fadeUp(`${0.26 + i * 0.08}s`)}
                >
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <div>
                    <span className="font-bold text-primary text-sm">{title}: </span>
                    <span className="text-sm text-primary/70">{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3: last one, left-aligned like the image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
                style={fadeUp("0.42s")}
              >
                <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                <div>
                  <span className="font-bold text-primary text-sm">{FEATURES[4].title}: </span>
                  <span className="text-sm text-primary/70">{FEATURES[4].desc}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});
