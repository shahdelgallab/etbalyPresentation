import { cn } from "@/lib/utils";
import React from "react";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    intensity?: "low" | "medium" | "high";
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
    ({ className, intensity = "medium", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "backdrop-blur-xl border rounded-xl transition-all duration-300",
                    "bg-card/60 border-border/50 shadow-card", // Base styles
                    "hover:border-primary/50", // Hover effect
                    className
                )}
                {...props}
            />
        );
    }
);

GlassPanel.displayName = "GlassPanel";
