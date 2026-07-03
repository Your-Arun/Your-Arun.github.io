import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Code, 
  ExternalLink, 
  Star, 
  Terminal, 
  Sparkles,
  Server,
  Layers,
  Phone,
  Briefcase
} from 'lucide-react';

const skills = [
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "React Native", category: "mobile" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Socket.io", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Expo", category: "mobile" }
];

const languageColors = {
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  TypeScript: "#3178c6",
  default: "#8b949e"
};

export default function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll position for Show Scroll Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch GitHub repos
  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch("https://api.github.com/users/Your-Arun/repos");
        if (!response.ok) {
          throw new Error(`GitHub API returned status ${response.status}`);
        }
        const data = await response.json();
        const filteredSortedRepos = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filteredSortedRepos);
      } catch (err) {
        console.error(err);
        setError("Could not load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  // Framer Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const toTitleCaseFromSlug = (text) => {
    return text
      .replace(/[-_]+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };

  const getLanguageColor = (language) => {
    if (!language) return languageColors.default;
    return languageColors[language] || languageColors.default;
  };

  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <div className="relative min-h-screen font-sans antialiased text-[#c9d1d9] selection:bg-accent selection:text-bg">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-hover to-[#a5d6ff] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating Light Glow Effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent opacity-[0.03] blur-[80px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent-hover opacity-[0.02] blur-[100px]" />
      </div>

      {/* Navigation Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 w-full glass-nav"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white bg-gradient-to-br from-accent to-accent-hover shadow-lg shadow-accent/20 transition-all duration-300 group-hover:scale-105">
              AK
            </span>
            <span className="font-bold text-text-strong tracking-wide group-hover:text-accent transition-colors duration-300">
              Arun Kumar
            </span>
          </a>
          <nav className="flex items-center gap-6">
            {["about", "projects", "skills", "contact"].map((section) => (
              <a 
                key={section} 
                href={`#${section}`}
                className="text-muted hover:text-accent text-sm font-semibold capitalize tracking-wide transition-colors duration-200"
              >
                {section}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-64px)] flex items-center py-16 px-6 z-10">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-accent/10 text-accent border border-accent/25">
                <Sparkles className="w-3.5 h-3.5" /> Welcome to my space
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-7xl font-extrabold text-text-strong tracking-tight leading-none"
            >
              Hi, I am <span className="bg-gradient-to-r from-accent via-accent-hover to-[#a5d6ff] bg-clip-text text-transparent">Arun Kumar</span>
            </motion.h1>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-xl sm:text-3xl font-bold text-accent-hover tracking-wide"
            >
              MERN Stack &amp; React Native Developer
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted max-w-2xl leading-relaxed"
            >
              I build scalable web and mobile experiences with clean architecture, modern JavaScript, and user-focused design.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mt-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Your-Arun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-accent to-accent-hover text-bg hover:brightness-110 shadow-lg shadow-accent/15 transition-all"
              >
                <Github className="w-5 h-5" /> GitHub
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/urarun/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold border border-border bg-transparent text-text-strong hover:bg-card hover:border-accent/40 transition-all"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:arun.work82@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold border border-border bg-transparent text-text-strong hover:bg-card hover:border-accent/40 transition-all"
              >
                <Mail className="w-5 h-5" /> Email
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10 border-t border-border/40">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-text-strong tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-6 bg-accent rounded-full inline-block" /> About Me
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-lg text-muted leading-relaxed">
              Developer with 1+ years of experience building robust full-stack applications and React Native products. 
              I focus on maintainable code, API design, and performant user interfaces.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="glass-card p-8 rounded-2xl flex flex-col gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-strong mb-1">Full-Stack Capability</h3>
                  <p className="text-muted leading-relaxed">
                    I enjoy turning ideas into production-ready digital products using the MERN stack and mobile-first engineering practices. I work across frontend and backend, from component architecture to real-time systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10 border-t border-border/40">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-end flex-wrap gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-text-strong tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-accent rounded-full inline-block" /> Projects
                </h2>
                <p className="text-muted mt-2">
                  Selected repositories fetched live from GitHub, sorted by latest activity.
                </p>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl h-[220px] relative overflow-hidden animate-pulse">
                    <div className="w-2/3 h-5 bg-border rounded mb-4" />
                    <div className="w-full h-12 bg-border rounded mb-4" />
                    <div className="flex justify-between mt-auto">
                      <div className="w-1/3 h-4 bg-border rounded" />
                      <div className="w-1/4 h-4 bg-border rounded" />
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="p-6 rounded-xl border border-red-500/35 bg-red-500/10 text-red-400">
                {error}
              </div>
            ) : (
              <motion.div 
                layout
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {repos.map((repo) => (
                    <motion.article 
                      layout
                      key={repo.id}
                      variants={fadeInUp}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="glass-card p-6 rounded-2xl flex flex-col justify-between h-[230px]"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-bold text-text-strong line-clamp-1 group-hover:text-accent transition-colors">
                            {toTitleCaseFromSlug(repo.name)}
                          </h3>
                          <Terminal className="w-4 h-4 text-muted flex-shrink-0" />
                        </div>
                        <p className="text-sm text-muted mt-2 line-clamp-3">
                          {repo.description || "View Project repository for details."}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/40">
                        <div className="flex justify-between items-center mb-4">
                          <span className="flex items-center gap-1.5 text-xs text-muted">
                            <span 
                              className="w-2.5 h-2.5 rounded-full inline-block" 
                              style={{ backgroundColor: getLanguageColor(repo.language) }}
                            />
                            {repo.language || "Unknown"}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted">
                            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> {repo.stargazers_count}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <a 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-lg text-xs font-bold bg-accent text-bg hover:brightness-110 transition-all"
                          >
                            <Github className="w-3.5 h-3.5" /> Repository
                          </a>
                          {repo.homepage && (
                            <a 
                              href={repo.homepage} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center py-2 px-3 rounded-lg text-xs font-bold border border-border text-text-strong hover:bg-card transition-all"
                              aria-label="Live Demo"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative z-10 border-t border-border/40">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-text-strong tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-6 bg-accent rounded-full inline-block" /> Tech Stack
              </h2>
              <p className="text-muted mt-2">
                Core technologies I use across web and mobile development.
              </p>
            </div>

            {/* Categorization Tabs */}
            <div className="flex gap-2 flex-wrap border-b border-border/60 pb-4">
              {[
                { id: "all", label: "All Skills" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "mobile", label: "Mobile" },
                { id: "tools", label: "Tools" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all relative ${
                    activeTab === tab.id 
                      ? "text-accent bg-accent/10 border border-accent/25" 
                      : "text-muted hover:text-text-strong bg-transparent border border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Skills grid */}
            <motion.div 
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={skill.name}
                    className="p-4 rounded-xl border border-border bg-card/65 flex items-center gap-3 hover:border-accent/40 hover:bg-card transition-all group"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                    <span className="font-semibold text-text-strong text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10 border-t border-border/40">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-text-strong tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-6 bg-accent rounded-full inline-block" /> Contact Me
              </h2>
              <p className="text-muted mt-2">
                Open to full-time roles, freelance projects, and collaborative product work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Email", value: "arun.work82@gmail.com", href: "mailto:arun.work82@gmail.com", icon: Mail },
                { label: "LinkedIn", value: "linkedin.com/in/urarun", href: "https://www.linkedin.com/in/urarun/", icon: Linkedin },
                { label: "GitHub", value: "github.com/Your-Arun", href: "https://github.com/Your-Arun", icon: Github },
                { label: "Location", value: "Jodhpur, Rajasthan", href: null, icon: MapPin }
              ].map((item, idx) => (
                <motion.article 
                  variants={fadeInUp}
                  key={idx}
                  className="glass-card p-6 rounded-2xl flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-muted block mb-1">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-bold text-text-strong hover:text-accent transition-colors break-words">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-bold text-text-strong break-words">{item.value}</span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/40 relative z-10 text-center text-sm text-muted">
        <p>© {new Date().getFullYear()} Arun Kumar. Rebuilt with React, Tailwind CSS, &amp; Framer Motion.</p>
      </footer>

      {/* Back to top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 rounded-xl bg-accent text-bg shadow-lg shadow-accent/25 hover:brightness-110 z-40 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
