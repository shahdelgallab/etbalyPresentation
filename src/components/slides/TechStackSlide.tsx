import { Slide } from "@/data/slides";
import { memo } from "react";

interface TechStackSlideProps {
  slide: Slide;
}

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

interface Tech {
  name: string;
  emoji: string;
  color: string; // tailwind bg class
}

interface Category {
  label: string;
  techs: Tech[];
}

const CATEGORIES: Category[] = [
  {
    label: "Backend",
    techs: [
      { name: "Node.js",  emoji: "🟢", color: "bg-green-100 border-green-300 text-green-800" },
      { name: "Express",  emoji: "⚙️",  color: "bg-gray-100 border-gray-300 text-gray-800" },
      { name: "Python",   emoji: "🐍", color: "bg-blue-100 border-blue-300 text-blue-800" },
      { name: "MongoDB",  emoji: "🍃", color: "bg-emerald-100 border-emerald-300 text-emerald-800" },
    ],
  },
  {
    label: "Frontend & Mobile",
    techs: [
      { name: "React",    emoji: "⚛️",  color: "bg-cyan-100 border-cyan-300 text-cyan-800" },
      { name: "Flutter",  emoji: "💙", color: "bg-sky-100 border-sky-300 text-sky-800" },
    ],
  },
  {
    label: "3D & Processing",
    techs: [
      { name: "Blender",       emoji: "🎨", color: "bg-orange-100 border-orange-300 text-orange-800" },
      { name: "PrusaSlicer",   emoji: "🖨️", color: "bg-rose-100 border-rose-300 text-rose-800" },
    ],
  },
  {
    label: "DevOps & Tooling",
    techs: [
      { name: "Docker",  emoji: "🐳", color: "bg-blue-100 border-blue-300 text-blue-800" },
      { name: "GitHub",  emoji: "🐙", color: "bg-purple-100 border-purple-300 text-purple-800" },
    ],
  },
];

const TechBadge = ({ tech, delay }: { tech: Tech; delay: string }) => (
  <div
    className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${tech.color} font-semibold text-sm shadow-sm animate-[fadeUp_0.5s_ease-out_both] backdrop-blur-sm`}
    style={fadeUp(delay)}
  >
    <span className="text-base leading-none">{tech.emoji}</span>
    <span>{tech.name}</span>
  </div>
);

export const TechStackSlide = memo(({ slide }: TechStackSlideProps) => {
  let badgeDelay = 0.15;

  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (13).png" alt="" loading="lazy"
        className="absolute top-10 left-8 w-28 md:w-44 object-contain pointer-events-none opacity-45 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (3).png" alt="" loading="lazy"
        className="absolute bottom-8 right-10 w-24 md:w-36 object-contain pointer-events-none opacity-40 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 py-6 gap-5">
        <div className="w-full max-w-4xl flex flex-col gap-5">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="mt-2 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm flex flex-col gap-3"
              >
                <p className="text-xs font-bold text-primary/40 tracking-widest uppercase">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => {
                    const d = `${badgeDelay.toFixed(2)}s`;
                    badgeDelay += 0.07;
                    return <TechBadge key={tech.name} tech={tech} delay={d} />;
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
});
