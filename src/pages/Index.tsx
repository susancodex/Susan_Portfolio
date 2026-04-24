import { useEffect, useState } from "react";
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Globe, Star, Trophy, GraduationCap, Menu, X, Sun, Moon, Quote } from "lucide-react";
import financeTrackerImg from "@/assets/finance-tracker-project.jpg";
import taskManagerImg from "@/assets/task-manager-api.png";
import todoListImg from "@/assets/enhanced-todo-list-project.jpg";
import hospitalManagementImg from "@/assets/hospital-management-system.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

// About Section Component with scroll animations
const AboutSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.5 });

  return (
    <>
      <div className={`flex justify-center mb-5 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <span className="eyebrow">About</span>
      </div>
      <h2 
        ref={titleRef as any}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        Crafting reliable software, one commit at a time.
      </h2>
      <div className="section-divider mb-8" />
      <p 
        ref={textRef as any}
        className={`text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 ${
          textVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        Motivated developer with hands-on experience building scalable and user-friendly web applications. Skilled in RESTful API design, modern web technologies, and responsive design. Strong problem solver and collaborative team player with a focus on writing clean and efficient code. Currently pursuing a Bachelor’s degree in BSc. CSIT and seeking opportunities to contribute, learn, and grow as a developer.
      </p>
    </>
  );
};


// Featured Projects Section Component
const FeaturedProjectsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(3, 200);

   const projects = [
     {
       image: financeTrackerImg,
       title: "Finance Tracker",
       description:
         "A full-stack personal finance management web application built with React + Vite (frontend) and Django REST Framework (backend). Track income and expenses, manage categories, set monthly budget limits, and work toward financial goals — all from a clean, mobile-friendly interface.",
       github: "https://github.com/susancodex/Finance_Tracker.git",
       liveDemo: "https://finance-tracker-frontend-zeid.onrender.com",
       tags: ["React", "Vite", "Django REST", "Full-Stack"],
     },
     {
       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=400",
       title: "Hospital Management System",
       description:
         "Comprehensive healthcare management platform featuring patient records, appointment scheduling, doctor management, billing system, and admin dashboard. Built with Django REST Framework backend and React frontend with role-based authentication.",
       github: "https://github.com/susancodex/Hospital_Management_System.git",
       liveDemo: null,
       tags: ["Django", "React", "REST API", "Healthcare"],
     },
     {
       image: taskManagerImg,
       title: "Task Manager API",
       description:
         "A RESTful API built with Django REST Framework for task creation, management, authentication, and status tracking with clean backend architecture.",
       github: "https://github.com/susancodex/task-manager-api.git",
       liveDemo: "https://task-manager-api-x87n.onrender.com",
       tags: ["Django REST", "Python", "API", "Backend"],
     },
     {
       image: todoListImg,
       title: "To Do List",
       description:
         "A simple, user-authenticated To-Do List web application built with Django. Users can register, log in, and manage their personal tasks with a clean and responsive interface.",
       github: "https://github.com/susancodex/todo-list.git",
       liveDemo: null,
       tags: ["Django", "Python", "Authentication", "Web App"],
     },
   ];

  return (
    <>
      <div className={`flex justify-center mb-5 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <span className="eyebrow">Selected Work</span>
      </div>
      <h2
        ref={titleRef as any}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
        }`}
      >
        Featured Projects
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        A selection of full-stack and backend projects that demonstrate clean architecture, REST API design, and production-ready UX.
      </p>

       <div ref={containerRef as any} className="space-y-10 md:space-y-14 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const isReversed = index % 2 === 1;
          return (
            <article
              key={project.title}
              className={`group surface-card overflow-hidden grid grid-cols-1 md:grid-cols-2 ${
                visibleItems[index] ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden h-56 md:h-auto md:min-h-[320px] bg-muted ${isReversed ? "md:order-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 inline-flex items-center justify-center h-7 min-w-7 px-2 rounded-full bg-background/95 backdrop-blur text-[11px] font-mono font-medium text-foreground/80 border border-border">
                  {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                {project.liveDemo && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/95 backdrop-blur text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                    Live
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {project.tags[0]}
                  </span>
                  <span className="h-px flex-1 bg-border"></span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-muted text-foreground/80 border border-border/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border/60">
                  {project.liveDemo ? (
                    <Button
                      size="sm"
                      className="btn-primary !px-5 !py-2 !text-xs"
                      onClick={() => window.open(project.liveDemo!, "_blank")}
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                      View Live Demo
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      variant="secondary"
                      className="!px-5 !py-2 !text-xs rounded-lg cursor-not-allowed opacity-70"
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                      Coming soon
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="!px-5 !py-2 !text-xs rounded-lg border-border hover:border-foreground/40 hover:bg-muted"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-3.5 w-3.5 mr-1.5" />
                    Source Code
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};


// Skills Section Component with category animations
const SkillsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(6, 200);
  const skillDelayClasses = [
    "",
    "[animation-delay:100ms]",
    "[animation-delay:200ms]",
    "[animation-delay:300ms]",
    "[animation-delay:400ms]",
    "[animation-delay:500ms]",
  ];

   const skillCategories = [
     {
       title: "Programming & Frontend",
       skills: [
         { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
         { name: "SQL", icon: "https://img.icons8.com/color/48/sql.png" },
         { name: "Java (Basic)", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
         { name: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
         { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
         { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/tailwind_css.png" },
         { name: "Bootstrap", icon: "https://img.icons8.com/color/48/bootstrap.png" }
       ]
     },
     {
       title: "Backend",
       skills: [
         { name: "Django", icon: "https://img.icons8.com/color/48/django.png" },
         { name: "Django REST Framework", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png" },
         { name: "RESTful APIs", icon: "https://img.icons8.com/ios-filled/48/api-settings.png" }
       ]
     },
     {
       title: "Databases",
       skills: [
         { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
         { name: "SQLite", icon: "https://img.icons8.com/color/48/sqlite.png" },
         { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" }
       ]
     },
     {
       title: "Concepts",
       skills: [
         { name: "Software Requirements Analysis", icon: "📝" },
         { name: "Unit Testing", icon: "✅" },
         { name: "System Design Basics", icon: "🏗️" }
       ]
     },
     {
       title: "Tools",
       skills: [
         { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
         { name: "GitHub", icon: "https://img.icons8.com/ios-glyphs/48/github.png" },
         { name: "Postman", icon: "https://img.icons8.com/dusk/48/postman-api.png" },
         { name: "Docker", icon: "https://img.icons8.com/color/48/docker.png" },
         { name: "VS Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
         { name: "PyCharm", icon: "https://img.icons8.com/color/48/pycharm.png" }
       ]
     },
     {
       title: "Soft Skills",
       skills: [
         { name: "Analytical Thinking", icon: "🧠" },
         { name: "Problem-solving", icon: "🎯" },
         { name: "Teamwork", icon: "🤝" },
         { name: "Communication", icon: "🗣️" },
         { name: "Adaptability", icon: "🔄" }
       ]
     }
   ];

  return (
    <>
      <div className={`flex justify-center mb-5 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <span className="eyebrow">Capabilities</span>
      </div>
      <h2 
        ref={titleRef as any}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        Skills &amp; Technologies
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        The tools, frameworks, and disciplines I rely on to ship dependable products.
      </p>
       <div ref={containerRef as any} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
           <Card 
             key={category.title} 
             className={`surface-card border-border/70 transition-all duration-500 hover:-translate-y-1 ${
               visibleItems[index] 
                 ? 'animate-fade-in-up opacity-100' 
                 : 'opacity-0 translate-y-8'
             }`}
           >
            <CardHeader className="pb-3 border-b border-border/60">
              <CardTitle className="text-sm font-semibold tracking-tight uppercase text-muted-foreground">
                <span className="text-foreground">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/70 transition-colors duration-200 ${
                      visibleItems[index] ? 'animate-fade-in' : 'opacity-0'
                    } ${skillDelayClasses[skillIndex] ?? skillDelayClasses[skillDelayClasses.length - 1]}`}
                  >
                    {skill.icon.startsWith('http') ? (
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-lg">{skill.icon}</span>
                    )}
                    <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

// Education Section Component
const EducationSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, containerVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <div className={`flex justify-center mb-5 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <span className="eyebrow">Academic Background</span>
      </div>
      <h2 
        ref={titleRef as any}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        Education
      </h2>
      <div className="section-divider mb-12" />
      
      <div ref={containerRef as any} className="max-w-4xl mx-auto">
       <Card className={`surface-card transition-all duration-500 ${
           containerVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
         }`}>
          <CardHeader className="border-b border-border/60">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-foreground text-background flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl md:text-2xl font-semibold tracking-tight">
                  BSc. Computer Science and Information Technology
                </CardTitle>
                <CardDescription className="text-sm mt-2 flex flex-wrap items-center gap-2">
                  <span>Bhaktapur Multiple Campus, Tribhuvan University (IOST)</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-medium border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Currently Pursuing
                  </span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                The BSc. CSIT program is a four-year undergraduate degree blending theoretical knowledge and practical skills in computing, software development, and IT. It prepares students for both advanced studies and professional careers in the tech industry.
              </p>
              
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">Core Subjects</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
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
                    "Computer Architecture"
                  ].map((subject, index) => (
                    <div key={subject} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/40 border border-border/60 hover:bg-muted hover:border-foreground/20 transition-colors">
                      <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
                      <span className="text-xs font-medium text-foreground/90">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-border/60 pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Higher Secondary</h4>
              <p className="text-base font-medium text-foreground">+2 Science</p>
              <p className="text-sm text-muted-foreground mt-1">Sudurpaschimanchal Academy</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

// Certificates Section Component
const CertificatesSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(4, 200);

  return (
    <>
      <div className={`flex justify-center mb-5 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <span className="eyebrow">Credentials</span>
      </div>
      <h2
        ref={titleRef as any}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        Certificates
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Continuous learning across Python, data, and software engineering fundamentals.
      </p>
      
       <div ref={containerRef as any} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
         <Card className={`surface-card transition-all duration-500 hover:-translate-y-1 ${
           visibleItems[0] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
         }`}>
          <CardHeader>
            <div className="flex items-center justify-between mb-3">
              <span className="eyebrow !text-[10px]">Udemy</span>
              <span className="font-mono text-xs text-muted-foreground">01</span>
            </div>
            <CardTitle className="text-base font-semibold tracking-tight leading-snug">
              Python For Beginners – Learn All The Basics Of Python
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              This course covers Python essentials like variables, data types, operators, conditional statements, loops, functions, and key data structures such as lists, tuples, dictionaries, and sets.
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              className="w-full justify-between hover:bg-muted text-foreground border border-border"
              onClick={() => window.open("https://www.udemy.com/certificate/UC-fa0f1b21-29d8-4950-b675-abeaf438dbc7/", "_blank")}
            >
              <span className="text-xs font-medium">View Certificate</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>

         <Card className={`surface-card transition-all duration-500 hover:-translate-y-1 ${
           visibleItems[1] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
         }`}>
          <CardHeader>
            <div className="flex items-center justify-between mb-3">
              <span className="eyebrow !text-[10px]">Udemy</span>
              <span className="font-mono text-xs text-muted-foreground">02</span>
            </div>
            <CardTitle className="text-base font-semibold tracking-tight leading-snug">
              Python For Data Science – Real Time Exercises
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Learn Python for Data Science through real-time exercises. Practice with variables, control flow, data structures, NumPy, and basic statistics to analyze and manipulate data efficiently.
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              className="w-full justify-between hover:bg-muted text-foreground border border-border"
              onClick={() => window.open("https://www.udemy.com/certificate/UC-175f7a52-2f5f-486c-a9d4-039f953669ef/", "_blank")}
            >
              <span className="text-xs font-medium">View Certificate</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>

        <Card className={`surface-card transition-all duration-500 hover:-translate-y-1 ${
          visibleItems[2] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
        }`}>
          <CardHeader>
            <div className="flex items-center justify-between mb-3">
              <span className="eyebrow !text-[10px]">Udemy</span>
              <span className="font-mono text-xs text-muted-foreground">03</span>
            </div>
            <CardTitle className="text-base font-semibold tracking-tight leading-snug">
              Python Programming : Python Bootcamp For Beginners
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              An introductory course covering core Python concepts including variables, data types, operators, control flow, functions, and data structures to build a solid foundation in programming.
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              className="w-full justify-between hover:bg-muted text-foreground border border-border"
              onClick={() => window.open("https://www.udemy.com/certificate/UC-0bffe5ad-cd58-40fd-ab5d-a536fd3c6837/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com", "_blank")}
            >
              <span className="text-xs font-medium">View Certificate</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>

        <Card className={`surface-card transition-all duration-500 hover:-translate-y-1 ${
          visibleItems[3] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
        }`}>
          <CardHeader>
            <div className="flex items-center justify-between mb-3">
              <span className="eyebrow !text-[10px]">Code Yantra</span>
              <span className="font-mono text-xs text-muted-foreground">04</span>
            </div>
            <CardTitle className="text-base font-semibold tracking-tight leading-snug flex items-center gap-2">
              <Trophy className="h-4 w-4 text-foreground/60" />
              Hackathon Participation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Participated in a 48-hour hackathon organized by Code Yantra at Himalayan College of Engineering, showcasing problem-solving and teamwork skills under time constraints
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              className="w-full justify-between hover:bg-muted text-foreground border border-border"
              onClick={() => window.open("https://www.linkedin.com/in/susan-acharya1618?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}
            >
              <span className="text-xs font-medium">View on LinkedIn</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

// Languages & Achievements Section Component
const LanguagesAchievementsSection = () => {
  const [containerRef, visibleItems] = useStaggerAnimation(2, 300);

  return (
    <div ref={containerRef as any} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Languages */}
      <Card className={`surface-card transition-all duration-500 ${
        visibleItems[0] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
      }`}>
        <CardHeader className="border-b border-border/60">
          <CardTitle className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Globe className="h-4 w-4 text-foreground" />
            <span className="text-foreground">Languages</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border/40">
              <span className="text-sm font-medium text-foreground">English</span>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-muted text-foreground border border-border font-medium">Fluent</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/40">
              <span className="text-sm font-medium text-foreground">Nepali</span>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-foreground text-background font-medium">Native</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium text-foreground">Hindi</span>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-muted text-muted-foreground border border-border font-medium">Intermediate</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className={`surface-card transition-all duration-500 ${
        visibleItems[1] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
      }`}>
        <CardHeader className="border-b border-border/60">
          <CardTitle className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Trophy className="h-4 w-4 text-foreground" />
            <span className="text-foreground">Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          <div className="space-y-1">
            {[
              "Participated in a 48-hour hackathon organized by CodeYaatra",
              "Successfully built and deployed multiple web applications using Django",
              "Contributed to open-source projects on GitHub",
              "Completed Python and Django certification programs",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-2.5 border-b border-border/40 last:border-0">
                <Star className="h-3.5 w-3.5 text-foreground/70 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-foreground/85 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


// Contact Section Component
const ContactSection = ({ handleContactSubmit }: { handleContactSubmit: (e: React.FormEvent) => void }) => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(2, 300);

  return (
    <>
      <div className={`flex justify-center mb-5 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <span className="eyebrow">Contact</span>
      </div>
      <h2
        ref={titleRef as any}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0 -translate-y-8'
        }`}
      >
        Get in touch
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Have a role, a project, or an idea you want to explore? I’d love to hear from you.
      </p>
      
      <div ref={containerRef as any} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className={`transition-all duration-700 ${
          visibleItems[0] ? 'animate-fade-in-left opacity-100' : 'opacity-0 -translate-x-8'
        }`}>
          <h3 className="text-xl font-semibold tracking-tight mb-3 text-foreground">Let’s Connect</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
          
          <div className="space-y-1">
            {[
              { icon: Mail, label: "Email", value: "susanacharya.sp@gmail.com", href: "mailto:susanacharya.sp@gmail.com" },
              { icon: Phone, label: "Phone", value: "+977 9824562967", href: "tel:+9779824562967" },
              { icon: MapPin, label: "Location", value: "Kathmandu, Nepal", href: null },
            ].map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-muted border border-border group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
                    <div className="text-sm font-medium text-foreground">{value}</div>
                  </div>
                </>
              );
              return href ? (
                <a key={label} href={href} className="flex items-center gap-4 py-3 border-b border-border/60 last:border-0 group">
                  {content}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 py-3 border-b border-border/60 last:border-0 group">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <Card className={`surface-card transition-all duration-500 ${
          visibleItems[1] ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-8'
        }`}>
          <CardHeader className="border-b border-border/60">
            <CardTitle className="text-base font-semibold tracking-tight">Send a message</CardTitle>
            <CardDescription className="text-sm">I’ll get back to you within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Name" required className="h-11 bg-background border-border" />
                <Input type="email" placeholder="Email" required className="h-11 bg-background border-border" />
              </div>
              <Input placeholder="Subject" required className="h-11 bg-background border-border" />
              <Textarea placeholder="Message" rows={5} required className="bg-background border-border resize-none" />
              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  const fullText = "Susan Acharya";
  const navItems = ["about", "projects", "skills", "education", "contact"];

  // Dark mode initialization & toggle
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved ? saved === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    setIsVisible(true);

    // Typewriter effect
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 100);

    return () => clearInterval(typewriterInterval);
  }, []);

  // Active section tracking for nav highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    navItems.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent">
       {/* Global Animated Bubble Background — fixed to viewport, behind every section */}
       {/* Global subtle background — refined, professional, no playful bubbles */}
       <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
         <div className="absolute inset-0 hero-gradient"></div>
         {/* Editorial dot grid */}
         <div
           className="absolute inset-0 opacity-[0.35]"
           style={{
             backgroundImage: 'radial-gradient(hsl(222 47% 11% / 0.08) 1px, transparent 1px)',
             backgroundSize: '28px 28px',
             maskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)',
             WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)',
           }}
         ></div>
         {/* Soft accent orbs */}
         <div className="absolute top-[8%] left-[6%] w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-primary/8 to-transparent blur-3xl"></div>
         <div className="absolute bottom-[12%] right-[6%] w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-[hsl(var(--accent-cyan))]/6 to-transparent blur-3xl"></div>
       </div>

       {/* Navigation */}
       <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
         <div className="container mx-auto px-4 py-3.5">
           <div className="flex justify-between items-center">
             <button onClick={() => scrollToSection('about')} className="flex items-center gap-2.5 group">
               <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-foreground text-background text-sm font-semibold tracking-tight">SA</span>
               <span className="hidden sm:flex flex-col leading-tight text-left">
                 <span className="text-sm font-semibold tracking-tight text-foreground">Susan Acharya</span>
                 <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Full-Stack Developer</span>
               </span>
             </button>

             {/* Desktop Navigation */}
             <div className="hidden md:flex items-center gap-1">
               {navItems.map((item) => {
                 const isActive = activeSection === item;
                 return (
                   <button
                     key={item}
                     onClick={() => scrollToSection(item)}
                     className={`relative px-3 py-2 text-sm capitalize transition-colors duration-300 ${
                       isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                     }`}
                   >
                     {item}
                     <span
                       className={`absolute left-3 right-3 -bottom-0.5 h-px bg-foreground transition-all duration-300 ${
                         isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                       }`}
                     ></span>
                   </button>
                 );
               })}
                <div
                  role="group"
                  aria-label="Theme"
                  className="ml-3 inline-flex items-center gap-0.5 p-0.5 rounded-full bg-muted/70 border border-border/70"
                >
                  <button
                    onClick={() => { if (isDark) toggleTheme(); }}
                    aria-label="Light mode"
                    aria-pressed={!isDark}
                    title="Light mode"
                    className={`flex items-center justify-center h-7 w-7 rounded-full transition-all duration-200 ${
                      !isDark
                        ? "bg-background text-foreground shadow-sm ring-1 ring-border/60"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Sun className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => { if (!isDark) toggleTheme(); }}
                    aria-label="Dark mode"
                    aria-pressed={isDark}
                    title="Dark mode"
                    className={`flex items-center justify-center h-7 w-7 rounded-full transition-all duration-200 ${
                      isDark
                        ? "bg-background text-foreground shadow-sm ring-1 ring-border/60"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Moon className="h-3.5 w-3.5" />
                  </button>
                </div>
                <Button
                  size="sm"
                  className="btn-primary !px-5 !py-2 !text-sm ml-1"
                  onClick={() => scrollToSection('contact')}
                >
                  Get in touch
                </Button>
             </div>

              {/* Mobile actions */}
              <div className="md:hidden flex items-center gap-1">
                <div
                  role="group"
                  aria-label="Theme"
                  className="inline-flex items-center gap-0.5 p-0.5 rounded-full bg-muted/70 border border-border/70"
                >
                  <button
                    onClick={() => { if (isDark) toggleTheme(); }}
                    aria-label="Light mode"
                    aria-pressed={!isDark}
                    className={`flex items-center justify-center h-7 w-7 rounded-full transition-all duration-200 ${
                      !isDark
                        ? "bg-background text-foreground shadow-sm ring-1 ring-border/60"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Sun className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => { if (!isDark) toggleTheme(); }}
                    aria-label="Dark mode"
                    aria-pressed={isDark}
                    className={`flex items-center justify-center h-7 w-7 rounded-full transition-all duration-200 ${
                      isDark
                        ? "bg-background text-foreground shadow-sm ring-1 ring-border/60"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Moon className="h-3.5 w-3.5" />
                  </button>
                </div>
                <button
                  className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
           </div>

           {/* Mobile Navigation */}
           <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
             <div className="flex flex-col gap-1 pb-4">
               {navItems.map((item) => {
                 const isActive = activeSection === item;
                 return (
                   <button
                     key={item}
                     onClick={() => {
                       scrollToSection(item);
                       setMobileMenuOpen(false);
                     }}
                     className={`text-left px-4 py-3 rounded-xl transition-all duration-300 capitalize text-sm ${
                       isActive
                         ? "bg-muted text-foreground font-medium"
                         : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                     }`}
                   >
                     {item}
                   </button>
                 );
               })}
               <Button
                 size="sm"
                 className="btn-primary mt-2"
                 onClick={() => {
                   scrollToSection('contact');
                   setMobileMenuOpen(false);
                 }}
               >
                 Get in touch
               </Button>
             </div>
           </div>
         </div>
       </nav>

       {/* Hero Section */}
       <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
         <div className="container mx-auto px-4 pt-20 relative z-10 flex flex-col items-center">

           {/* Profile Image */}
           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
             <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8">
               <div className="absolute -inset-3 rounded-full bg-foreground/[0.04] blur-xl"></div>
               <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-border bg-background shadow-[var(--shadow-md)]">
                 <img 
                   src="/lovable-uploads/5058cdc6-c2f4-4cb1-b8cc-303bca9df609.png"
                   alt="Susan Acharya" 
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
           </div>
           
           {/* Status badge */}
           <div className={`mb-5 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground bg-background/80 backdrop-blur border border-border">
               <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
               Available · {new Date().getFullYear()}
             </span>
           </div>
           <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             Susan Acharya
           </h1>
           
           {/* Title */}
           <h2 className={`text-base md:text-lg font-normal text-muted-foreground mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             Full-Stack Developer · <span className="text-foreground font-medium">Django</span> &amp; <span className="text-foreground font-medium">React</span>
           </h2>

           {/* Credibility row */}
           <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8 text-xs text-muted-foreground transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Kathmandu, Nepal</span>
             <span className="hidden sm:inline h-3 w-px bg-border"></span>
             <span>BSc. CSIT · Tribhuvan University</span>
             <span className="hidden sm:inline h-3 w-px bg-border"></span>
             <span>Open to remote &amp; on-site roles</span>
           </div>


           {/* Description */}
           <div className={`max-w-2xl mx-auto text-center mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
               I design and build production-grade web applications with Django, Django REST Framework, and React — focusing on clean architecture, reliable APIs, and thoughtful user experience.
             </p>
           </div>

           {/* Currently building */}
           <div className={`mb-8 transition-all duration-1000 delay-[650ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs text-muted-foreground bg-muted/60 border border-border/70">
               <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70">Now</span>
               <span className="h-3 w-px bg-border"></span>
               <span>Building a Hospital Management System with Django REST &amp; React</span>
             </div>
           </div>

           {/* CTA Buttons */}
           <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <Button 
               onClick={() => scrollToSection('projects')}
               size="lg" 
               className="btn-primary"
             >
               View My Work
             </Button>
             <Button 
               variant="outline"
               size="lg" 
               onClick={() => window.open('https://drive.google.com/file/d/1qv1Ax8rl2FfuTZMncyP7CHbPUFV688YU/view?usp=sharing', '_blank')}
               className="rounded-xl border-border hover:border-foreground/40 hover:bg-muted transition-all duration-300"
             >
               <Download className="mr-2 h-4 w-4" />
               Download CV
             </Button>
           </div>

           {/* Social Links */}
           <div className={`flex justify-center gap-4 mb-10 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <a 
               href="https://github.com/susancodex" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
               title="GitHub"
             >
               <Github className="h-5 w-5" />
             </a>
             <a 
               href="https://www.linkedin.com/in/susan-acharya1618" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
               title="LinkedIn"
             >
               <Linkedin className="h-5 w-5" />
             </a>
             <a 
               href="mailto:susanacharya.sp@gmail.com"
               className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
               title="Email"
             >
               <Mail className="h-5 w-5" />
             </a>
           </div>

           {/* Scroll Indicator */}
           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
             <button 
               onClick={() => scrollToSection('about')} 
               className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
             >
               <ChevronDown className="h-6 w-6 text-muted-foreground" />
             </button>
           </div>
         </div>
       </section>

      {/* Metrics Strip */}
      <section className="relative z-10 -mt-8 mb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 shadow-[var(--shadow-sm)]">
            {[
              { value: "4+", label: "Projects shipped" },
              { value: "3", label: "Live deployments" },
              { value: "4", label: "Certifications" },
              { value: "48h", label: "Hackathon" },
            ].map((stat) => (
              <div key={stat.label} className="bg-background/90 backdrop-blur-sm px-5 py-5 text-center">
                <div className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">{stat.value}</div>
                <div className="mt-1 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="relative z-10 py-14 md:py-16 border-y border-border/40">
        <div className="container mx-auto px-4">
          <p className="text-center text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Tools &amp; technologies I work with
          </p>
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-6">
            {[
              { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
              { name: "Django", icon: "https://img.icons8.com/color/48/django.png" },
              { name: "DRF", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png" },
              { name: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
              { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
              { name: "Tailwind", icon: "https://img.icons8.com/color/48/tailwind_css.png" },
              { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
              { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" },
              { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                title={tech.name}
              >
                <img src={tech.icon} alt={tech.name} className="h-8 w-8 md:h-9 md:w-9 object-contain" />
                <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 bg-background/60 backdrop-blur-sm border-y border-border/40 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AboutSection />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4">
          <FeaturedProjectsSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28 bg-background/60 backdrop-blur-sm border-y border-border/40 relative z-10">
        <div className="container mx-auto px-4">
          <SkillsSection />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4">
          <EducationSection />
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 md:py-28 bg-background/60 backdrop-blur-sm border-y border-border/40 relative z-10">
        <div className="container mx-auto px-4">
          <CertificatesSection />
        </div>
      </section>

      {/* Languages & Achievements */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4">
          <LanguagesAchievementsSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-5">
            <span className="eyebrow">Recommendations</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4">
            What people say
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Kind words from peers, mentors, and collaborators I’ve had the chance to work with.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
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
            ].map((t) => (
              <Card key={t.name} className="surface-card transition-all duration-500 hover:-translate-y-1">
                <CardContent className="pt-6 pb-6 flex flex-col h-full">
                  <Quote className="h-6 w-6 text-foreground/20 mb-4" />
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed mb-6 flex-1">
                    “{t.quote}”
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-foreground text-background text-xs font-semibold tracking-tight">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28 bg-background/60 backdrop-blur-sm border-y border-border/40 relative z-10">
        <div className="container mx-auto px-4">
          <ContactSection handleContactSubmit={handleContactSubmit} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-8 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center h-7 w-7 rounded-md bg-foreground text-background text-[11px] font-semibold tracking-tight">SA</span>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Susan Acharya · Built with React &amp; Tailwind CSS
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://github.com/susancodex" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"><Github className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/susan-acharya1618" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:susanacharya.sp@gmail.com" aria-label="Email" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
