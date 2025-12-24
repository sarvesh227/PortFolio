"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center space-y-8"
                >
                    <h2 className="text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        About Me
                    </h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-left md:text-center">
                        <p>
                            I am a <span className="text-foreground font-semibold">Mathematics & Computing student</span> at the Birla Institute of Technology, Mesra.
                            My passion lies in bridging the gap between theoretical algorithms and real-world applications through Full Stack Development.
                        </p>
                        <p>
                            Currently maintaining a CGPA of <span className="text-primary font-bold">8.65/10</span>, I balance strong academic foundations with hands-on development experience.
                            I recently completed an internship at the Art of Living International Centre, where I built secure authentication systems for thousands of users using Next.js and TypeScript.
                        </p>
                        <p>
                            When I'm not coding, I'm contributing to open-source projects, solving algorithmic challenges on LeetCode, or exploring the latest in web technologies.
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
