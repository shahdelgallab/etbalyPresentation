import { cn } from "@/lib/utils";
import React from "react";

interface SlideLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    centerContent?: boolean;

}

export const SlideLayout = React.forwardRef<HTMLDivElement, SlideLayoutProps>(
    ({ className, centerContent = false, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "relative flex flex-col w-full h-full min-h-[100dvh]",
                    "px-4 md:px-8 py-8 md:py-12", // Reduced padding
                    "overflow-hidden supports-[height:100cqh]:min-h-[100cqh]",
                    centerContent && "justify-center",
                    className
                )}
                {...props}
            >
                {children}


            </section>
        );
    }
);

SlideLayout.displayName = "SlideLayout";
