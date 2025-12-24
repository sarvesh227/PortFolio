"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { EXPERIENCE_DATA } from "@/lib/data";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <Container>
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
                        Experience
                    </h2>
                    <p className="text-muted-foreground text-center">
                        My professional journey and contributions.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line for desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border z-0" />

                    <div className="space-y-12">
                        {EXPERIENCE_DATA.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                {/* Dot on timeline */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                                {/* Content */}
                                <div className="w-full md:w-[45%]">
                                    <Card className="p-6 relative group hover:border-primary/40 transition-colors">
                                        <div className="flex items-center gap-2 text-sm text-primary mb-2 font-medium">
                                            <Briefcase size={16} />
                                            <span>{exp.company}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-1">
                                            {exp.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} /> {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} /> {exp.location}
                                            </span>
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-sm text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/50 before:rounded-full">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
