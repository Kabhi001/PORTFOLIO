export const roles = [
    "Full Stack Developer",
    "React Developer",
    "AI Enthusiast",
    "Problem Solver",
];

export const skills = [
    // Core Languages
    { name: "C++", icon: "cplusplus", category: "language" },
    { name: "JavaScript", icon: "javascript", category: "language" },
    { name: "Python", icon: "python", category: "language" },
    { name: "Java", icon: "java", category: "language" },
    { name: "C", icon: "c", category: "language" },
    { name: "PHP", icon: "php", category: "language" },

    // Web Development
    { name: "React", icon: "react", category: "framework" },
    { name: "Node.js", icon: "nodejs", category: "framework" },
    { name: "HTML5", icon: "html5", category: "framework" },
    { name: "CSS3", icon: "css3", category: "framework" },
    { name: "Bootstrap", icon: "bootstrap", category: "framework" },
    { name: "Tailwind CSS", icon: "tailwindcss", category: "framework" },

    // Database & Tools
    { name: "MongoDB", icon: "mongodb", category: "tool" },
    { name: "Git", icon: "git", category: "tool" },
    { name: "GitHub", icon: "github", category: "tool" },
    { name: "Vercel", icon: "vercel", category: "tool" },
    { name: "XAMPP", icon: "xampp", category: "tool", useSimpleIcon: true, simpleIconName: "siXampp" },
    { name: "VS Code", icon: "vscode", category: "tool" },
];

export const projects = [
    {
        title: "BidMaster – Auction & Bidding Web Application",
        description: "Enabled a real-time auction system with secure user access, item listings, competitive bidding, and live price updates across active sessions. Drove auction workflows through Node.js REST APIs handling bid validation, pricing rules, data persistence, and automated winner selection with MongoDB.",
        iconName: "gavel",
        tech: ["React", "Node.js", "MongoDB", "Vercel"],
        status: "live",
        liveUrl: "https://project1-steel-ten.vercel.app/",
        githubUrl: "https://github.com/Kabhi001/bidmaster",
        image: "/bidmaster-preview.png",
    },
    {
        title: "AI Tutor – Intelligent Learning Assistance Platform",
        description: "Enabled personalized academic support through an adaptive learning system driven by real-time user interactions. Powered instant, context-aware learning assistance via an AI conversational agent that resolves queries and explains concepts on demand.",
        iconName: "brain",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "APIs"],
        status: "live",
        liveUrl: "https://prashant730.github.io/learning-tutor/",
        githubUrl: "https://github.com/Prashant730/learning-tutor",
        image: "/ai-tutor-preview.png",
    },
    {
        title: "Path-Finder – Shortest Route & Navigation System",
        description: "Delivered real-time shortest-path routing with geocoding, live location tracking, and multi-mode navigation (driving, walking, cycling), producing accurate distance and ETA results in sub-second time. Presented navigation intelligence through a clean, responsive map interface.",
        iconName: "map",
        tech: ["HTML", "CSS", "JavaScript", "Leaflet.js", "OpenStreetMap", "OSRM APIs"],
        status: "live",
        liveUrl: "https://path-finder-alpha-liard.vercel.app/",
        githubUrl: "https://github.com/Kabhi001/path-finder",
        image: "/pathfinder-preview.png",
    },
];

export const experiences = [
    {
        company: "Personal Projects",
        role: "Full Stack Developer",
        date: "2024 - Present",
        description: "Building modern web applications using React, Node.js, and MongoDB. Focused on creating scalable, user-friendly solutions with clean code and best practices.",
        tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    },
];

export const certificates = [
    {
        title: "C++ Programming: OOPs And DSA",
        issuer: "CSE Pathshala",
        date: "August 2025",
        link: "https://drive.google.com/file/d/172fbEhjl5Ldj1fCfKGqZvWjmsbuCU5Qo/view",
    },
    {
        title: "Introduction to Generative AI",
        issuer: "Google",
        date: "July 2025",
        link: "https://drive.google.com/file/d/1VUEyhN0BHiJI0fQ6DBQeiQyu9jiZUWDI/view",
    },
    {
        title: "Cloud Computing",
        issuer: "Swayam (NPTEL)",
        date: "April 2025",
        link: "https://drive.google.com/file/d/1BIerMlZaIYxKFFp7A79ovIuOkRGPb2wu/view",
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "October 2023",
        link: "https://drive.google.com/file/d/1orQh1YlSYLvf_ZWnZbtWhCm-8FgdH3EP/view",
    },
];

export const education = [
    {
        institution: "Lovely Professional University",
        degree: "Bachelor of Technology - Computer Science and Engineering",
        location: "Punjab, India",
        date: "August 2023 - Present",
        grade: "CGPA: 7.11",
    },
    {
        institution: "D.A.V Public School",
        degree: "Intermediate",
        location: "Dhanbad, Jharkhand",
        date: "April 2021 - March 2022",
        grade: "Percentage: 85%",
    },
    {
        institution: "Rajkamal Saraswati Vidya Mandir",
        degree: "Matriculation",
        location: "Dhanbad, Jharkhand",
        date: "April 2019 - March 2020",
        grade: "Percentage: 81%",
    },
];
