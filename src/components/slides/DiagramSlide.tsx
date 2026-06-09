import { Slide } from "@/data/slides";
import { memo } from "react";

interface DiagramSlideProps {
  slide: Slide;
}

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const DiagramSlide = memo(({ slide }: DiagramSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (8).png" alt="" loading="lazy"
        className="absolute top-12 right-8 w-24 md:w-40 object-contain pointer-events-none opacity-40 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (12).png" alt="" loading="lazy"
        className="absolute bottom-12 left-12 w-20 md:w-32 object-contain pointer-events-none opacity-35 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-14 py-4 gap-4">

        {/* Header */}
        <div className="w-full max-w-5xl animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
          <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-base md:text-lg text-primary/60 font-medium mt-1">{slide.subtitle}</p>
          )}
          <div className="mt-2 h-1 w-14 rounded-full bg-secondary" />
        </div>

        {/* Diagram image */}
        {slide.diagramImage && (
          <div
            className="w-full max-w-5xl flex-1 min-h-0 flex items-center justify-center animate-[fadeUp_0.5s_ease-out_both]"
            style={fadeUp("0.15s")}
          >
            <div className="w-full h-full max-h-[calc(100vh-160px)] p-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-md flex items-center justify-center">
              <img
                src={slide.diagramImage}
                alt={slide.title}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
});
