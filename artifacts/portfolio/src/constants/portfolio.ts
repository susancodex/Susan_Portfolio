import brainPilotAiImg from "@/assets/brain-pilot-ai.jpg";
import financeTrackerImg from "@/assets/finance-tracker-project.jpg";
import taskManagerImg from "@/assets/task-manager-api.png";
import smartStudyPlannerImg from "@/assets/smart-study-planner.jpg";

import type {
  Project,
  SkillCategory,
  TechItem,
  Stat,
  Certificate,
  Language,
  Testimonial,
} from "@/types/portfolio";

export const NAV_ITEMS = ["about", "projects", "skills", "education", "contact"] as const;
export type NavItem = (typeof NAV_ITEMS)[number];

export const SOCIAL_LINKS = {
  github: "https://github.com/susancodex",
  linkedin: "https://www.linkedin.com/in/susan-acharya1618",
  email: "susanacharya.sp@gmail.com",
} as const;

export const STATS: Stat[] = [
  { value: "5+", label: "Projects shipped" },
  { value: "4", label: "Live deployments" },
  { value: "4", label: "Certifications" },
  { value: "48h", label: "Hackathon" },
];

export const TECH_STACK: TechItem[] = [
  { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
  { name: "Django", icon: "https://img.icons8.com/color/48/django.png" },
  { name: "DRF", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png" },
  { name: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
  { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
  { name: "Tailwind", icon: "https://img.icons8.com/color/48/tailwind_css.png" },
  { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
  { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" },
  { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
];

export const PROJECTS: Project[] = [
  {
    image: brainPilotAiImg,
    title: "Brain Pilot AI",
    description:
      "A modern full-stack educational platform designed to boost student productivity and learning. Integrates AI-powered tutoring, personalised study planning, intelligent note management, flashcard generation, quiz creation, revision scheduling, and learning analytics into a single application. Built with React, Vite, TypeScript, Django REST Framework, and PostgreSQL — emphasising clean architecture, scalability, responsive design, and secure AI integration.",
    github: "https://github.com/susancodex/BrainPilot-AI.git",
    liveDemo: "https://brain-pilot-ai-frontend-ifvm.vercel.app/",
    tags: ["React", "Vite", "TypeScript", "Django REST", "PostgreSQL", "AI"],
  },
  {
    image: financeTrackerImg,
    title: "Finance Tracker",
    description:
      "A full-stack personal finance management web application built with React + Vite (frontend) and Django REST Framework (backend). Track income and expenses, manage categories, set monthly budget limits, and work toward financial goals — all from a clean, mobile-friendly interface.",
    github: "https://github.com/susancodex/Finance_Tracker.git",
    liveDemo: "https://finance-tracker-frontend-zeid.onrender.com",
    demoVideo: "https://www.youtube.com/embed/zWdMOG_oYuU",
    tags: ["React", "Vite", "Django REST", "Full-Stack"],
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=400",
    title: "Hospital Management System",
    description:
      "Comprehensive healthcare management platform featuring patient records, appointment scheduling, doctor management, billing system, and admin dashboard. Built with Django REST Framework backend and React frontend with role-based authentication.",
    github: "https://github.com/susancodex/Hospital_Management_System.git",
    liveDemo: "https://hospital-management-system-frontend-hsbj.onrender.com",
    tags: ["Django", "React", "REST API", "Healthcare"],
  },
  {
    image: taskManagerImg,
    title: "Task Manager API",
    description:
      "A RESTful API built with Django REST Framework for task creation, management, authentication, and status tracking with clean backend architecture.",
    github: "https://github.com/susancodex/task-manager-api.git",
    liveDemo: "https://task-manager-api-sg3y.onrender.com",
    tags: ["Django REST", "Python", "API", "Backend"],
  },
  {
    image: smartStudyPlannerImg,
    title: "Smart Study Planner",
    description:
      "An intelligent study planning API built with Django REST Framework. Features subject management, study session scheduling, progress tracking, and smart recommendations to help students organise their learning efficiently with a well-documented API interface.",
    github: "https://github.com/susancodex/smart_study_planner.git",
    liveDemo: "https://smart-study-planner-zvxj.onrender.com/api/docs/",
    tags: ["Django REST", "Python", "API", "Education"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Frontend",
    skills: [
      { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
      { name: "SQL", icon: "https://img.icons8.com/color/48/sql.png" },
      { name: "Java (Basic)", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
      { name: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
      { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/tailwind_css.png" },
      { name: "Bootstrap", icon: "https://img.icons8.com/color/48/bootstrap.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", icon: "https://img.icons8.com/color/48/django.png" },
      { name: "Django REST Framework", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png" },
      { name: "RESTful APIs", icon: "https://img.icons8.com/ios-filled/48/api-settings.png" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
      { name: "SQLite", icon: "https://img.icons8.com/color/48/sqlite.png" },
      { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "Software Requirements Analysis", icon: "📋" },
      { name: "Unit Testing", icon: "🧪" },
      { name: "System Design Basics", icon: "🧩" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
      { name: "GitHub", icon: "https://img.icons8.com/ios-glyphs/48/github.png" },
      { name: "Postman", icon: "https://img.icons8.com/dusk/48/postman-api.png" },
      { name: "Docker", icon: "https://img.icons8.com/color/48/docker.png" },
      { name: "VS Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
      { name: "PyCharm", icon: "https://img.icons8.com/color/48/pycharm.png" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Analytical Thinking", icon: "🔍" },
      { name: "Problem-solving", icon: "💡" },
      { name: "Teamwork", icon: "👥" },
      { name: "Communication", icon: "💬" },
      { name: "Adaptability", icon: "🦋" },
    ],
  },
];

export const CORE_SUBJECTS = [
  "Data Structures & Algorithms",
  "Web Technologies",
  "Database Management Systems",
  "Operating Systems",
  "Software Engineering",
  "Object-Oriented Programming",
  "Computer Networks",
  "C Programming",
  "Microprocessor",
  "Java",
  ".NET",
  "Computer Architecture",
];

export const CERTIFICATES: Certificate[] = [
  {
    issuer: "Udemy",
    index: "01",
    title: "Python For Beginners – Learn All The Basics Of Python",
    description:
      "Covers Python essentials like variables, data types, operators, conditional statements, loops, functions, and key data structures such as lists, tuples, dictionaries, and sets.",
    linkUrl: "https://www.udemy.com/certificate/UC-fa0f1b21-29d8-4950-b675-abeaf438dbc7/",
    linkLabel: "View Certificate",
  },
  {
    issuer: "Udemy",
    index: "02",
    title: "Python For Data Science – Real Time Exercises",
    description:
      "Learn Python for Data Science through real-time exercises. Practice with variables, control flow, data structures, NumPy, and basic statistics to analyse and manipulate data efficiently.",
    linkUrl: "https://www.udemy.com/certificate/UC-175f7a52-2f5f-486c-a9d4-039f953669ef/",
    linkLabel: "View Certificate",
  },
  {
    issuer: "Udemy",
    index: "03",
    title: "Python Programming: Python Bootcamp For Beginners",
    description:
      "An introductory course covering core Python concepts including variables, data types, operators, control flow, functions, and data structures to build a solid foundation in programming.",
    linkUrl: "https://www.udemy.com/certificate/UC-0bffe5ad-cd58-40fd-ab5d-a536fd3c6837/",
    linkLabel: "View Certificate",
  },
  {
    issuer: "Code Yatra",
    index: "04",
    title: "Hackathon Participation",
    description:
      "Participated in a 48-hour hackathon organised by Code Yantra at Himalayan College of Engineering, showcasing problem-solving and teamwork skills under time constraints.",
    linkUrl: "https://www.linkedin.com/in/susan-acharya1618",
    linkLabel: "View on LinkedIn",
  },
];

export const LANGUAGES: Language[] = [
  { name: "English", level: "Fluent", variant: "fluent" },
  { name: "Nepali", level: "Native", variant: "native" },
  { name: "Hindi", level: "Intermediate", variant: "intermediate" },
];

export const ACHIEVEMENTS = [
  "Participated in a 48-hour hackathon organised by CodeYaatra",
  "Successfully built and deployed multiple web applications using Django",
  "Contributed to open-source projects on GitHub",
  "Completed Python and Django certification programmes",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Susan is a focused and reliable developer. He picks up new concepts quickly and writes clean, well-structured Django code.",
    name: "Mentor",
    role: "Senior Developer",
    initials: "M",
  },
  {
    quote:
      "Great teammate during our 48-hour hackathon. Calm under pressure, takes ownership, and delivers working features end to end.",
    name: "Hackathon Teammate",
    role: "Code Yantra · 2024",
    initials: "HT",
  },
  {
    quote:
      "His REST API designs are thoughtful and consistent. The Task Manager API he built is exactly what a real backend engineer would ship.",
    name: "Peer Reviewer",
    role: "BSc. CSIT, TU",
    initials: "PR",
  },
];
