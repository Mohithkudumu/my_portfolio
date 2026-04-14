import { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, ExternalLink, MapPin, ArrowUpRight, Sparkles, Code2, Brain, Layers } from "lucide-react";

const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Achievements", "Contact"];

const SKILL_CATEGORIES = [
  {
    icon: <Code2 size={18} />,
    label: "Languages & Frameworks",
    skills: [
      { name: "Python", level: 92 },
      { name: "TypeScript", level: 82 },
      { name: "React", level: 85 },
      { name: "Flask", level: 78 },
      { name: "Java / C++", level: 72 },
    ],
  },
  {
    icon: <Brain size={18} />,
    label: "AI / ML",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "Scikit-Learn", level: 88 },
      { name: "LSTM / RNN", level: 80 },
      { name: "Numpy / Pandas", level: 90 },
      { name: "Stable Diffusion", level: 74 },
    ],
  },
  {
    icon: <Layers size={18} />,
    label: "Data & Cloud",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "SQL", level: 82 },
      { name: "Git / Vercel", level: 88 },
      { name: "Data Structures", level: 85 },
    ],
  },
];

const PROJECTS = [
  {
    title: "Campus Carbon Pulse",
    tag: "AI & IoT",
    tagColor: "from-emerald-500 to-teal-500",
    desc: "Real-time Digital Twin system monitoring campus carbon flow using FastAPI, React, and LSTM networks. Integrated Gemini API for automated predictive sustainability reporting.",
    tech: ["FastAPI", "React", "LSTM", "Gemini API", "IoT"],
    link: "https://carbon-twin-snuc.vercel.app/",
    featured: true,
    emoji: "🌿",
    stat: "Real-time data",
  },
  {
    title: "ERP System",
    tag: "Full-Stack",
    tagColor: "from-violet-500 to-purple-500",
    desc: "0-to-1 ERP solution using ReactJS and MongoDB that reduced operational friction by 50% through intelligent automated CRUD operations and workflow automation.",
    tech: ["React", "MongoDB", "Node.js", "REST API"],
    link: "https://erp-system-seven-sepia.vercel.app/",
    featured: true,
    emoji: "⚡",
    stat: "50% less friction",
  },
  {
    title: "Virtual Cloth Try-On",
    tag: "Gen AI",
    tagColor: "from-pink-500 to-rose-500",
    desc: "Web app letting users virtually try on clothing using Stable Diffusion and Generative AI, achieving 85% accuracy on a complex computer vision task.",
    tech: ["Stable Diffusion", "Python", "Gen AI", "CV"],
    featured: false,
    emoji: "🧥",
    stat: "85% accuracy",
  },
];

const ACHIEVEMENTS = [
  {
    rank: "3rd",
    title: "GDG SNUC Hackathon",
    org: "Google Developer Group",
    link: "https://drive.google.com/file/d/1Ls4n3RISY7GytWntXMgz-yiQZsokiawE/view?usp=sharing",
    color: "from-amber-400 to-orange-500",
    bg: "from-amber-500/10 to-orange-500/5",
  },
  {
    rank: "Top",
    title: "Hack4Purpose Finalist",
    org: "Bridging industry & startup solutions",
    color: "from-violet-400 to-purple-500",
    bg: "from-violet-500/10 to-purple-500/5",
  },
  {
    rank: "T10",
    title: "Smart India Hackathon",
    org: "AI-driven disaster management",
    color: "from-cyan-400 to-blue-500",
    bg: "from-cyan-500/10 to-blue-500/5",
  },
];

const ROLES = ["AI Systems.", "ML Pipelines.", "Full-Stack Apps.", "Agentic AI.", "Digital Twins."];

const AvatarIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: 56, height: 56}}>
    <rect x="8" y="20" width="64" height="44" rx="6" stroke="#C05800" strokeWidth="3" fill="none"/>
    <polyline points="18,46 26,36 34,42 44,30 54,40 62,32" stroke="#FDFBD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="26" cy="36" r="2.5" fill="#C05800"/>
    <circle cx="34" cy="42" r="2.5" fill="#C05800"/>
    <circle cx="44" cy="30" r="2.5" fill="#FDFBD4"/>
    <circle cx="54" cy="40" r="2.5" fill="#C05800"/>
    <circle cx="62" cy="32" r="2.5" fill="#C05800"/>
    <rect x="32" y="8" width="16" height="14" rx="3" fill="#38240D" stroke="#C05800" strokeWidth="2"/>
    <circle cx="40" cy="15" r="3" fill="#C05800"/>
  </svg>
);

// Animated typing hook
function useTypingEffect(words: string[], speed = 90, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// Animated counter
function useCounter(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

function StatCard({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div className="stat-card">
      <span ref={ref} className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimated(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}
// ── Text scramble hook: decodes random chars into final text ──
function useScramble(target: string, delay = 400) {
  const [text, setText] = useState("");
  const CHARS = "!@#$%^*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  useEffect(() => {
    let frame = 0;
    const total = 38;
    const t = setTimeout(() => {
      const run = () => {
        frame++;
        setText(
          target.split("").map((ch, i) =>
            frame / total > i / target.length
              ? ch
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          ).join("")
        );
        if (frame < total) requestAnimationFrame(run);
        else setText(target);
      };
      requestAnimationFrame(run);
    }, delay);
    return () => clearTimeout(t);
  }, [target]);
  return text;
}

// ── Live IST clock ──
function useLiveClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => setT(
      new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: true,
      })
    );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

// ── 3D tilt card ──
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 18;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -18;
    ref.current.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.025,1.025,1.025)`;
    ref.current.style.boxShadow = `${-x * 1.5}px ${y * 1.5}px 40px rgba(192,88,0,0.2)`;
  };
  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)";
    ref.current.style.boxShadow = "";
  };
  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: "transform 0.18s ease, box-shadow 0.18s ease", transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

// ── Magnetic button ──
function MagBtn({ href, className, children, onClick }: { href: string; className?: string; children: React.ReactNode; onClick?: React.MouseEventHandler<HTMLAnchorElement> }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.33;
    const y = (e.clientY - r.top - r.height / 2) * 0.33;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  return (
    <a ref={ref} href={href} className={className} onClick={onClick}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1)", display: "inline-flex", alignItems: "center", gap: 8 }}>
      {children}
    </a>
  );
}

const MARQUEE_ITEMS = [
  "Python", "React", "PyTorch", "FastAPI", "MongoDB", "LSTM", "Gemini API",
  "TypeScript", "Scikit-Learn", "Digital Twins", "Agentic AI", "Gen AI", "Node.js", "Stable Diffusion",
];

// ── Custom cursor with lagging ring ──
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let raf: number;
    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1);
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    const over = (e: MouseEvent) =>
      setHovered(!!(e.target as Element).closest("a, button"));
    window.addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={`c-dot${hovered ? " c-dot-h" : ""}`} />
      <div ref={ringRef} className={`c-ring${hovered ? " c-ring-h" : ""}`} />
    </>
  );
}

// ── Scroll progress ──
function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setP(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return p;
}


const Index = () => {
  const typedRole = useTypingEffect(ROLES);
  const scrambledName = useScramble("Mohith", 600);
  const clock = useLiveClock();
  const scrollProgress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("About");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const px = typeof window !== "undefined" ? (mousePos.x - window.innerWidth / 2) / 60 : 0;
  const py = typeof window !== "undefined" ? (mousePos.y - window.innerHeight / 2) / 60 : 0;


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cursor spotlight effect
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Highlight active nav section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Section reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".section-wrapper");
    els.forEach(el => el.classList.add("will-reveal"));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-root">
      {/* Custom cursor */}
      <CustomCursor />
      {/* Scroll progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      {/* Cursor spotlight */}
      <div
        className="cursor-spotlight"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Animated grid background */}
      <div className="grid-bg" aria-hidden />

      {/* Floating orbs */}
      <div className="orb orb-1" aria-hidden />
      <div className="orb orb-2" aria-hidden />
      <div className="orb orb-3" aria-hidden />

      {/* ─── Navbar ─── */}
      <nav className={`portfolio-nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo">
            <MapPin size={14} className="nav-pin" />
            <span>Chennai, India</span>
            <span className="nav-clock">· {clock} IST</span>
          </div>
          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`nav-btn ${activeSection === item.toLowerCase() ? "nav-btn-active" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>
          <a href="mailto:mohithkudumu@gmail.com" className="nav-cta">
            Let's Talk <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-badge">
            <Sparkles size={12} />
            <span>Available for Opportunities</span>
          </div>
          <h1 className="hero-name" style={{ transform: `translate(${px * -0.6}px, ${py * -0.6}px)` }}>
            <span className="hero-name-gradient">{scrambledName || "Mohith"}</span>
          </h1>
          <div className="hero-role" style={{ transform: `translate(${px * 0.3}px, ${py * 0.3}px)` }}>
            <span className="hero-role-prefix">I build&nbsp;</span>
            <span className="hero-role-typed">{typedRole}<span className="cursor-blink">|</span></span>
          </div>
          <p className="hero-desc" style={{ transform: `translate(${px * 0.15}px, ${py * 0.15}px)` }}>
            B.Tech AI & Data Science @ Shiv Nadar University. I craft ML pipelines,
            agentic AI apps, and full-stack systems. Turning data into experience.
          </p>

          <div className="hero-actions">
            <MagBtn href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("Projects"); }} className="btn-primary">
              View My Work <ArrowUpRight size={16} />
            </MagBtn>
            <div className="hero-socials">
              <a href="mailto:mohithkudumu@gmail.com" aria-label="Email" className="social-btn"><Mail size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn"><Linkedin size={18} /></a>
              <a href="https://github.com/Mohithkudumu" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn"><Github size={18} /></a>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <StatCard value={3} label="Projects Shipped" suffix="+" />
            <StatCard value={85} label="ML Accuracy" suffix="%" />
            <StatCard value={50} label="Ops Reduced" suffix="%" />
            <StatCard value={2} label="Years Coding" suffix="+" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* ─── Marquee Ticker ─── */}
      <div className="marquee-wrapper" aria-hidden>
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="marquee-sep">✶</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── About ─── */}
      <section id="about" className="section-wrapper">
        <div className="section-label">Who I Am</div>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-inner">
              <div className="about-avatar"><AvatarIcon /></div>
              <h3 className="about-name">Sai Mohith</h3>
              <p className="about-degree">B.Tech, AI & Data Science</p>
              <p className="about-uni">Shiv Nadar University · 2023 – 2027</p>
              <div className="about-tags">
                <span className="about-tag">🤖 Agentic AI</span>
                <span className="about-tag">📊 ML Pipelines</span>
                <span className="about-tag">⚡ Full-Stack</span>
              </div>
            </div>
          </div>
          <div className="about-text-block">
            <p>
              I'm an aspiring <strong className="text-primary">AI & Data Science Engineer</strong> with a passion
              for building systems that sit at the intersection of intelligence and user experience. My work spans
              real-time telemetry systems, large-scale ML pipelines, and production-grade full-stack apps.
            </p>
            <p>
              At Shiv Nadar University, I'm constantly pushing what I know, whether it's fine-tuning language models,
              architecting agentic AI applications, or shipping a polished product end-to-end to Vercel.
            </p>
            <p>When I'm not coding, I'm probably debugging something I broke at 2 AM — and calling it a feature.</p>
            <div className="interest-chips">
              <span>Agentic AI</span><span>Digital Twins</span><span>LSTM</span>
              <span>Gen AI</span><span>NLP</span><span>MLOps</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section id="skills" className="section-wrapper">
        <div className="section-label">Expertise</div>
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.label} className="skill-category-card">
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-label">{cat.label}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section id="experience" className="section-wrapper">
        <div className="section-label">Work History</div>
        <h2 className="section-title">Experience</h2>
        <div className="exp-timeline">
          <div className="exp-line" />
          <div className="exp-dot" />
          <div className="exp-card">
            <div className="exp-meta">
              <div>
                <h3 className="exp-role">
                  <a href="https://drive.google.com/file/d/1vTDeGYlptvbwz5XLQMUb6sxXmRcz5nRf/view?usp=sharing"
                    target="_blank" rel="noreferrer" className="exp-link">
                    Software Engineering Intern <ExternalLink size={14} />
                  </a>
                </h3>
                <p className="exp-company">Edunet Foundations</p>
              </div>
              <span className="exp-date">Feb 2025 – Apr 2025</span>
            </div>
            <ul className="exp-bullets">
              <li>Engineered ML pipelines for medical datasets with feature engineering & normalization</li>
              <li>Optimized modules for faster inference in healthcare environments</li>
              <li>Validated models using precision-recall, F1-score, ROC-AUC</li>
              <li>Built maintainable Python codebases using solid OOP principles</li>
            </ul>
            <div className="exp-chips">
              {["Python", "Scikit-Learn", "Pandas", "ML Pipelines", "Healthcare AI"].map((t) => (
                <span key={t} className="exp-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="section-wrapper">
        <div className="section-label">What I've Built</div>
        <h2 className="section-title">Projects</h2>
        <div className="projects-bento">
          {PROJECTS.map((project) => (
            <TiltCard key={project.title} className={`project-card ${project.featured ? "project-featured" : ""}`}>
              <div className="project-card-inner">
                <div className="project-top">
                  <span className="project-emoji">{project.emoji}</span>
                  <span className={`project-tag bg-gradient-to-r ${project.tagColor}`}>{project.tag}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-stat">{project.stat}</div>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-chip">{t}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link-btn">
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
              <div className={`project-glow bg-gradient-to-br ${project.tagColor}`} />
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ─── Achievements ─── */}
      <section id="achievements" className="section-wrapper">
        <div className="section-label">Recognition</div>
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className={`achievement-card bg-gradient-to-br ${a.bg}`}>
              <div className={`achievement-rank bg-gradient-to-br ${a.color}`}>{a.rank}</div>
              <div className="achievement-info">
                {a.link ? (
                  <a href={a.link} target="_blank" rel="noreferrer" className="achievement-title-link">
                    {a.title} <ExternalLink size={12} />
                  </a>
                ) : (
                  <p className="achievement-title">{a.title}</p>
                )}
                <p className="achievement-org">{a.org}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="section-wrapper contact-section">
        <div className="contact-glow" />
        <div className="section-label">Reach Out</div>
        <h2 className="contact-title">Let's Build Something<br /><span className="text-gradient-contact">Together</span></h2>
        <p className="contact-desc">
          I'm actively looking for internship & full-time opportunities. Whether it's a project,
          a role, or just a great conversation — my inbox is open.
        </p>
        <div className="contact-actions">
          <a href="mailto:mohithkudumu@gmail.com" className="contact-btn-primary">
            <Mail size={18} /> Say Hello
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-btn-secondary">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="portfolio-footer">
        <span>Built with React & Tailwind</span>
        <span className="footer-dot">·</span>
        <span>K. Sai Mohith © 2025</span>
      </footer>
    </div>
  );
};

export default Index;
