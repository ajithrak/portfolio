export interface Project {
  title: string;
  description: string;
  techStack: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const HERO_DATA = {
  name: "Ajithkumar",
  role: "Senior Software Engineer / Front-End Developer",
  tagline: "Building secure, high-performance, and scalable enterprise web applications.",
};

export const ABOUT_DATA = {
  bio: "Senior Software Engineer with 8+ years of professional experience in software development, including 5+ years of dedicated specialization in React and modern frontend ecosystems. Proven track record architecting high-performance, secure, and user-centric financial and healthcare applications. Expert in robust state management, server-side rendering architecture, and seamless API integrations.",
  highlights: [
    "8+ years of overall software industry experience",
    "5+ years of core enterprise experience with React & Next.js",
    "Strong background in financial (JPMorgan Chase) and healthcare technology solutions",
  ],
};

export const SOCIAL_LINKS = {
  linkedIn: "https://www.linkedin.com/in/ajith-kumar-6080b8152/",
  gitHub: "https://github.com/ajithrak"
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend Core",
    skills: ["React.js", "Next.js", "React Native", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "State & Data Management",
    skills: ["Redux", "Redux Toolkit (RTK)", "RTK Query", "REST API Integration"],
  },
  {
    category: "Styling & UI Systems",
    skills: ["TailwindCSS", "Bootstrap", "Responsive Design", "UI/UX Optimization"],
  },
  {
    category: "Backend & Cloud Services",
    skills: ["Node.js", "Firebase"],
  },
  {
    category: "Architecture & Optimization",
    skills: ["Performance Optimization", "Cross-browser Compatibility", "SSR (Server-Side Rendering)", "Secure Data Exchange"],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Enterprise Banking Web Application",
    description: "Developed a scalable and secure banking application handling complex financial workflows and high user traffic. Implemented code-splitting, lazy loading, and SSR techniques to dramatically optimize initial page load times.",
    techStack: ["React.js", "Next.js", "RTK Query", "Node.js", "REST APIs"]
  },
  {
    title: "Mental Health Appointment Booking Platform",
    description: "Spearheaded a state-of-the-art appointment booking ecosystem for web and mobile. Integrated secure, real-time video conferencing and chat functionalities to support confidential remote health sessions.",
    techStack: ["React", "React Native", "Next.js", "Redux", "TailwindCSS", "Firebase"]
  },
  {
    title: "High-Performance API & State Management System",
    description: "Architected a centralized data-fetching and caching layer. Integrated query invalidation strategies and global error handling filters that minimized network payload overhead and kept application state consistent.",
    techStack: ["RTK Query", "Redux Toolkit", "React.js"]
  },
  {
    title: "Dynamic Form Builder Application",
    description: "Created an intuitive, drag-and-drop form builder template mapping customized input layouts natively to backend schema engines with real-time live preview generation.",
    techStack: ["Next.js", "Redux", "TailwindCSS"]
  },
  {
    title: "TNFoodsafety Complaint Redressal System",
    description: "Led development for a dual-facing public reporting application and official administrative dashboard, maintaining strict compliance with government data integrity and protection standards.",
    techStack: ["React", "React Native", "Redux", "Bootstrap", "Firebase"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Photon Interactive Pvt Ltd (Client: JPMorgan Chase & Co)",
    period: "Apr 2025 - Present",
    achievements: [
      "Architecting scalable financial workflows and secure enterprise banking portals leveraging SSR optimizations to drastically lower load speeds.",
      "Implemented streamlined data-fetching paradigms using RTK Query, resulting in a predictable application state and heavily cached, low-latency API footprints.",
      "Engineered clean RESTful backend support logic using Node.js to achieve efficient decoupled full-stack client communication pathways."
    ],
  },
  {
    role: "Front-End Developer",
    company: "CareMe Health Pvt Ltd",
    period: "Sep 2020 - Mar 2025",
    achievements: [
      "Designed and launched responsive cross-platform appointment booking interfaces, simplifying customer healthcare access networks.",
      "Contributed to secure Electronic Health Records (EHR) system integrations while preserving strict healthcare regulatory standards.",
      "Developed interactive features including real-time video modules, contextual chat windows, and instant cross-platform push notifications."
    ],
  },
  {
    role: "Technical Support Trainee",
    company: "Satvat Infosol Pvt Ltd",
    period: "Jul 2018 - May 2020",
    achievements: [
      "Supported web infrastructure for high-concurrency online examination platforms, ensuring consistent hardware/software reliability thresholds.",
      "Mentored junior desk engineers on complex network diagnostics, directly optimizing support-ticket response workflows."
    ],
  }
];