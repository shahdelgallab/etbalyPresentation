import { useState, useCallback, useEffect, useRef } from 'react';

export const useSlideNavigation = (totalSlides: number) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    // Use refs so keyboard handler never needs to be re-registered
    const currentSlideRef = useRef(currentSlide);
    const totalSlidesRef = useRef(totalSlides);
    currentSlideRef.current = currentSlide;
    totalSlidesRef.current = totalSlides;

    const goToNext = useCallback(() => {
        setCurrentSlide(prev => {
            if (prev < totalSlidesRef.current - 1) {
                setDirection(1);
                return prev + 1;
            }
            return prev;
        });
    }, []);

    const goToPrevious = useCallback(() => {
        setCurrentSlide(prev => {
            if (prev > 0) {
                setDirection(-1);
                return prev - 1;
            }
            return prev;
        });
    }, []);

    // Keyboard navigation — registered once, uses stable callbacks
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " ") {
                e.preventDefault();
                goToNext();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                goToPrevious();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToNext, goToPrevious]);

    return {
        currentSlide,
        setCurrentSlide,
        direction,
        goToNext,
        goToPrevious
    };
};
