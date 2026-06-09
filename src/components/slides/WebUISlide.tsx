import { Slide } from "@/data/slides";
import { memo } from "react";
import { ArrowRight } from "lucide-react";

interface WebUISlideProps {
  slide: Slide;
}

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

const SCREENS = [
  { file: "1-create account.png",   label: "Create Account" },
  { file: "2-sign in.png",          label: "Sign In" },
  { file: "3-collections.png",      label: "Collections" },
  { file: "4-ai generating.png",    label: "AI Generating" },
  { file: "5-text to 3d.png",       label: "Text to 3D (1)" },
  { file: "6-text to 3d.png",       label: "Text to 3D (2)" },
  { file: "7-image to 3d.png",      label: "Image to 3D" },
  { file: "8-upload stl.png",       label: "Upload STL" },
  { file: "9-cart.png",             label: "Cart" },
  { file: "10-order.png",           label: "Order" },
  { file: "11-profile.png",         label: "Profile" },
  { file: "12-admin dashboard.png", label: "Admin Dashboard" },
];

// 4 rows of 4, 4, 4 — but 12 screens so split 4-4-4
const ROW1 = SCREENS.slice(0, 4);
const ROW2 = SCREENS.slice(4, 8);
const ROW3 = SCREENS.slice(8, 12);

const ScreenCard = ({
  screen,
  delay,
  showArrow,
}: {
  screen: (typeof SCREENS)[0];
  delay: string;
  showArrow: boolean;
}) => (
  <div
    className="flex items-center gap-1.5 animate-[fadeUp_0.5s_ease-out_both]"
    style={fadeUp(delay)}
  >
    <div className="flex flex-col items-center gap-1.5">
      {/* Browser frame */}
      <div className="w-[120px] md:w-[148px] rounded-lg overflow-hidden border-2 border-secondary/40 shadow-md bg-white/60">
        {/* Fake browser bar */}
        <div className="flex items-center gap-1 px-2 py-1 bg-white/80 border-b border-secondary/20">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={`/diagrams/web-ui/${screen.file}`}
            alt={screen.label}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
      {/* Label */}
      <span className="text-[9px] md:text-[10px] font-semibold text-primary/70 text-center leading-tight max-w-[120px] md:max-w-[148px]">
        {screen.label}
      </span>
    </div>
    {/* Arrow */}
    {showArrow && (
      <ArrowRight className="w-4 h-4 text-secondary/60 flex-shrink-0 mb-4" strokeWidth={2.5} />
    )}
  </div>
);

const RowDivider = ({ delay }: { delay: string }) => (
  <div
    className="flex justify-center items-center gap-2 animate-[fadeUp_0.5s_ease-out_both]"
    style={fadeUp(delay)}
  >
    <div className="flex items-center gap-1 text-secondary/50">
      <div className="w-8 h-0.5 bg-secondary/40" />
      <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
      <span className="text-[9px] font-semibold tracking-widest uppercase text-secondary/50">continues</span>
      <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
      <div className="w-8 h-0.5 bg-secondary/40" />
    </div>
  </div>
);

export const WebUISlide = memo(({ slide }: WebUISlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (4).png" alt="" loading="lazy"
        className="absolute top-6 left-6 w-16 md:w-24 object-contain pointer-events-none opacity-35 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (11).png" alt="" loading="lazy"
        className="absolute bottom-6 right-6 w-20 md:w-32 object-contain pointer-events-none opacity-35 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 py-4 gap-4">
        <div className="w-full max-w-6xl flex flex-col gap-3">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="mt-2 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Flow container */}
          <div className="p-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/60 shadow-sm flex flex-col gap-3">

            {/* Row 1: 1–4 */}
            <div className="flex items-start justify-center flex-wrap gap-1">
              {ROW1.map((screen, i) => (
                <ScreenCard
                  key={screen.file + i}
                  screen={screen}
                  delay={`${0.1 + i * 0.07}s`}
                  showArrow={i < ROW1.length - 1}
                />
              ))}
            </div>

            <RowDivider delay="0.42s" />

            {/* Row 2: 5–8 */}
            <div className="flex items-start justify-center flex-wrap gap-1">
              {ROW2.map((screen, i) => (
                <ScreenCard
                  key={screen.file + i}
                  screen={screen}
                  delay={`${0.5 + i * 0.07}s`}
                  showArrow={i < ROW2.length - 1}
                />
              ))}
            </div>

            <RowDivider delay="0.82s" />

            {/* Row 3: 9–12 */}
            <div className="flex items-start justify-center flex-wrap gap-1">
              {ROW3.map((screen, i) => (
                <ScreenCard
                  key={screen.file + i}
                  screen={screen}
                  delay={`${0.9 + i * 0.07}s`}
                  showArrow={i < ROW3.length - 1}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});
