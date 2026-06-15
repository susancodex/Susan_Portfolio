export interface Project {
  image: string;
  title: string;
  description: string;
  github: string;
  liveDemo: string | null;
  demoVideo?: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Certificate {
  issuer: string;
  index: string;
  title: string;
  description: string;
  linkUrl: string;
  linkLabel: string;
}

export interface Language {
  name: string;
  level: string;
  variant: "native" | "fluent" | "intermediate";
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  href: string | null;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}
