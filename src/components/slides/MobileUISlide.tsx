import { Slide } from "@/data/slides";
import { memo } from "react";
import { ArrowRight } from "lucide-react";

interface MobileUISlideProps {
  slide: Slide;
}

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

const SCREENS = [
  { file: "1-create account.jpeg", label: "Create Account" },
  { file: "2-sign in.jpeg",        label: "Sign In" },
  { file: "3-collections.jpeg",    label: "Collections" },
  { file: "4-ai generating.jpeg",  label: "AI Generating" },
  { file: "5-text to 3d.jpeg",     label: "Text to 3D" },
  { file: "6-image to 3d.jpeg",    label: "Image to 3D" },
  { file: "7-upload file.jpeg",    label: "Upload File" },
  { file: "8-slicing.jpeg",        label: "Slicing" },
  { file: "9-cart.jpeg",           label: "Cart" },
  { file: "10-order.jpeg",         label: "Order" },
  { file: "11-profile.jpeg",       label: "Profile" },
];

// Split into two rows: 6 on top, 5 on bottom
const ROW1 = SCREENS.slice(0, 6);
const ROW2 = SCREENS.slice(6);

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
      {/* Phone frame */}
      <div className="relative w-[72px] md:w-[84px] rounded-[14px] overflow-hidden border-2 border-secondary/40 shadow-md bg-white/60 aspect-[9/19]">
        <img
          src={`/diagrams/mobile-ui/${screen.file}`}
          alt={screen.label}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      {/* Label */}
      <span className="text-[9px] md:text-[10px] font-semibold text-primary/70 text-center leading-tight max-w-[72px] md:max-w-[84px]">
        {screen.label}
      </span>
    </div>
    {/* Arrow */}
    {showArrow && (
      <ArrowRight className="w-4 h-4 text-secondary/60 flex-shrink-0 mb-4" strokeWidth={2.5} />
    )}
  </div>
);

export const MobileUISlide = memo(({ slide }: MobileUISlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (2).png" alt="" loading="lazy"
        className="absolute bottom-6 right-6 w-20 md:w-32 object-contain pointer-events-none opacity-35 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (9).png" alt="" loading="lazy"
        className="absolute top-6 right-6 w-16 md:w-24 object-contain pointer-events-none opacity-35 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 py-4 gap-4">
        <div className="w-full max-w-6xl flex flex-col gap-4">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="mt-2 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Flow container */}
          <div className="p-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/60 shadow-sm flex flex-col gap-5">

            {/* Row 1: screens 1–6 */}
            <div className="flex items-start justify-center flex-wrap gap-1">
              {ROW1.map((screen, i) => (
                <ScreenCard
                  key={screen.file}
                  screen={screen}
                  delay={`${0.1 + i * 0.07}s`}
                  showArrow={i < ROW1.length - 1}
                />
              ))}
            </div>

            {/* Connector: turn arrow from end of row1 down to row2 */}
            <div
              className="flex justify-center items-center gap-2 animate-[fadeUp_0.5s_ease-out_both]"
              style={fadeUp("0.55s")}
            >
              <div className="flex items-center gap-1 text-secondary/50">
                <div className="w-8 h-0.5 bg-secondary/40" />
                <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
                <span className="text-[9px] font-semibold tracking-widest uppercase text-secondary/50">continues</span>
                <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
                <div className="w-8 h-0.5 bg-secondary/40" />
              </div>
            </div>

            {/* Row 2: screens 7–11 */}
            <div className="flex items-start justify-center flex-wrap gap-1">
              {ROW2.map((screen, i) => (
                <ScreenCard
                  key={screen.file}
                  screen={screen}
                  delay={`${0.62 + i * 0.07}s`}
                  showArrow={i < ROW2.length - 1}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});
