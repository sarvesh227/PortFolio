"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SKILLS_DATA } from "@/lib/data";

export const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <Container>
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-muted-foreground text-center max-w-2xl">
                        A comprehensive toolkit I use to build scalable and performant applications.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {SKILLS_DATA.map((category, idx) => (
                        <Card key={idx} className="h-full hover:bg-card/80 transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-md bg-background/50 border border-border text-sm text-foreground hover:border-primary/50 hover:bg-primary/10 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};
