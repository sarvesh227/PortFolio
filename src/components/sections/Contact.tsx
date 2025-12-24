"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center max-w-2xl mx-auto p-8 md:p-12 rounded-3xl bg-card border border-border shadow-2xl relative"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-primary/5 blur-xl rounded-3xl -z-10" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                        <Button size="lg" className="gap-2" onClick={() => window.location.href = `mailto:${SITE_CONFIG.email}`}>
                            <Mail size={18} /> Say Hello
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2" onClick={() => window.open(SITE_CONFIG.socials.find(s => s.name === "LinkedIn")?.url, "_blank")}>
                            <Linkedin size={18} /> LinkedIn
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};
