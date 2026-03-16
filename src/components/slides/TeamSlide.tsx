import { Slide } from "@/data/slides";
import { memo } from "react";
import { Server, Brain, Monitor, Smartphone } from "lucide-react";

interface TeamSlideProps {
  slide: Slide;
}

const MEMBERS = [
  {
    name: "Youssef Yasser",
    role: "Backend & DevOps Engineer",
    Icon: Server,
    color: "text-secondary",
    iconBg: "bg-secondary/10",
    initials: "YY",
    avatarBg: "bg-secondary/20 text-secondary",
    desc: "Architecting the scalable cloud infrastructure, managing server operations, and integrating the automated slicing & pricing pipeline.",
  },
  {
    name: "Basmala Hisham",
    role: "AI Engineer",
    Icon: Brain,
    color: "text-violet-500",
    iconBg: "bg-violet-100",
    initials: "BH",
    avatarBg: "bg-violet-100 text-violet-500",
    desc: "Developing the Generative AI models (Text/Image-to-3D) and building the automated mesh-healing Python scripts for quality control.",
  },
  {
    name: "Shahd Alaa",
    role: "Frontend Web Developer",
    Icon: Monitor,
    color: "text-rose-500",
    iconBg: "bg-rose-100",
    initials: "SA",
    avatarBg: "bg-rose-100 text-rose-500",
    desc: "Building the responsive, user-friendly web platform and the interactive 3D model preview interfaces.",
  },
  {
    name: "Basmala Emad & Nada Azmy",
    role: "Mobile App Developers (Flutter)",
    Icon: Smartphone,
    color: "text-amber-500",
    iconBg: "bg-amber-100",
    initials: "BE",
    avatarBg: "bg-amber-100 text-amber-500",
    desc: "Crafting a seamless, cross-platform mobile ecosystem (iOS & Android) to ensure ordering custom 3D prints is accessible from users' phones.",
  },
];

const fadeUp = (delay: string) =>
  ({ animationDelay: delay, animationFillMode: "both" } as React.CSSProperties);

export const TeamSlide = memo(({ slide }: TeamSlideProps) => {
  return (
    <div className="fixed inset-0 font-display overflow-hidden">

      {/* Decorative */}
      <img src="/figs/Pasted image (5).png" alt="" loading="lazy"
        className="absolute top-16 left-16 w-16 md:w-24 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_0.8s_both]" />
      <img src="/figs/Pasted image (2).png" alt="" loading="lazy"
        className="absolute bottom-20 right-20 w-36 md:w-52 object-contain pointer-events-none opacity-60 z-0 animate-[fadeIn_0.6s_ease-out_1s_both]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16">
        <div className="w-full max-w-4xl flex flex-col gap-5">

          {/* Header */}
          <div className="animate-[fadeUp_0.5s_ease-out_both]" style={fadeUp("0s")}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">{slide.title}</h1>
            <div className="mt-3 h-1 w-14 rounded-full bg-secondary" />
          </div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {MEMBERS.map(({ name, role, Icon, color, iconBg, initials, avatarBg, desc }, i) => (
              <div
                key={name}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm animate-[fadeUp_0.5s_ease-out_both]"
                style={fadeUp(`${0.1 + i * 0.1}s`)}
              >
                {/* Avatar */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${avatarBg}`}>
                  {initials}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span className="text-sm font-bold text-primary">{name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Icon className={`w-3.5 h-3.5 ${color} flex-shrink-0`} strokeWidth={2} />
                    <span className={`text-xs font-semibold ${color}`}>{role}</span>
                  </div>
                  <p className="text-xs md:text-sm text-primary/70 font-medium leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why us */}
          <div
            className="px-5 py-4 rounded-2xl bg-secondary/5 border border-secondary/20 animate-[fadeUp_0.5s_ease-out_both]"
            style={fadeUp("0.5s")}
          >
            <p className="text-sm md:text-base text-primary/80 font-medium leading-relaxed">
              <span className="font-bold text-secondary">Why us?</span> As CS senior students, we possess the exact end-to-end technical stack — from complex AI algorithms to mobile UIs — required to build the Etb3haly ecosystem.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
});
