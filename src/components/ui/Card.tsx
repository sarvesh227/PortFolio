import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Card = ({ children, className, delay = 0 }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "bg-card border border-border rounded-xl p-6 shadow-xl overflow-hidden hover:border-primary/50 transition-colors",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
