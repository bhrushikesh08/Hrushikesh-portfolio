export interface IdentityData {
  displayName: string;
  shortName: string;
  pageTitle: string;
  roles: string[];
  heroHeading: string;
  heroTagline: string;
  location: string;
  availability: string;
  aboutCopy: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  navCta: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutCta: string;
  prominentRole: string;
}

export interface AboutDetailItem {
  label: string;
  value: string;
  iconName: 'MapPin' | 'Briefcase' | 'Mail' | 'Sparkles' | 'GraduationCap' | 'Building2';
  href?: string;
}

export interface ContactData {
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  phone: string;
  phoneDial: string;
  resumeUrl: string;
  mapUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  isConcept: boolean;
  liveUrl?: string;
  repoUrl?: string;
  description: string;
  stack: string[];
  images: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export type ServiceIconType = 'Palette' | 'Code2' | 'Flame' | 'Smartphone' | 'Sparkles' | 'Rocket';

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  iconName: ServiceIconType;
  highlights: string[];
  tags: string[];
  discussText: string;
}


