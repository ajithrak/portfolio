export interface CaseStudyData {
  slug: string;
  label: string;
  title: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  overview: string;
  responsibilities: string[];
  techStack: string[];
  highlights: { title: string; detail: string }[];
}

export const FINTECH_DATA: CaseStudyData = {
  slug: "fintech",
  label: "Fintech",
  title: "Enterprise Banking Web Application",
  role: "Senior Software Engineer",
  company: "Photon Interactive Pvt Ltd (Client: JPMorgan Chase & Co)",
  period: "Apr 2025 - Present",
  summary:
    "A scalable, secure banking platform built to handle complex financial workflows and high user traffic.",
  overview:
    "Architected and maintained enterprise-grade banking portals where correctness, security, and speed all carry real financial weight. The application supports high-concurrency workflows while keeping page-load times low through aggressive rendering and caching optimizations.",
  responsibilities: [
    "Architected scalable financial workflows and secure enterprise banking portals leveraging SSR optimizations to drastically lower load speeds.",
    "Implemented streamlined data-fetching paradigms using RTK Query, resulting in predictable application state and heavily cached, low-latency API footprints.",
    "Engineered clean RESTful backend support logic using Node.js for efficient, decoupled full-stack client communication.",
    "Applied code-splitting and lazy loading across major routes to minimize initial bundle size and time-to-interactive.",
  ],
  techStack: ["React.js", "Next.js", "RTK Query", "Redux Toolkit", "Node.js", "REST APIs", "TypeScript"],
  highlights: [
    {
      title: "Performance at scale",
      detail: "SSR and code-splitting techniques cut initial load times significantly under high user traffic.",
    },
    {
      title: "Predictable state",
      detail: "RTK Query centralized data-fetching and caching, reducing redundant network calls across the app.",
    },
    {
      title: "Secure by design",
      detail: "Sensitive financial workflows were built with strict data handling and secure exchange patterns throughout.",
    },
  ],
};

export const HEALTHCARE_DATA: CaseStudyData = {
  slug: "healthcare",
  label: "Healthcare",
  title: "Mental Health Appointment Booking Platform",
  role: "Front-End Developer",
  company: "CareMe Health Pvt Ltd",
  period: "Sep 2020 - Mar 2025",
  summary:
    "A cross-platform appointment booking ecosystem with real-time video and chat for confidential remote care.",
  overview:
    "Led front-end development for a patient-facing appointment platform spanning web and mobile, built to simplify access to mental health care while meeting healthcare regulatory and privacy standards. Real-time video and chat brought remote sessions to feature parity with in-person visits.",
  responsibilities: [
    "Designed and launched responsive cross-platform appointment booking interfaces, simplifying customer healthcare access.",
    "Contributed to secure Electronic Health Records (EHR) system integrations while preserving strict healthcare regulatory standards.",
    "Developed interactive features including real-time video modules, contextual chat windows, and instant cross-platform push notifications.",
    "Built shared component logic across React and React Native to keep the web and mobile experiences consistent.",
  ],
  techStack: ["React", "React Native", "Next.js", "Redux", "TailwindCSS", "Firebase"],
  highlights: [
    {
      title: "Confidential by default",
      detail: "Real-time video and chat were built with privacy and regulatory compliance as first-class constraints.",
    },
    {
      title: "One codebase, two platforms",
      detail: "Shared logic between React and React Native kept web and mobile experiences consistent and easy to maintain.",
    },
    {
      title: "Frictionless booking",
      detail: "Streamlined appointment flows reduced the steps needed to book a session, improving patient access.",
    },
  ],
};
