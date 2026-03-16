import { memo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";

interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const SlideControls = memo(({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: SlideControlsProps) => {
  return (
    <>
      {/* Navigation arrows */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: currentSlide > 0 ? 1 : 0.3, x: 0 }}
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 p-0 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <GlassPanel className="p-3 rounded-full hover:border-primary/50">
          <ChevronLeft className="w-6 h-6" />
        </GlassPanel>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: currentSlide < totalSlides - 1 ? 1 : 0.3, x: 0 }}
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 p-0 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <GlassPanel className="p-3 rounded-full hover:border-primary/50">
          <ChevronRight className="w-6 h-6" />
        </GlassPanel>
      </motion.button>

      {/* Global Footer Navigation */}
      <div className="fixed bottom-6 sm:bottom-8 left-0 w-full px-6 sm:px-12 md:px-20 lg:px-24 flex items-center justify-between pointer-events-none z-50">
        {/* Progress Bar (Left) */}
        <div className="h-1 flex-1 max-w-[100px] sm:max-w-[200px] bg-secondary/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Counter (Right) */}
        <div className="px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-xs sm:text-sm font-semibold text-primary/80 shadow-sm font-display">
          {currentSlide + 1} <span className="opacity-50 mx-1">/</span> {totalSlides}
        </div>
      </div>
    </>
  );
});
