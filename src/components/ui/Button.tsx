import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
            secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
            outline: "border border-border bg-transparent hover:bg-muted text-foreground",
            ghost: "hover:bg-muted/50 hover:text-foreground",
        };

        const sizes = {
            sm: "h-10 px-5 text-sm",
            md: "h-14 px-8 text-lg",
            lg: "h-16 px-10 text-xl",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading}
                {...props as any} // Cast because framer-motion props vs HTML props
            >
                {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
