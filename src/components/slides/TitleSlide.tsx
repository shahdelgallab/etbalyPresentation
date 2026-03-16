import { Slide } from "@/data/slides";
import { memo } from "react";
import { motion } from "framer-motion";
import { SlideLayout } from "@/components/ui/SlideLayout";
import { ArrowRight } from "lucide-react";

// --- Types ---
interface TitleSlideProps {
  slide: Slide;
}

// --- Sub-Component: Background Elements ---


// --- Sub-Component: Left Text Column ---
const HeroContent = ({ slide }: { slide: Slide }) => (
  <motion.div className="lg:col-span-6 flex flex-col justify-center relative z-20 pt-10 lg:pt-0">

    {/* Title */}
    <div className="relative mb-6">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="text-[5.5rem] sm:text-[7rem] xl:text-[9rem] font-bold text-primary leading-[0.9] tracking-tight"
      >
        Etbaly
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
        className="h-2 w-32 bg-secondary mt-4 origin-left rounded-full"
      />
    </div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light tracking-wide max-w-xl leading-snug"
    >
      From <span className="font-semibold text-primary decoration-secondary/30 decoration-4 underline-offset-4 underline">digital ideas</span> to <span className="font-semibold text-primary decoration-secondary/30 decoration-4 underline-offset-4 underline">physical products</span>.
    </motion.p>

    {/* Team Section */}
    {slide.teamInfo && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-16 flex items-center gap-6"
      >
        <div className="flex -space-x-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs font-bold text-gray-400">
              <span className="sr-only">User</span>
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary/10 flex items-center justify-center text-xs font-bold text-secondary backdrop-blur-sm">
            +
          </div>
        </div>

        <div className="h-10 w-[1px] bg-primary/10" />

        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Created By</span>
          <span className="text-lg font-semibold text-primary">{slide.teamInfo.team}</span>
        </div>
      </motion.div>
    )}

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="mt-20 flex items-center gap-2 text-primary/40 font-medium text-sm"
    >
      <span>Scroll to explore</span>
      <ArrowRight className="w-4 h-4 animate-bounce-x" />
    </motion.div>
  </motion.div>
);

// --- Sub-Component: Right Image Composition ---
const HeroComposition = memo(() => {
  return (
    <div className="lg:col-span-6 relative h-[600px] lg:h-full w-full flex items-center justify-center lg:justify-end perspective-[2000px] z-10 pointer-events-none">
      <div className="relative w-full max-w-[800px] aspect-[4/3] preserve-3d">

        {/* 1. Main Dashboard (Center) */}
        <motion.div
          initial={{ opacity: 0, rotateY: 30, rotateX: 10, scale: 0.9 }}
          animate={{ opacity: 1, rotateY: -12, rotateX: 5, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-[35%] right-[20%] w-[40%] z-30"
        >
          <div className="relative group animate-float">
            <img
              src="/figs/Pasted image (2).png"
              alt="Dashboard Interface"
              className="w-full h-auto object-contain rounded-xl"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
        </motion.div>

        {/* 2. Shoe Product (Floating Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-[15%] left-[15%] w-[30%] z-40"
        >
          <img
            src="/figs/Pasted image.png"
            alt="Shoe"
            className="w-full h-auto object-contain scale-x-[-1] animate-float"
            style={{ animationDelay: "1s" }}
          />
        </motion.div>

        {/* 3. Mug Product (Background Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-[60%] -right-[-10%] w-[30%] z-20 opacity-80 blur-[0.5px] grayscale-[20%]"
        >
          <img
            src="/figs/Pasted image (3).png"
            alt="Mug"
            className="w-full h-auto object-contain animate-float"
            style={{ animationDelay: "2s" }}
          />
        </motion.div>

        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/20 blur-[100px] -z-10 rounded-full mix-blend-overlay pointer-events-none" />

      </div>
    </div>
  );
});

// --- Main Component ---
export const TitleSlide = memo(({ slide }: TitleSlideProps) => {
  return (
    <SlideLayout centerContent className="overflow-hidden font-display selection:bg-secondary/30">


      <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col justify-center px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
          <HeroContent slide={slide} />
          <HeroComposition />
        </div>
      </div>

    </SlideLayout>
  );
});