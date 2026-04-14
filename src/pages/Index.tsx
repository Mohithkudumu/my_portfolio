import { useState } from "react";
import { Mail, Phone, Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react";

const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Achievements", "Contact"];

const SKILLS = [
  "Python", "TypeScript", "Java", "C/C++", "React", "Flask", "SQL",
  "MongoDB", "PostgreSQL", "PyTorch", "Numpy", "Pandas", "Scikit-Learn",
  "Git", "Vercel", "Data Structures", "OOP", "LSTM", "Cybersecurity",
];

const PROJECTS = [
  {
    title: "Campus Carbon Pulse",
    tag: "AI & IoT",
    desc: "Digital Twin system using FastAPI, React and LSTM to monitor campus carbon flow in real-time. Integrated Gemini API for automated predictive reporting.",
    tech: ["FastAPI", "React", "LSTM", "Gemini API"],
    link: "https://carbon-twin-snuc.vercel.app/",
  },
  {
    title: "ERP System",
    tag: "Full-Stack",
    desc: "0-to-1 ERP solution using ReactJS and MongoDB. Reduced operational friction by 50% through automated CRUD operations.",
    tech: ["React", "MongoDB", "Node.js"],
    link: "https://erp-system-seven-sepia.vercel.app/",
  },
  {
    title: "Virtual Cloth Try-On",
    tag: "Gen AI",
    desc: "Web app letting users virtually try on clothing using Stable Diffusion and Generative AI. Achieved 85% accuracy.",
    tech: ["Stable Diffusion", "Python", "Gen AI"],
  },
];

const ACHIEVEMENTS = [
  { title: "3rd Place - GDG SNUC", desc: "Google Developer Group hackathon", link: "https://drive.google.com/file/d/1Ls4n3RISY7GytWntXMgz-yiQZsokiawE/view?usp=sharing" },
  { title: "Finalist - Hack4Purpose", desc: "Bridging industry & startup solutions" },
  { title: "Top 10 - Smart India Hackathon", desc: "AI-driven disaster management" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
          <span className="font-mono text-primary text-sm">{"<SM />"}</span>
          <div className="hidden md:flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-primary text-sm mb-4">hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          <span className="text-gradient">K. Sai Mohith</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mt-2 mb-6">
          AI & Data Science Engineer
        </p>
        <p className="max-w-lg text-muted-foreground text-sm leading-relaxed mb-8">
          B.Tech student at Shiv Nadar University building ML pipelines, agentic AI apps,
          and full-stack systems. I like making computers do cool stuff.
        </p>
        <div className="flex gap-4 mb-12">
          <a href="mailto:mohithkudumu@gmail.com" className="p-2 border border-border rounded-md hover:border-primary hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
          <a href="tel:+918374251014" className="p-2 border border-border rounded-md hover:border-primary hover:text-primary transition-colors">
            <Phone size={18} />
          </a>
          <a href="#" className="p-2 border border-border rounded-md hover:border-primary hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="p-2 border border-border rounded-md hover:border-primary hover:text-primary transition-colors">
            <Github size={18} />
          </a>
        </div>
        <ChevronDown size={20} className="text-muted-foreground animate-bounce" />
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-mono text-primary text-sm mb-2">{"// about me"}</h2>
        <h3 className="text-2xl font-bold mb-6">About</h3>
        <div className="bg-card border border-border rounded-lg p-6 glow-border">
          <p className="text-muted-foreground leading-relaxed text-sm">
            I'm an aspiring AI & Data Science Engineer with expertise in developing and managing
            agentic AI applications. I have experience building end-to-end ML pipelines and
            real-time telemetry systems. Currently pursuing B.Tech in AI and Data Science at
            Shiv Nadar University (2023-2027). When I'm not coding, I'm probably debugging
            something I broke at 2 AM.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-mono text-primary text-sm mb-2">{"// skills"}</h2>
        <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-mono rounded-md border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-mono text-primary text-sm mb-2">{"// experience"}</h2>
        <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
        <div className="border-l-2 border-border pl-6 relative">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1" />
          <div className="bg-card border border-border rounded-lg p-5 glow-border">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h4 className="font-semibold">Software Engineering Intern</h4>
              <span className="font-mono text-xs text-muted-foreground">Feb 2025 - Apr 2025</span>
            </div>
            <p className="text-primary text-sm mb-3">Edunet Foundations</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Engineered ML pipelines for medical datasets with feature engineering & normalization</li>
              <li>• Optimized modules for faster inference in healthcare environments</li>
              <li>• Validated models using precision-recall, F1-score, ROC-AUC</li>
              <li>• Built maintainable Python codebases using OOP principles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-mono text-primary text-sm mb-2">{"// projects"}</h2>
        <h3 className="text-2xl font-bold mb-6">Things I've Built</h3>
        <div className="grid gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors group glow-border"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-2">
                      {project.title} <ExternalLink size={14} />
                    </a>
                  ) : (
                    project.title
                  )}
                </h4>
                <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                  {project.tag}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-mono text-primary text-sm mb-2">{"// achievements"}</h2>
        <h3 className="text-2xl font-bold mb-6">Achievements</h3>
        <div className="grid gap-3">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
              <span className="text-primary text-lg">🏆</span>
              <div>
                <div className="font-semibold text-sm">
                  {a.link ? (
                    <a href={a.link} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-2 text-primary">
                      {a.title} <ExternalLink size={14} />
                    </a>
                  ) : (
                    a.title
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-mono text-primary text-sm mb-2">{"// contact"}</h2>
        <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
        <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
          I'm currently looking for internship opportunities. Feel free to reach out!
        </p>
        <a
          href="mailto:mohithkudumu@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-mono text-sm"
        >
          <Mail size={16} /> Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          Built with React & Tailwind · K. Sai Mohith © 2025
        </p>
      </footer>
    </div>
  );
};

export default Index;
