import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";
import { Container } from "@/components/ui/Container";

export const Footer = () => {
    return (
        <footer className="border-t border-border bg-card/50 py-12 backdrop-blur-lg">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            {SITE_CONFIG.name}
                        </h3>
                        <p className="text-muted-foreground max-w-sm">
                            {SITE_CONFIG.description}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h4>
                        <div className="flex gap-4">
                            {SITE_CONFIG.socials.map(social => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};
