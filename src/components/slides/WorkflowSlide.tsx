import { Slide } from "@/data/slides";
import { memo } from "react";
import { GitFork, Wrench, CreditCard, ArrowDown } from "lucide-react";

interface WorkflowSlideProps {
  slide: Slide;
}

const STEPS = [
  {
    num: "1",
    label: "Choose Your Path",
    Icon: GitFork,
    color: "text-secondary",
    bg: "bg-secondary/10 border-secondary/20",
    numColor: "bg-secondary text-white",
    desc: "Pick a ready part from the catalog, customize a smart template, write an AI prompt, or upload your own CAD file.",
  },
  {
    num: "2",
    label: "Automated AI Slicing Pipeline",
    Icon: Wrench,
    color: "text-violet-500",
    bg: "bg-violet-50/60 border-violet-100",
    numColor: "bg-violet-500 text-white",
    desc: "Your file goes through our intelligent pipeline. It automatically heals any 3D design errors, perfectly slices the model for the printer, and calculates the exact material weight to give you an instant, non-negotiable price.",
    tag: "The Engine",
  },
  {
    num: "3",
    label: "Pay & Receive",
    Icon: CreditCard,
    color: "text-amber-500",
    bg: "bg-amber-50/60 border-amber-100",
    numColor: "bg-amber-500 text-white",
    desc: "See a 3D preview, pay easily online (Instapay, Fawry, etc.), and we print it and ship it directly to your door.",
  },
];

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const WorkflowSlide = memo(({ slide }: WorkflowSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (5).png" alt="" loading="lazy"
        className="absolute top-16 right-16 w-16 md:w-24 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (7).png" alt="" loading="lazy"
        className="absolute bottom-24 left-24 w-36 md:w-52 object-contain pointer-events-none opacity-50 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16">
        <div className="w-full max-w-2xl flex flex-col gap-5">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="mt-3 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-2">
            {STEPS.map(({ num, label, Icon, color, bg, numColor, desc, tag }, i) => (
              <div key={num} className="flex flex-col">
                <div
                  className={`flex items-start gap-4 p-5 rounded-2xl border bg-white/40 backdrop-blur-sm border-white/60 shadow-sm animate-[fadeUp_0.5s_ease-out_both]`}
                  style={fadeUp(`${0.1 + i * 0.12}s`)}
                >
                  {/* Number */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${numColor}`}>
                    {num}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Icon className={`w-4 h-4 ${color}`} strokeWidth={2} />
                      <span className="text-sm font-bold text-primary">{label}</span>
                      {tag && (
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${bg} ${color} border`}>
                          {tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm md:text-base text-primary/70 font-medium leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Arrow connector */}
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-4 h-4 text-primary/20" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
});
