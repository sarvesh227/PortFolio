"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG, HERO_CONTENT } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
            )}
        >
            <Container className="h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                >
                    {SITE_CONFIG.name}
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={HERO_CONTENT.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                    >
                        Resume
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </Container>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
                    >
                        <Container className="py-8 flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href={HERO_CONTENT.resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 rounded-xl bg-primary text-primary-foreground text-center font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                View Resume
                            </Link>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
