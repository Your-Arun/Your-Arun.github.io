import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  motion,
  useScroll, useSpring, useTransform,
  AnimatePresence, useMotionValue, useMotionTemplate
} from 'framer-motion';
import {
  Github, Linkedin, Mail, MapPin, ArrowUp,
  ExternalLink, Star, Terminal, Sparkles, Briefcase,
  Code2, Layers, Zap, RotateCcw
} from 'lucide-react';

/* ─────────────────────────── DATA ─────────────────────────── */
const skills = [
  { name: "React.js",     category: "frontend", icon: "⚛️" },
  { name: "React Native", category: "mobile",   icon: "📱" },
  { name: "Node.js",      category: "backend",  icon: "🟢" },
  { name: "Express.js",   category: "backend",  icon: "🚂" },
  { name: "MongoDB",      category: "backend",  icon: "🍃" },
  { name: "JavaScript",   category: "frontend", icon: "🟡" },
  { name: "Tailwind CSS", category: "frontend", icon: "🎨" },
  { name: "Socket.io",    category: "backend",  icon: "⚡" },
  { name: "HTML",         category: "frontend", icon: "🧱" },
  { name: "CSS",          category: "frontend", icon: "🎭" },
  { name: "Git",          category: "tools",    icon: "🌿" },
  { name: "Expo",         category: "mobile",   icon: "📦" },
];

const langColors = {
  JavaScript: "#f1e05a", TypeScript: "#3178c6",
  HTML: "#e34c26", CSS: "#563d7c", default: "#6366f1",
};

const TABS = [
  { id: "all", label: "All" }, { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" }, { id: "mobile", label: "Mobile" },
  { id: "tools", label: "Tools" },
];

/* ─────────────────── SCROLL REVEAL ────────────────────────── */
function ScrollReveal({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.2, 1, 1, 0.2]);
  const blurRaw = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [16, 0, 0, 16]);
  const scale   = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.93, 1, 1, 0.93]);
  const filter  = useTransform(blurRaw, v => `blur(${v}px)`);
  return (
    <motion.div ref={ref} style={{ opacity, filter, scale }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─────────────────── 3D TILT CARD ─────────────────────────── */
function TiltCard({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 });
  const glowX   = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY   = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glowBg  = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(99,102,241,0.18) 0%, transparent 60%)`;

  const handleMouse = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  }, [x, y]);

  const reset = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000, ...style }}
      className={className}
    >
      <motion.div
        style={{ background: glowBg }}
        className="absolute inset-0 rounded-2xl pointer-events-none z-10 transition-opacity"
      />
      {children}
    </motion.div>
  );
}

/* ─────────────────── FLIP PROJECT CARD ────────────────────── */
function ProjectCard({ repo }) {
  const [flipped, setFlipped] = useState(false);
  const langColor = langColors[repo.language] || langColors.default;

  const toTitle = (t) =>
    t.replace(/[-_]+/g, " ").trim().split(" ")
     .map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="card-3d-wrapper h-[260px]" onClick={() => setFlipped(f => !f)}>
      <TiltCard className="card-3d w-full h-full cursor-pointer" style={flipped ? { transform: "rotateY(180deg)" } : {}}>

        {/* ── FRONT ── */}
        <div className="card-face glass-card flex flex-col p-6 gap-3 group">
          {/* Top */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-sm font-bold text-text-strong line-clamp-1 group-hover:text-accent transition-colors">
                {toTitle(repo.name)}
              </h3>
            </div>
            <span className="text-[10px] text-muted bg-white/5 px-2 py-0.5 rounded-full flex-shrink-0">flip →</span>
          </div>

          {/* Description */}
          <p className="text-xs text-muted leading-relaxed line-clamp-4 flex-1">
            {repo.description || "No description. Click to see links."}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColor }} />
              {repo.language || "Code"}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted">
              <Star className="w-3 h-3 text-secondary" fill="currentColor" />
              {repo.stargazers_count}
            </span>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="card-back card-face flex flex-col items-center justify-center gap-5 p-6"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(6,182,212,0.08) 100%)",
            border: "1px solid rgba(99,102,241,0.4)",
          }}
        >
          <div className="text-center">
            <p className="text-xs text-muted mb-1">Repository</p>
            <p className="text-sm font-bold text-text-strong">{toTitle(repo.name)}</p>
          </div>
          <div className="flex gap-3 w-full">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold btn-neon text-white"
            >
              <Github className="w-4 h-4" /> View Code
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-bold border border-cyan-accent/40 text-cyan-accent hover:bg-cyan-accent/10 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <p className="text-[10px] text-muted flex items-center gap-1">
            <RotateCcw className="w-3 h-3" /> Click to flip back
          </p>
        </div>
      </TiltCard>
    </div>
  );
}

/* ─────────────────── TWINKLING STARS ──────────────────────── */
function Stars() {
  const stars = useRef(
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      dur: (Math.random() * 4 + 2).toFixed(1),
      delay: (Math.random() * 5).toFixed(1),
    }))
  ).current;
  return (
    <>
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.x}%`, top: `${s.y}%`,
            width: `${s.size}px`, height: `${s.size}px`,
            '--dur': `${s.dur}s`, '--delay': `${s.delay}s`,
          }}
        />
      ))}
    </>
  );
}

/* ─────────────────── SECTION HEADING ──────────────────────── */
function SectionHeading({ label, sub }) {
  return (
    <div className="flex flex-col gap-2">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold text-text-strong flex items-center gap-3"
      >
        <span className="w-1 h-8 bg-gradient-to-b from-accent to-cyan-accent rounded-full" />
        {label}
      </motion.h2>
      {sub && <p className="text-sm text-muted ml-4">{sub}</p>}
    </div>
  );
}

/* ─────────────────── MAIN APP ──────────────────────────────── */
export default function App() {
  const [repos,        setRepos]        = useState([]);
  const [loading,      setLoading]      = useState(true);
  const [error,        setError]        = useState(null);
  const [showTop,      setShowTop]      = useState(false);
  const [activeTab,    setActiveTab]    = useState("all");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.addEventListener('scroll', () => setShowTop(window.scrollY > 500));
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/Your-Arun/repos")
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(d => setRepos(d.filter(r => !r.fork).sort((a,b) => new Date(b.updated_at)-new Date(a.updated_at))))
      .catch(() => setError("Could not load repositories."))
      .finally(() => setLoading(false));
  }, []);

  const filteredSkills = activeTab === "all" ? skills : skills.filter(s => s.category === activeTab);

  const fadeUp = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="relative min-h-screen font-sans antialiased text-muted bg-bg overflow-hidden">

      {/* ── Scroll Progress Bar ── */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{ scaleX, background: "linear-gradient(90deg,#6366f1,#f59e0b,#06b6d4)" }} />

      {/* ── Twinkling Stars ── */}
      <Stars />

      {/* ── Deep glow blobs ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-accent/8 blur-[150px] animate-blob" />
        <div className="absolute top-1/2 -right-60 w-[600px] h-[600px] rounded-full bg-secondary/6 blur-[160px] animate-blob delay-2" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-accent/5 blur-[140px] animate-blob delay-4" />
      </div>

      {/* ────────────── NAV ─────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-40 w-full glass-nav"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl btn-neon flex items-center justify-center font-black text-white text-sm glow-ring transition-all duration-300 group-hover:scale-110">
              AK
            </div>
            <span className="font-bold text-text-strong group-hover:text-accent-hover transition-colors">
              Arun Kumar
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-1">
            {["about","projects","skills","contact"].map(s => (
              <a key={s} href={`#${s}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-muted hover:text-text-strong hover:bg-white/5 capitalize transition-all duration-200">
                {s}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* ────────────── HERO ─────────────── */}
      <section id="home" className="relative min-h-[calc(100vh-64px)] flex items-center py-20 px-6 z-10">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-7">

            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-accent/10 text-accent-hover border border-accent/20 glow-ring">
                <Sparkles className="w-3.5 h-3.5" />
                Available for hire · Portfolio 2025
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <p className="text-muted text-base font-medium">Hi there 👋, I'm</p>
              <h1 className="text-6xl sm:text-8xl font-black leading-none tracking-tight">
                <span className="text-text-strong">Arun </span>
                <span className="shimmer-text">Kumar</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-3 text-xl sm:text-2xl font-bold text-text-strong">
              <Code2 className="w-6 h-6 text-accent" />
              MERN Stack &amp; React Native Developer
            </motion.div>

            {/* Desc */}
            <motion.p variants={fadeUp} className="text-base text-muted max-w-xl leading-relaxed">
              I build high-performance web and mobile products with clean architecture and
              modern JavaScript — from REST APIs to real-time systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/Your-Arun"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
                className="btn-neon flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white"
              >
                <Github className="w-4 h-4" /> GitHub Profile
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/urarun/"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-text-strong border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </motion.a>
              <motion.a
                href="mailto:arun.work82@gmail.com"
                whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-text-strong border border-white/10 hover:border-cyan-accent/40 hover:bg-cyan-accent/5 transition-all"
              >
                <Mail className="w-4 h-4" /> Email Me
              </motion.a>
            </motion.div>

            {/* Floating stat cards */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
              {[
                { icon: Zap,      label: "1+ Years",       sub: "Experience"    },
                { icon: Layers,   label: "Full Stack",     sub: "MERN + Mobile" },
                { icon: Terminal, label: "Open Source",    sub: "GitHub Active" },
              ].map((s, i) => (
                <TiltCard key={i}
                  className={`glass-card px-5 py-4 rounded-2xl flex items-center gap-3 min-w-[150px] ${i === 1 ? 'float-anim' : 'float-anim-slow'}`}
                  style={{ animationDelay: `${i * 1.5}s` }}
                >
                  <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-strong">{s.label}</p>
                    <p className="text-[10px] text-muted">{s.sub}</p>
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ────────────── ABOUT ─────────────── */}
      <section id="about" className="py-28 px-6 relative z-10">
        <div className="section-line mb-20 mx-auto max-w-6xl" />
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col gap-8">
              <SectionHeading label="About Me" sub="Developer, builder, problem-solver." />
              <TiltCard className="glass-card p-8 rounded-3xl">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent via-accent-hover to-cyan-accent flex items-center justify-center text-3xl font-black text-white flex-shrink-0 glow-ring float-anim">
                    AK
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-accent" />
                      <h3 className="font-bold text-text-strong">Full-Stack Capability</h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      Developer with <strong className="text-text-strong">1+ years of experience</strong> building
                      robust full-stack applications and React Native products. I focus on maintainable code,
                      clean API design, and performant UI systems — from real-time WebSocket nodes to mobile-first layouts.
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      Based in <strong className="text-text-strong">Jodhpur, Rajasthan 🇮🇳</strong> — open to remote
                      roles, freelance collaborations and full-time opportunities.
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-secondary" />
                      <span className="text-xs text-muted">Jodhpur, Rajasthan, India</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ────────────── PROJECTS ─────────────── */}
      <section id="projects" className="py-28 px-6 relative z-10">
        <div className="section-line mb-20 mx-auto max-w-6xl" />
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <ScrollReveal>
            <SectionHeading
              label="Projects"
              sub="Click any card to flip it and see repository links."
            />
          </ScrollReveal>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[260px] glass-card rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : error ? (
            <div className="glass-card p-6 rounded-2xl text-red-400 text-sm">{error}</div>
          ) : (
            <motion.div
              variants={stagger} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {repos.map(repo => (
                <motion.div key={repo.id} variants={fadeUp}>
                  <ScrollReveal>
                    <ProjectCard repo={repo} />
                  </ScrollReveal>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ────────────── SKILLS ─────────────── */}
      <section id="skills" className="py-28 px-6 relative z-10">
        <div className="section-line mb-20 mx-auto max-w-6xl" />
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <ScrollReveal>
            <SectionHeading label="Tech Stack" sub="Core tools I use across web and mobile." />
          </ScrollReveal>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap">
            {TABS.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-2xl text-xs font-bold transition-all duration-300 border ${
                  activeTab === tab.id
                    ? "btn-neon text-white border-transparent"
                    : "border-white/8 text-muted hover:text-text-strong hover:border-accent/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map(skill => (
                <motion.div
                  layout key={skill.name}
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1,    y: 0  }}
                  exit={{    opacity: 0, scale: 0.85, y: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  <TiltCard className="skill-pill px-4 py-3 rounded-xl flex items-center gap-2.5 cursor-default">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-semibold text-text-strong text-xs tracking-wide">{skill.name}</span>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ────────────── CONTACT ─────────────── */}
      <section id="contact" className="py-28 px-6 relative z-10">
        <div className="section-line mb-20 mx-auto max-w-6xl" />
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col gap-8">
              <SectionHeading label="Contact Me" sub="Open to full-time, freelance and collab." />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Email",    value: "arun.work82@gmail.com", href: "mailto:arun.work82@gmail.com",      icon: Mail,     color: "text-accent" },
                  { label: "LinkedIn", value: "linkedin.com/in/urarun", href: "https://www.linkedin.com/in/urarun/", icon: Linkedin, color: "text-cyan-accent" },
                  { label: "GitHub",   value: "github.com/Your-Arun",   href: "https://github.com/Your-Arun",     icon: Github,   color: "text-accent-hover" },
                  { label: "Location", value: "Jodhpur, Rajasthan",      href: null,                               icon: MapPin,   color: "text-secondary" },
                ].map((item, i) => (
                  <TiltCard key={i} className="glass-card p-6 rounded-2xl flex items-center gap-4 group">
                    <div className={`p-3 rounded-xl bg-white/5 ${item.color} flex-shrink-0`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted mb-0.5 font-semibold">{item.label}</p>
                      {item.href
                        ? <a href={item.href} target="_blank" rel="noopener noreferrer"
                            className={`text-sm font-bold text-text-strong hover:${item.color} transition-colors break-all`}>
                            {item.value}
                          </a>
                        : <span className="text-sm font-bold text-text-strong">{item.value}</span>
                      }
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ────────────── FOOTER ─────────────── */}
      <footer className="py-10 px-6 relative z-10 text-center">
        <div className="section-line mb-8 mx-auto max-w-6xl" />
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} <span className="text-text-strong font-semibold">Arun Kumar</span>.
          Built with React, Tailwind CSS &amp; Framer Motion. Designed with 💙
        </p>
      </footer>

      {/* ── Back to top ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 rounded-2xl btn-neon text-white z-40"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
