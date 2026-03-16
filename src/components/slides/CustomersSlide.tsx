import { Slide } from "@/data/slides";
import { memo } from "react";
import { Wrench, Sparkles, Gamepad2, Briefcase } from "lucide-react";

interface CustomersSlideProps {
  slide: Slide;
}

const SEGMENTS = [
  {
    num: "1",
    label: "The Problem Solvers",
    Icon: Wrench,
    color: "text-rose-500",
    bg: "bg-rose-50/60 border-rose-100",
    numBg: "bg-rose-100 text-rose-500",
    description: "People who need rare replacement parts (like specific car cooling clips) that factories don't sell alone.",
  },
  {
    num: "2",
    label: "The Personalizers",
    Icon: Sparkles,
    color: "text-secondary",
    bg: "bg-secondary/5 border-secondary/20",
    numBg: "bg-secondary/10 text-secondary",
    description: "Everyday people who want customized gifts or name tags without knowing any 3D design.",
  },
  {
    num: "3",
    label: "The Creators",
    Icon: Gamepad2,
    color: "text-violet-500",
    bg: "bg-violet-50/60 border-violet-100",
    numBg: "bg-violet-100 text-violet-500",
    description: "Gamers and artists who want to easily turn text or images into 3D models using AI for fun.",
  },
  {
    num: "4",
    label: "The Pros",
    Icon: Briefcase,
    color: "text-amber-500",
    bg: "bg-amber-50/60 border-amber-100",
    numBg: "bg-amber-100 text-amber-500",
    description: "Designers who already have a 3D file and just need a fast, automated printing service without the hardware headache.",
  },
];

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const CustomersSlide = memo(({ slide }: CustomersSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (5).png" alt="" loading="lazy"
        className="absolute top-16 right-16 w-16 md:w-24 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (3).png" alt="" loading="lazy"
        className="absolute bottom-20 left-16 w-36 md:w-52 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16">
        <div className="w-full max-w-4xl">

          {/* Header */}
          <div
            className="mb-8 animate-[fadeUp_0.5s_ease-out_both]"
            style={fadeUp("0s")}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="mt-3 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SEGMENTS.map(({ num, label, Icon, color, bg, numBg, description }, i) => (
              <div
                key={num}
                className={`flex items-start gap-4 p-5 rounded-2xl border bg-white/40 backdrop-blur-sm border-white/60 shadow-sm animate-[fadeUp_0.5s_ease-out_both]`}
                style={fadeUp(`${0.1 + i * 0.1}s`)}
              >
                {/* Number */}
                <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-base ${numBg}`}>
                  {num}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${color}`} strokeWidth={2} />
                    <span className={`text-sm font-bold ${color}`}>{label}</span>
                  </div>
                  <p className="text-sm md:text-base text-primary/75 font-medium leading-relaxed">
                    {description}
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
