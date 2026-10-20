import { ServiceItem } from '../types';

/**
 * HM TECHNOLOGIES CONTACT URL
 * ----------------------------
 * Replace the placeholder URL below with your official HM Technologies contact or booking link.
 */
export const HM_TECH_CONTACT_URL = "https://hmtechnologies.placeholder.com"; // <-- Replace with your HM Technologies contact URL

export const servicesMeta = {
  eyebrow: "Capabilities & Offerings",
  title: "Services",
  subtitle: "Specialized engineering & design services delivered through HM Technologies for distinct digital products and fast-growing startups.",
  hmTechButtonText: "Contact via HM TECHNOLOGIES",
  ctaText: "Start a Conversation",
  footerText: "Have a custom requirement or startup idea? Let's discuss scope and architecture via HM Technologies.",
  expandPrompt: "Click to explore details",
};

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "UI/UX Design",
    description: "Clean, user-focused interfaces, wireframes and prototypes that look good and are easy to use.",
    iconName: "Palette",
    highlights: [
      "User-centered UI design with modern aesthetics",
      "Interactive wireframes and prototypes",
      "Responsive design systems for all device screens"
    ],
    tags: ["UI/UX Design", "Responsive Design", "Prototyping"],
    discussText: "Contact via HM TECHNOLOGIES"
  },
  {
    number: "02",
    title: "Website Development",
    description: "Fast, responsive websites and landing pages built with modern HTML, CSS, JavaScript and React.",
    iconName: "Code2",
    highlights: [
      "High-speed, responsive websites and conversion landing pages",
      "Clean modern component architecture with React and TypeScript",
      "Fluid micro-animations and smooth scroll interactions"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
    discussText: "Contact via HM TECHNOLOGIES"
  },
  {
    number: "03",
    title: "Web Apps & Firebase",
    description: "Dashboards, authentication, databases and file storage using Firebase.",
    iconName: "Flame",
    highlights: [
      "Secure user authentication flows with Firebase Auth",
      "Real-time Firestore databases and reactive state",
      "Cloud storage, secure rules, and seamless deployment"
    ],
    tags: ["Firebase Auth", "Firestore", "Storage", "Hosting"],
    discussText: "Contact via HM TECHNOLOGIES"
  },
  {
    number: "04",
    title: "Mobile & Cross-Platform Development",
    description: "Mobile & desktop applications with clean, intuitive interfaces.",
    iconName: "Smartphone",
    highlights: [
      "Cross-platform applications for mobile and desktop",
      "Touch-optimized, responsive user experiences",
      "Consistent cross-device navigation and performance"
    ],
    tags: ["React Native", "Modern Web", "Cross-Platform"],
    discussText: "Contact via HM TECHNOLOGIES"
  },
  {
    number: "05",
    title: "AI-Powered Features",
    description: "Adding AI assistants, study/quiz tools and smart recommendations to web apps through AI APIs.",
    iconName: "Sparkles",
    highlights: [
      "Conversational AI assistants and contextual helpers",
      "Automated quiz tools and personalized recommendations",
      "Private server-side AI API integration without client exposure"
    ],
    tags: ["AI API Integration", "Smart Assistants", "Automation"],
    discussText: "Contact via HM TECHNOLOGIES"
  },
  {
    number: "06",
    title: "Startup Promotion & Digital Presence",
    description: "Promoting small startups with high-impact websites, web apps, and digital market platform solutions to grow their business.",
    iconName: "Rocket",
    highlights: [
      "High-impact digital presence tailored for young startups",
      "Modern market platform solutions to reach customers",
      "Scalable web architecture designed for business growth"
    ],
    tags: ["Digital Presence", "Startup Solutions", "Platform Growth"],
    discussText: "Contact via HM TECHNOLOGIES"
  }
];
