import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';
import FadeIn from './FadeIn';

const SOCIALS = [
  {
    label: 'GitHub',
    href:  'https://github.com/Your-Arun',
    icon:  Github,
  },
  {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/urarun/',
    icon:  Linkedin,
  },
  {
    label: 'Email',
    href:  'mailto:arun.work82@gmail.com',
    icon:  Mail,
  },
];

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 bg-ivory"
    >
      <div className="max-w-content mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 max-w-3xl"
        >
          {/* Pre-heading label */}
          <motion.p variants={item} className="section-label tracking-[0.14em]">
            Hey there, I'm
          </motion.p>

          {/* Main heading */}
          <motion.h1
            variants={item}
            className="font-heading font-bold text-ink leading-none tracking-tighter"
            style={{ fontSize: 'clamp(3rem, 10vw, 6.5rem)' }}
          >
            Arun Kumar
          </motion.h1>

           {/* Sub-role line */}
          <motion.p
            variants={item}
            className="text-ink2 text-lg sm:text-xl font-medium tracking-wide"
          >
            MERN Stack Developer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-muted text-base sm:text-lg leading-relaxed max-w-xl"
          >
            MERN Stack Developer with 1.5+ years building production web and mobile applications end-to-end on the JavaScript stack — MongoDB, Express, React, Node.js, and React Native.
          </motion.p>

          {/* Hairline */}
          <motion.span variants={item} className="hairline w-20" aria-hidden="true" />

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1nEirBVmYUeORbZ4RSnOgaR1HrBRJfq7_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume (PDF)"
              className="btn-outline"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-5 pt-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="text-muted hover:text-accent transition-colors duration-150"
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20 flex items-center gap-2 text-muted text-xs tracking-widest uppercase"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </motion.span>
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
