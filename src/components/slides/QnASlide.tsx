import { Slide } from "@/data/slides";
import { memo } from "react";
import { MessageCircleQuestion } from "lucide-react";

interface QnASlideProps {
  slide: Slide;
}

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const QnASlide = memo(({ slide }: QnASlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative top-left */}
      <img
        src="/figs/Pasted image (10).png"
        alt=""
        className="absolute top-10 left-10 w-24 md:w-36 object-contain pointer-events-none opacity-50 z-0 animate-[fadeIn_0.6s_ease-out_0.6s_both]"
        loading="lazy"
      />

      {/* Decorative bottom-right spools */}
      <img
        src="/figs/Pasted image (6).png"
        alt=""
        className="absolute bottom-10 right-4 w-36 md:w-64 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]"
        loading="lazy"
      />

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-6">

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl bg-white/70 border border-white/80 shadow-md flex items-center justify-center animate-[fadeUp_0.5s_ease-out_both]"
          style={fadeUp("0s")}
        >
          <MessageCircleQuestion className="w-8 h-8 text-secondary" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h1
          className="text-6xl md:text-8xl font-bold text-primary tracking-tight leading-none animate-[fadeUp_0.5s_ease-out_both]"
          style={fadeUp("0.1s")}
        >
          {slide.title}
        </h1>

        {/* Subtitle */}
        {slide.subtitle && (
          <p
            className="text-xl md:text-2xl text-secondary font-medium animate-[fadeUp_0.5s_ease-out_both]"
            style={fadeUp("0.2s")}
          >
            {slide.subtitle}
          </p>
        )}


      </div>
    </div>
  );
});
