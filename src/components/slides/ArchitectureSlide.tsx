import { Slide } from "@/data/slides";
import { memo } from "react";
import { Monitor, Smartphone, Settings, Cloud, CreditCard, Database, HardDrive, Shield, Cpu, Brain } from "lucide-react";

interface ArchitectureSlideProps {
  slide: Slide;
}

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

// Layer label pill
const LayerLabel = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center">
    <span className="text-[10px] md:text-xs font-bold text-primary/50 tracking-widest uppercase whitespace-nowrap">
      {label}
    </span>
  </div>
);

// A box inside a layer
const Box = ({
  icon: Icon,
  label,
  sub,
  className = "",
}: {
  icon: React.ElementType;
  label: string;
  sub?: string;
  className?: string;
}) => (
  <div
    className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl bg-white/50 border border-white/70 shadow-sm text-center ${className}`}
  >
    <Icon className="w-4 h-4 text-secondary flex-shrink-0" strokeWidth={2} />
    <p className="text-[11px] md:text-xs font-bold text-primary leading-tight">{label}</p>
    {sub && <p className="text-[9px] md:text-[10px] text-primary/50 leading-tight">{sub}</p>}
  </div>
);

export const ArchitectureSlide = memo(({ slide }: ArchitectureSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative blobs */}
      <img src="/figs/Pasted image (7).png" alt="" loading="lazy"
        className="absolute top-8 right-8 w-20 md:w-32 object-contain pointer-events-none opacity-45 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (10).png" alt="" loading="lazy"
        className="absolute bottom-10 left-8 w-24 md:w-36 object-contain pointer-events-none opacity-40 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 py-4">
        <div className="w-full max-w-5xl flex flex-col gap-4">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
              {slide.title}
            </h1>
            <div className="mt-2 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* Architecture diagram */}
          <div
            className="flex gap-3 animate-[fadeUp_0.5s_ease-out_both]"
            style={fadeUp("0.1s")}
          >
            {/* Main layers column */}
            <div className="flex-1 flex flex-col gap-2">

              {/* CLIENT LAYER */}
              <div className="flex items-center gap-3">
                <LayerLabel label="Client Layer" />
                <div className="flex-1 flex gap-2 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/60">
                  <Box icon={Monitor} label="Web Portal" className="flex-1" />
                  <Box icon={Smartphone} label="Mobile App" className="flex-1" />
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-3 pl-[90px] md:pl-[104px]">
                <div className="flex-1 flex justify-center">
                  <div className="w-0.5 h-4 bg-secondary/50" />
                </div>
              </div>

              {/* APPLICATION LAYER */}
              <div className="flex items-center gap-3">
                <LayerLabel label="Application Layer" />
                <div className="flex-1 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/60">
                  <Box icon={Settings} label="API Gateway / Orchestrator" className="w-full" />
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-3 pl-[90px] md:pl-[104px]">
                <div className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-0.5 h-2 bg-secondary/50" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rotate-45 bg-secondary/60" />
                    ))}
                  </div>
                  <p className="text-[9px] text-primary/40 font-medium">Message Queue</p>
                </div>
              </div>

              {/* MICROSERVICES LAYER */}
              <div className="flex items-center gap-3">
                <LayerLabel label="Microservices & Processing" />
                <div className="flex-1 flex gap-2 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/60">
                  <Box icon={Shield} label="Auth Service" className="flex-1" />
                  <Box icon={Cpu} label="3D Processing Engine" sub="Python / Blender" className="flex-1" />
                  <Box icon={Brain} label="AI Generation Model" className="flex-1" />
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-3 pl-[90px] md:pl-[104px]">
                <div className="flex-1 flex justify-center">
                  <div className="w-0.5 h-4 bg-secondary/50" />
                </div>
              </div>

              {/* DATA LAYER */}
              <div className="flex items-center gap-3">
                <LayerLabel label="Data Layer" />
                <div className="flex-1 flex gap-2 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/60">
                  <Box icon={Database} label="Database" sub="Metadata, Users" className="flex-1" />
                  <Box icon={HardDrive} label="Object Storage" sub="STL / OBJ Files" className="flex-1" />
                </div>
              </div>

            </div>

            {/* EXTERNAL INTEGRATIONS column */}
            <div
              className="flex flex-col items-center justify-center gap-2 animate-[fadeUp_0.5s_ease-out_both]"
              style={fadeUp("0.35s")}
            >
              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-secondary/10 border border-secondary/30 w-28 md:w-36">
                <p className="text-[10px] font-bold text-secondary tracking-widest uppercase text-center leading-tight">
                  External Integrations
                </p>
                <Cloud className="w-5 h-5 text-secondary" strokeWidth={2} />
                <CreditCard className="w-5 h-5 text-secondary" strokeWidth={2} />
                <p className="text-[9px] md:text-[10px] text-primary/60 text-center leading-snug">
                  Payment Gateway & Manufacturing Partners
                </p>
              </div>
              {/* arrow pointing left toward API gateway */}
              <div className="flex items-center gap-1">
                <div className="w-6 h-0.5 bg-secondary/50" />
                <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-secondary/60" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
});
