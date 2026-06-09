import { Slide } from "@/data/slides";
import { memo } from "react";
import { AlertTriangle, Users, Zap } from "lucide-react";

interface ProblemSlideProps {
  slide: Slide;
}

const ITEMS = [
  {
    key: "whatProblem" as const,
    num: "1",
    label: "What problem exists?",
    Icon: AlertTriangle,
    color: "text-rose-500",
    numBg: "bg-rose-50 border-rose-200",
  },
  {
    key: "whoAffected" as const,
    num: "2",
    label: "Who is affected?",
    Icon: Users,
    color: "text-secondary",
    numBg: "bg-secondary/5 border-secondary/20",
  },
  {
    key: "whyMatters" as const,
    num: "3",
    label: "Why does it matter?",
    Icon: Zap,
    color: "text-amber-500",
    numBg: "bg-amber-50 border-amber-200",
  },
];

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const ProblemSlide = memo(({ slide }: ProblemSlideProps) => {
  const ps = slide.problemStatement;
  if (!ps) return null;

  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative — bottom-right */}
      <img src="/figs/Pasted image (2).png" alt="" loading="lazy"
        className="absolute bottom-20 right-16 w-32 md:w-48 object-contain pointer-events-none opacity-80 z-0 animate-[fadeIn_0.6s_ease-out_0.7s_both]" />

      {/* Decorative — top-left spools */}
      <img src="/figs/Pasted image (5).png" alt="" loading="lazy"
        className="absolute top-16 left-16 w-20 md:w-28 object-contain pointer-events-none opacity-80 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-20">
        <div className="w-full max-w-3xl">

          {/* Header */}
          <div
            className="mb-8 animate-[fadeUp_0.5s_ease-out_both] relative z-10"
            style={fadeUp("0s")}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary tracking-tight leading-tight inline bg-background/80 backdrop-blur-sm px-1 rounded-lg box-decoration-clone">
              {slide.title}
            </h1>
            <div className="mt-3 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Items */}
          <div className="flex flex-col gap-4">
            {ITEMS.map(({ key, num, label, Icon, color, numBg }, i) => (
              <div
                key={key}
                className="flex items-start gap-5 p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
                style={fadeUp(`${0.1 + i * 0.12}s`)}
              >
                {/* Number badge */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-lg ${numBg} ${color}`}>
                  {num}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${color}`} strokeWidth={2} />
                    <span className={`text-sm font-bold uppercase tracking-wider ${color}`}>
                      {label}
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-primary/80 font-medium leading-relaxed">
                    {ps[key]}
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
