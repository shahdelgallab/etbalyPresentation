import { Slide } from "@/data/slides";
import { memo } from "react";
import { Wifi, ShieldCheck, Building2 } from "lucide-react";

interface FutureWorkSlideProps {
  slide: Slide;
}

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

const ITEMS = [
  {
    icon: Wifi,
    title: "IoT Printer Telemetry",
    desc: "Connecting directly to a network of local 3D printers to monitor print jobs in real-time, detect print failures automatically via camera feeds, and dynamically allocate tasks to available machines.",
  },
  {
    icon: ShieldCheck,
    title: "Structural Analysis",
    desc: "Adding automated stress-testing simulations to the professional file uploader to detect weak points or structural vulnerabilities in a 3D model before production begins.",
  },
  {
    icon: Building2,
    title: "B2B Industrial Scale",
    desc: "Expanding the platform ecosystem to fully support industrial-grade manufacturing, connecting corporate clients with large-scale factory production lines beyond individual consumer prints.",
  },
];

export const FutureWorkSlide = memo(({ slide }: FutureWorkSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (8).png" alt="" loading="lazy"
        className="absolute top-10 left-10 w-20 md:w-32 object-contain pointer-events-none opacity-40 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (5).png" alt="" loading="lazy"
        className="absolute bottom-10 right-10 w-24 md:w-40 object-contain pointer-events-none opacity-40 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-20 py-6 gap-7">
        <div className="w-full max-w-3xl flex flex-col gap-6">

          {/* Header pill — mimics the purple badge in the image */}
          <div className="flex justify-center animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <div className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-widest uppercase">
                {slide.title}
              </h1>
            </div>
          </div>

          {/* Items */}
          <div className="flex flex-col gap-4">
            {ITEMS.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="flex items-start gap-4 px-6 py-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
                style={fadeUp(`${0.15 + i * 0.12}s`)}
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
                <p className="text-sm md:text-base text-primary/80 leading-relaxed">
                  <span className="font-bold text-primary">{title}: </span>
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
});
