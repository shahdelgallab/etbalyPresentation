import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { slides, Slide } from "@/data/slides";
import { motion, AnimatePresence } from "framer-motion";
import { SlideControls } from "@/components/SlideControls";
import { GlobalBackground } from "@/components/ui/GlobalBackground";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { ProblemSlide } from "@/components/slides/ProblemSlide";
import { CustomersSlide } from "@/components/slides/CustomersSlide";
import { SolutionSlide } from "@/components/slides/SolutionSlide";
import { ArchitectureSlide } from "@/components/slides/ArchitectureSlide";
import { KeyFeaturesSlide } from "@/components/slides/KeyFeaturesSlide";
import { DiagramSlide } from "@/components/slides/DiagramSlide";
import { TechStackSlide } from "@/components/slides/TechStackSlide";
import { MobileUISlide } from "@/components/slides/MobileUISlide";
import { WebUISlide } from "@/components/slides/WebUISlide";
import { ConclusionSlide } from "@/components/slides/ConclusionSlide";
import { FutureWorkSlide } from "@/components/slides/FutureWorkSlide";
import { QnASlide } from "@/components/slides/QnASlide";

const slideComponents: Record<Slide['type'], React.ComponentType<{ slide: Slide }>> = {
  title: TitleSlide,
  problem: ProblemSlide,
  customers: CustomersSlide,
  solution: SolutionSlide,
  architecture: ArchitectureSlide,
  keyfeatures: KeyFeaturesSlide,
  diagram: DiagramSlide,
  techstack: TechStackSlide,
  mobileui: MobileUISlide,
  webui: WebUISlide,
  conclusion: ConclusionSlide,
  futurework: FutureWorkSlide,
  qna: QnASlide,
};

const slideVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Index = () => {
  const {
    currentSlide,
    direction,
    goToNext,
    goToPrevious
  } = useSlideNavigation(slides.length);

  const currentSlideData = slides[currentSlide];
  const SlideComponent = slideComponents[currentSlideData.type];

  return (
    <div className="slide-container">
      <GlobalBackground />
      {/* Mesh pattern overlay */}
      <div className="mesh-pattern" />

      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.2,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <SlideComponent slide={currentSlideData} />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <SlideControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </div>
  );
};

export default Index;
