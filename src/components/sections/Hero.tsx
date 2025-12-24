"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Download, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
    FaReact, FaNodeJs, FaGitAlt, FaGithub, FaGitlab, FaJava
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3,
    SiMongodb
} from "react-icons/si";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HERO_CONTENT, SKILLS_DATA } from "@/lib/data";

const skillIcons: Record<string, React.ReactNode> = {
    "React": <FaReact />,
    "Next.js": <SiNextdotjs />,
    "Node.js": <FaNodeJs />,
    "TypeScript": <SiTypescript />,
    "JavaScript": <SiJavascript />,
    "Tailwind CSS": <SiTailwindcss />,
    "MongoDB": <SiMongodb />,
    "Git": <FaGitAlt />,
    "GitHub": <FaGithub />,
    "GitLab": <FaGitlab />,
    "Java": <FaJava />,
    "HTML5": <SiHtml5 />,
    "CSS3": <SiCss3 />,
};

export const Hero = () => {
    // Collect all skills for the marquee
    // removed as unused if unused, but based on code context it is used below in lines not shown

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 animate-pulse" style={{ animationDelay: "2s" }} />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

                {/* Marquee Effect */}
                <div className="absolute inset-0 overflow-hidden opacity-30 flex flex-col justify-end py-10 select-none">
                    {/* Row 2 - Right to Left */}
                    <div className="flex whitespace-nowrap overflow-hidden">
                        <motion.div
                            className="flex gap-8 whitespace-nowrap text-4xl font-bold text-violet-200/50"
                            animate={{ x: [-1000, 0] }}
                            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                        >
                            {[...SKILLS_DATA.flatMap(c => c.skills), ...SKILLS_DATA.flatMap(c => c.skills)].reverse().map((skill, i) => (
                                <span key={i} className="flex items-center gap-2">
                                    {skillIcons[skill] && <span className="text-3xl">{skillIcons[skill]}</span>}
                                    {skill}
                                </span>
                            ))}
                        </motion.div>
                        <motion.div
                            className="flex gap-8 whitespace-nowrap text-4xl font-bold text-violet-200/50"
                            animate={{ x: [-1000, 0] }}
                            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                            aria-hidden
                        >
                            {[...SKILLS_DATA.flatMap(c => c.skills), ...SKILLS_DATA.flatMap(c => c.skills)].reverse().map((skill, i) => (
                                <span key={`dup-${i}`} className="flex items-center gap-2">
                                    {skillIcons[skill] && <span className="text-3xl">{skillIcons[skill]}</span>}
                                    {skill}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-5/12 flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/20 bg-muted/50">
                                {HERO_CONTENT.profileImage && (
                                    <Image
                                        src={HERO_CONTENT.profileImage}
                                        alt={HERO_CONTENT.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative group cursor-default"
                        >
                            <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                                Available for internships
                            </span>

                            {/* Hover Popup */}
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                                className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 bottom-full mb-3 hidden group-hover:flex items-center gap-3 px-3 py-2 bg-secondary/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl whitespace-nowrap z-20"
                            >
                                <span className="text-xs font-semibold text-primary">Hire?</span>
                                <div className="h-4 w-[1px] bg-white/20" />
                                <a
                                    href={HERO_CONTENT.resumeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs hover:text-primary transition-colors"
                                >
                                    <Eye className="w-3 h-3" /> View Resume
                                </a>
                                <div className="h-4 w-[1px] bg-white/20" />
                                <a
                                    href={HERO_CONTENT.resumeLink}
                                    download="Sarvesh_Resume.pdf"
                                    className="flex items-center gap-1 text-xs hover:text-primary transition-colors"
                                >
                                    <Download className="w-3 h-3" />
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                {HERO_CONTENT.greeting} <span className="text-foreground">{HERO_CONTENT.name}</span>
                            </h1>

                            {/* Signature */}
                            <motion.div
                                initial={{ opacity: 0, rotate: -10, scale: 0 }}
                                animate={{ opacity: 1, rotate: -6, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                                className="absolute -bottom-6 right-0 md:-right-4 text-3xl md:text-5xl text-primary font-[var(--font-handwriting)]"
                            >
                                Sarvesh
                            </motion.div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted-foreground font-light pt-2"
                        >
                            {HERO_CONTENT.tagline}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-muted-foreground/80 max-w-xl mx-auto md:mx-0"
                        >
                            {HERO_CONTENT.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 pt-2"
                        >
                            <Button size="lg" asChild>
                                <Link href="#projects" className="flex items-center gap-2">
                                    View Projects <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="#contact" className="flex items-center gap-2">
                                    Contact Me <Mail className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
