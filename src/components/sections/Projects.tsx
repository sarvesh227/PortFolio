"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PROJECTS_DATA } from "@/lib/data";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <Container>
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground text-center max-w-2xl">
                        A selection of projects that showcase my technical skills and problem-solving abilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden group">
                                {/* Placeholder for project image - colorful gradient for now */}
                                {/* Project Image */}
                                <div className="h-48 w-full bg-muted relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    {/* @ts-ignore - Data file is JS object, typescript might not pick up new field immediately without interface update */}
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                                            <FolderGit2 size={64} className="text-primary opacity-30" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <Button size="sm" variant="secondary" asChild>
                                            <Link href={project.liveLink} target="_blank">
                                                <ExternalLink size={16} className="mr-2" /> Live Demo
                                            </Link>
                                        </Button>
                                        <Button size="sm" variant="secondary" asChild>
                                            <Link href={project.githubLink} target="_blank">
                                                <Github size={16} className="mr-2" /> Code
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground border border-border"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
