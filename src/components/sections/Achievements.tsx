"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ACHIEVEMENTS_DATA, CODING_PROFILES } from "@/lib/data";
import { Trophy, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";

export const Achievements = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Achievements Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Trophy size={24} />
                            </div>
                            <h2 className="text-3xl font-bold">Achievements</h2>
                        </div>

                        <div className="space-y-6">
                            {ACHIEVEMENTS_DATA.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="group relative flex gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300">
                                        <div className="w-1.5 rounded-full bg-gradient-to-b from-primary to-transparent" />
                                        <div>
                                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Coding Profiles Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-lg bg-accent/10 text-accent-foreground">
                                <Code2 size={24} />
                            </div>
                            <h2 className="text-3xl font-bold">Coding Profiles</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {CODING_PROFILES.map((profile, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link href={profile.url} target="_blank" className="block h-full">
                                        <Card className="h-full flex items-center justify-between p-4 hover:bg-primary/5 hover:border-primary border-dashed transition-all cursor-pointer">
                                            <span className="font-semibold text-foreground/80">{profile.platform}</span>
                                            <ExternalLink size={16} className="text-muted-foreground" />
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};
