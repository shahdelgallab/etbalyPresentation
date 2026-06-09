import { Slide } from "@/data/slides";
import { memo } from "react";
import { CheckCircle } from "lucide-react";

interface ConclusionSlideProps {
  slide: Slide;
}

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

const POINTS = [
  "Etbaly successfully bridges the gap between digital design and physical products",
  "Provides an integrated solution reducing cost, time, and technical barriers",
  "Demonstrates high technical and economic feasibility",
  "Opens new possibilities for accessible digital manufacturing",
];

export const ConclusionSlide = memo(({ slide }: ConclusionSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (6).png" alt="" loading="lazy"
        className="absolute bottom-8 left-8 w-40 md:w-60 object-contain pointer-events-none opacity-50 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (7).png" alt="" loading="lazy"
        className="absolute top-10 right-12 w-24 md:w-36 object-contain pointer-events-none opacity-40 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-24 py-6 gap-8">
        <div className="w-full max-w-3xl flex flex-col gap-6">

          {/* Title */}
          <div className="text-center animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
              {slide.title}
            </h1>
            <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-secondary" />
          </div>

          {/* Bullet points */}
          <div className="flex flex-col gap-3">
            {POINTS.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
                style={fadeUp(`${0.15 + i * 0.1}s`)}
              >
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
                <p className="text-sm md:text-base font-medium text-primary/80 leading-snug">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Thank you watermark */}
          <div
            className="text-center animate-[fadeUp_0.5s_ease-out_both]"
            style={fadeUp("0.6s")}
          >
            <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase text-primary/20">
              Thank You
            </span>
          </div>

        </div>
      </div>
    </div>
  );
});
