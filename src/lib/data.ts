import { Github, Linkedin, Mail } from "lucide-react";

export const SITE_CONFIG = {
    name: "Sarveshwaram Goel",
    title: "Full Stack Web Developer | Student",
    description: "Building modern, scalable web applications with Next.js and TypeScript.",
    email: "sarveshgoel43@gmail.com", // Placeholder, usually not exposed directly to scrapers, but ok for resume portfolio
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/sarvesh227", // Provided in user prompt
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/sarvesh-goel-01890928b/", // Placeholder
            icon: Linkedin,
        },
        {
            name: "Email",
            url: "mailto:sarveshgoel43@gmail.com",
            icon: Mail,
        },
    ],
};

export const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
    greeting: "Hi, I'm",
    name: "Sarveshwaram Goel",
    tagline: "Building digital experiences that matter.",
    description:
        "I'm a Full Stack Web Developer and Mathematics & Computing student at BIT Mesra. I specialize in building modern, performant web applications using Next.js, React, and Node.js.",
    resumeLink: "/resume.pdf",
    profileImage: "/profile-pic.jpg",
};

export const SKILLS_DATA = [
    {
        category: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript"],
    },
    {
        category: "Frontend",
        skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
        category: "Database",
        skills: ["MongoDB", "Mongoose"],
    },
    {
        category: "Tools",
        skills: ["Git", "GitHub", "GitLab", "VS Code"],
    },
];

export const EXPERIENCE_DATA = [
    {
        title: "Full Stack Web Developer Intern",
        company: "Art of Living International Centre",
        location: "Bengaluru (On-site)",
        period: "Dec 2025 – Jan 2026",
        description: [
            "Built authentication & authorization platform",
            "Implemented JWT-based auth with role-based access",
            "Used Next.js + TypeScript",
            "Designed protected routes & middleware",
        ],
    },
    {
        title: "Open Source Contributor",
        company: "Open Source",
        location: "Remote",
        period: "Nov 2025 – Present",
        description: [
            "Fixed UI & functionality bugs",
            "Submitted merge requests",
            "Used GitLab & Phabricator",
        ],
    },
];

export const PROJECTS_DATA = [
    {
        title: "AuthApp",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
        description:
            "A robust full-stack authentication system featuring secure login, registration, and JWT-based protected routes implementing a RESTful API architecture.",
        liveLink: "https://auth-app-frontend-tl3r.vercel.app/",
        githubLink: "https://github.com/sarvesh227/AuthApp",
        image: "/auth-app.jpg",
    },
    {
        title: "CineFlix",
        techStack: ["React", "JavaScript", "Axios", "Tailwind CSS"],
        description:
            "A dynamic movie browsing frontend with responsive UI, integrated API error handling, and reusable components for a seamless user experience.",
        liveLink: "https://cine-flix-ab.vercel.app/",
        githubLink: "https://github.com/sarvesh227/CineFlix",
        image: "/cineflix.jpg",
    },
];

export const ACHIEVEMENTS_DATA = [
    {
        title: "JEE Mains 2023",
        description: "Secured 93.67 percentile among 11 lakh candidates.",
    },
    {
        title: "MTTS 2025",
        description: "Selected for MTTS 2025 (Mathematics Training and Talent Search).",
    },
];

export const CODING_PROFILES = [
    { platform: "LeetCode", url: "https://leetcode.com/u/sarveshgoel43/" },
    { platform: "Codeforces", url: "https://codeforces.com/profile/sarv__eesh" },
    { platform: "GitHub", url: "https://github.com/sarvesh227" },
    { platform: "GitLab", url: "https://gitlab.wikimedia.org/sarv227" },
];
