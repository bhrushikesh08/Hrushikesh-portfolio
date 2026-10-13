import { ProjectItem, InDevelopmentItem } from '../types';

export const marqueeMeta = {
  eyebrow: "Selected Work Previews",
  title: "Featured Creations",
};

export const projectsData: ProjectItem[] = [
  {
    number: "01",
    slug: "eduskills",
    title: "EduSkills AI",
    subtitle: "Smart Study Planner",
    category: "Personal",
    status: "Active / Prototype",
    isConcept: false,
    liveUrl: "https://edu-skills-ai.vercel.app/",
    description: "AI-powered study planner: dashboard, subjects & exams, timetable, progress, quizzes, AI insights, smart notes, reminders and an AI study assistant. Tasks auto-complete when the related quiz is passed.",
    stack: ["HTML", "CSS", "JavaScript", "Firebase", "AI API"],
    images: [
      "/images/projects/eduskills/1.webp",
      "/images/projects/eduskills/2.webp",
      "/images/projects/eduskills/3.webp"
    ]
  },
  {
    number: "02",
    slug: "spice-haven",
    title: "Spice Haven",
    subtitle: "Restaurant Website",
    category: "Concept / Demo",
    status: "Concept Demo",
    isConcept: true,
    liveUrl: "https://bhrushikesh08.github.io/hrushi-Restaurant/",
    repoUrl: "https://github.com/bhrushikesh08/hrushi-Restaurant",
    description: "Responsive restaurant website with filterable menu, cart-to-WhatsApp ordering, table reservation form with validation, offers and gallery. Concept demo to showcase capabilities for business clients.",
    stack: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    images: [
      "/images/projects/spice-haven/1.webp",
      "/images/projects/spice-haven/2.webp",
      "/images/projects/spice-haven/3.webp"
    ]
  },
  {
    number: "03",
    slug: "smart-classroom",
    title: "Smart Classroom",
    subtitle: "Digital Circular System",
    category: "Personal",
    status: "Active",
    isConcept: false,
    liveUrl: "https://bhrushikesh08.github.io/smartclassroom/",
    description: "An online platform for sharing important circulars, announcements and notices with students and staff. It reduces paper usage, saves time by making information easily accessible online, and helps educational institutions communicate updates quickly, efficiently and conveniently.",
    stack: ["HTML", "CSS", "JavaScript"],
    images: [
      "/images/projects/smart-classroom/1.webp",
      "/images/projects/smart-classroom/2.webp",
      "/images/projects/smart-classroom/3.webp"
    ]
  },
  {
    number: "04",
    slug: "smart-college-network",
    title: "Smart College Network",
    subtitle: "Simulation",
    category: "Simulation",
    status: "Completed",
    isConcept: false,
    description: "Simulated college network designed in Cisco Packet Tracer to practice topology design and TCP/IP concepts.",
    stack: ["Cisco Packet Tracer", "TCP/IP", "Network Topology"],
    images: [
      "/images/projects/smart-college-network/1.webp",
      "/images/projects/smart-college-network/2.webp",
      "/images/projects/smart-college-network/3.webp"
    ]
  },
  {
    number: "05",
    slug: "portfolio-v1",
    title: "Personal Developer Portfolio (v1)",
    subtitle: "Portfolio",
    category: "Portfolio",
    status: "Completed",
    isConcept: false,
    liveUrl: "https://bhrushikesh08.github.io/hrushi-portfolio/",
    description: "First iteration personal developer portfolio featuring GSAP animations and responsive design.",
    stack: ["HTML", "CSS", "JavaScript", "GSAP", "GitHub Pages"],
    images: [
      "/images/projects/portfolio-v1/1.webp",
      "/images/projects/portfolio-v1/2.webp",
      "/images/projects/portfolio-v1/3.webp"
    ]
  }
];

export const inDevelopmentData: InDevelopmentItem[] = [
  {
    name: "AI-Powered Career Guidance & Placement Preparation System",
    stack: ["Python Flask", "SQLite/MySQL"]
  },
  {
    name: "Firebase File Transfer Utility",
    stack: ["Firebase Auth", "Storage", "Firestore"]
  }
];
