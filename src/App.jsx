import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ExternalLink, 
  Code, 
  Terminal, 
  Cpu, 
  Database,
  Globe,
  ChevronDown,
  Server,
  Layers,
  Monitor,
  Menu,
  X,
  Award
} from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter text-blue-400 font-mono z-50">
          &lt;AlexTefft&gt;
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === link.id ? 'text-blue-400' : 'text-slate-300'}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white transition-colors z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        <div className={`fixed inset-0 bg-slate-900/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                scrollToSection(link.id);
                setIsMenuOpen(false);
              }}
              className="text-xl font-medium text-slate-300 hover:text-blue-400"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-slate-900">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
          Seeking Spring 2026 (and beyond) Co-ops/Internships
        </div>
        <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Alex Tefft
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm a Computer Science student at Rochester Institute of Technology specializing in systems programming and full-stack development. I specialize in building robust software solutions, from low-level MIPS assembly to Rust-based servers.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2"
          >
            View Projects <ChevronDown size={18} />
          </button>
          <a 
            href="/Tefft_Alex_Resume_2026.pdf" 
            download
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg border border-slate-700 transition-all flex items-center gap-2"
          >
            <FileText size={18} /> Download Resume
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-6 text-slate-400">
          <a href="https://github.com/emt7553" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
          <a href="https://linkedin.com/in/alex-tefft-9a82b134b" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="mailto:emt7553@rit.edu" className="hover:text-white transition-colors"><Mail size={24} /></a>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon: Icon, title, skills }) => (
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group h-full">
    <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-100 mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="text-xs font-mono text-slate-400 bg-slate-900/50 px-2 py-1 rounded border border-slate-700/50">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ title, description, tags, links, bullets, thumbnail }) => {
  return (
    <div className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 flex flex-col h-full">
      <div className="h-48 bg-slate-700 overflow-hidden relative shrink-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
        
        {thumbnail ? (
          <a href={links.demo || links.github || '#'} target="_blank" rel="noreferrer" className="w-full h-full block">
            <img src={thumbnail} alt={`${title} thumbnail`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </a>
        ) : (
          <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-600">
            <Code size={48} opacity={0.2} />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          {links.demo ? (
            <a href={links.demo} target="_blank" rel="noreferrer" className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors no-underline">
              {title}
            </a>
          ) : (
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{title}</h3>
          )}

          <div className="flex gap-3">
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Code">
                <Github size={20} />
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-4">
          {description}
        </p>

        {bullets && (
          <ul className="list-disc list-inside text-slate-500 text-sm mb-6 space-y-1">
            {bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-blue-300 bg-blue-900/20 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ role, company, duration, description, location, children }) => (
  <div className="relative pl-8 pb-12 border-l border-slate-700 last:pb-0 last:border-l-0">
    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
      <h3 className="text-lg font-bold text-slate-100">{role}</h3>
      <span className="text-sm font-mono text-slate-500">{duration}</span>
    </div>
    <div className="flex justify-between items-center mb-3">
      <div className="text-blue-400 font-medium">{company}</div>
      {location && <div className="text-xs text-slate-500">{location}</div>}
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mb-6">
      {description}
    </p>
    {children}
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Midnight Machinations",
      description: "A complex online multiplayer game featuring strategic mechanical design and balance.",
      bullets: [
        "Partnered with a team to design, develop and maintain a Rust-based server.",
        "Built a TypeScript/React client interface with PostgreSQL database integration.",
        "Led mechanical design and game balance efforts."
      ],
      tags: ["Rust", "TypeScript", "React", "Git"],
      links: { github: "https://github.com/mafia-rust", demo: "https://midnightmachinations.net/" },
      thumbnail: "/midnight-thumb.png"
    },
    {
      title: "MIPS Assembly Game",
      description: "Implementation of the 'British Square Game' fully in MIPS Assembly.",
      bullets: [
        "Strengthened applied knowledge of memory management and registers.",
        "Demonstrated deep understanding of computer architecture principles."
      ],
      tags: ["MIPS Assembly", "Systems Programming"],
      links: { github: "https://github.com/emt7553/MIPS-square-game" },
      thumbnail: "/square-thumb.png"
    },
    {
      title: "PDM Application",
      description: "A database-driven desktop application for sample movie data management.",
      bullets: [
        "Created a responsive frontend using JavaFX.",
        "Integrated SQL for robust data management and storage.",
        "Multiple features for searching and filtering movie data."
      ],
      tags: ["Java", "JavaFX", "SQL", "GUI", "Database Integration"],
      links: { github: "https://github.com/emt7553/PDMApplication" },
      thumbnail: "/pdm-thumb.png"
    },
    {
      title: "Jott Interpreter",
      description: "A Java implementation of an interpreter for the simple Jott programming language.",
      bullets: [
        "Implemented a tokenizer and parser to convert source into an AST.",
        "Performed syntax and semantic error checking with helpful diagnostics.",
        "Executed Jott programs via an interpreter runtime written in Java."
      ],
      tags: ["Java", "Interpreter", "Parser", "Compiler"],
      links: { github: "https://github.com/emt7553/Jott-Interpreter" },
      thumbnail: "/jott-thumb.png"
    },
    {
      title: "3D Graphics Pipeline",
      description: "A C++ OpenGL pipeline that renders a scene to match a reference image.",
      bullets: [
        "Built with GLEW and GLFW to initialize OpenGL and manage windows/input.",
        "Rendered multiple textured shapes, enabled camera and scene transformations.",
        "Implemented vertex and fragment shaders and Phong lighting for realistic shading."
      ],
      tags: ["C++", "OpenGL", "Shaders", "GLEW", "GLFW", "Graphics"],
      links: {},
      thumbnail: "/graphics-thumb.png"
    },
    {
      title: "U-fund (Non-Profit Funding)",
      description: "A semester-long team project simulating the full lifecycle of a non-profit funding platform using Model-View-ViewModel architecture.",
      bullets: [
        "Architected a full-stack solution using the MVVM pattern with Java Spring (backend) and Angular (frontend).",
        "Implemented distinct workflows for 'Helpers' (funding basket/checkout) and 'Managers' (cupboard inventory management).",
        "Engineered a custom file-based persistence layer to maintain state across sessions without a database.",
        "Utilized OpenUP for strategic planning and Scrum for tactical operations throughout the SDLC."
      ],
      tags: ["Java Spring", "Angular", "MVVM", "Scrum/OpenUP", "Full-stack", "Trello"],
      links: {},
      thumbnail: "/ufund-thumb.png"
    }
  ];

  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 selection:bg-blue-500/30">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <div id="about">
          <Hero scrollToSection={scrollToSection} />
        </div>

        <section id="projects" className="py-24 bg-slate-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-slate-700 flex-1"></div>
              <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <Code className="text-blue-400" /> Coding Projects
              </h2>
              <div className="h-px bg-slate-700 flex-1"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a href="https://github.com/emt7553" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                View GitHub Profile <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-100 mb-4">Technical Skills</h2>
              <p className="text-slate-400">A comprehensive toolkit spanning low-level systems to modern web frameworks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkillCard 
                icon={Terminal} 
                title="Languages" 
                skills={["Java", "Python", "C", "C#", "C++", "Rust", "TypeScript", "JavaScript", "HTML/CSS", "MIPS Assembly", "SQL"]} 
              />
              <SkillCard 
                icon={Layers} 
                title="Frameworks & Libraries" 
                skills={["React", "Angular", "React Native", "Java Spring", "JavaFX"]} 
              />
              <SkillCard 
                icon={Server} 
                title="Tools & Environment" 
                skills={["Git", "Docker", "Apache Maven", "PostgreSQL", "Unix/Linux", "Windows", "MacOS"]} 
              />
            </div>
          </div>
        </section>

        <section id="education" className="py-24 bg-slate-900">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
              <Cpu className="text-blue-400" /> Education
            </h2>
            
            <div className="ml-4">
              <TimelineItem 
                role="Bachelor of Computer Science"
                company="Rochester Institute of Technology"
                location="Rochester, NY"
                duration="Aug 2022 - Spring 2027 (Expected)"
                description="Developing strong foundations in data structures, algorithms, and systems programming, with a focus on low-level computing and graphics."
              >
                <div className="space-y-6">
                  
                  {/* Awards / Honors */}
                  <div className="flex items-center gap-2">
                     <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-200 border border-yellow-500/20 shadow-sm">
                        <Award size={12} className="text-yellow-400" /> 2025 Dean's List
                     </span>
                  </div>

                  {/* Core & Systems */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 border-b border-slate-700 pb-2">
                      Core Computer Science
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Analysis of Algorithms", 
                        "Intro to Software Engineering", 
                        "Concepts of Computer Systems", 
                        "Mechanics of Programming", 
                        "Principles of Data Management", 
                        "Concepts of Parallel & Distributed Systems", 
                        "Programming Language Concepts",
                        "Intro to Computer Science Theory",
                        "Historical & Current Computer Science"
                      ].map(course => (
                        <span key={course} className="px-3 py-1 bg-blue-900/20 text-blue-300 text-xs font-medium rounded-full border border-blue-800/30">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* AI & Graphics */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 border-b border-slate-700 pb-2">
                      AI, Graphics & Specialized Tech
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Intro to Artificial Intelligence", 
                        "Intro to Computer Graphics", 
                        "Intro to Computer Vision",
                        "Maps, Mapping & Geospatial Tech",
                        "Ethics in the Digital Era"
                      ].map(course => (
                        <span key={course} className="px-3 py-1 bg-purple-900/20 text-purple-300 text-xs font-medium rounded-full border border-purple-800/30">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                   {/* Mathematics */}
                   <div>
                    <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 border-b border-slate-700 pb-2">
                      Mathematics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Discrete Math for Computing",
                        "Linear Algebra",
                        "Probability and Statistics",
                        "Project-Based Calculus 1 & 2"
                      ].map(course => (
                        <span key={course} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Humanities */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 border-b border-slate-800 pb-2 text-xs">
                      Interdisciplinary Electives
                    </h4>
                    <div className="flex flex-wrap gap-2 opacity-80">
                      {[
                        "Philosophy of Technology",
                        "Science, Technology, and Values",
                        "Philosophy of Vision and Imaging",
                        "Philosophy of Art/Aesthetics",
                        "Language of Medicine",
                        "Foundations of Sociology",
                        "Communication",
                        "Culture and Globalization",
                        "Art History",
                        "Writing Seminar"
                      ].map(course => (
                        <span key={course} className="px-2 py-1 text-slate-500 text-xs border-r border-slate-700 last:border-0 leading-none">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </TimelineItem>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-100 mb-6">Let's Connect</h2>
            <p className="text-slate-400 mb-10 text-lg">
              I'm actively seeking a Spring 2026 co-op where I can apply my skills in building robust, optimized software solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
               <a 
                href="mailto:emt7553@rit.edu" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <Mail size={20} /> emt7553@rit.edu
              </a>
              <a 
                href="tel:724-624-3801"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-lg border border-slate-700 transition-all"
              >
                <Monitor size={20} /> 724-624-3801
              </a>
            </div>

            <div className="mt-20 pt-10 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
              <p>&copy; 2025 Alex Tefft. Built with React & Tailwind.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="https://github.com/emt7553" className="hover:text-blue-400 transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/alex-tefft-9a82b134b" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}