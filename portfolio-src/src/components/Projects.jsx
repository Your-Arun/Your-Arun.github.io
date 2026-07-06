import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import FadeIn from './FadeIn';

const PROJECTS = [
  {
    name:        'BranchFlow Pro — Logistics & Branch Management',
    year:        '2026',
    stack:       ['MERN Stack', 'React Native', 'Expo', 'Socket.io', 'JWT'],
    description:
      'A 5-module logistics platform (Staff Web, Admin Panel, Mobile Apps, API) developed for Sanghi Brothers. Enables real-time dispatch tracking, automated email alerts, and push notifications with role-based access controls (Admin/Staff). Mobile apps generated via Expo & EAS Build, with backend deployed on Render and MongoDB Atlas.',
    github:      'https://github.com/Your-Arun',
    live:        null,
  },
  {
    name:        'Electricity Billing & Tenant Management App',
    year:        '2026',
    stack:       ['React Native', 'Expo', 'Node.js', 'MongoDB', 'JWT'],
    description:
      'A role-based mobile application designed for Sanghi Brothers to manage tenant electricity meters. Streamlines meter readings recording, automated PDF bill generation, and OTP-based account recovery. Powered by a flexible billing engine handling configurable multipliers and fixed charges.',
    github:      'https://github.com/Your-Arun',
    live:        null,
  },
  {
    name:        'Feedback & Complaint Management System',
    year:        '2026',
    stack:       ['React', 'Vite', 'Node.js', 'Socket.io', 'MongoDB'],
    description:
      'A QR-code based real-time feedback portal and admin dashboard replacing manual complaint tracking workflows. Features instant Socket.io live updates for admin panels, built as a 4-part system and deployed on Render.',
    github:      'https://github.com/Your-Arun',
    live:        'https://sanghibros.vercel.app',
  },
  {
    name:        'Urban Estate — Real Estate Platform',
    year:        '2024',
    stack:       ['MERN Stack', 'Firebase Auth', 'Tailwind CSS'],
    description:
      'A full-stack property listing and discovery platform. Integrates Firebase Authentication, custom property filters, real-time database updates, and client inquiry features.',
    github:      'https://github.com/Your-Arun',
    live:        null,
  },
  {
    name:        'Hotstar Clone — Streaming Platform',
    year:        '2024',
    stack:       ['React.js', 'TMDB API', 'Tailwind CSS'],
    description:
      'A responsive streaming video UI built with React. Integrates TMDB API for live movies/shows database, including full-text search, categories browsing, and custom styling.',
    github:      'https://github.com/Your-Arun',
    live:        null,
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-subtle/30">
      <div className="section-wrap">
        <span className="hairline mb-16" aria-hidden="true" />

        <FadeIn>
          <p className="section-label">Selected Work</p>
          <h2 id="projects-heading" className="section-title">Projects</h2>
        </FadeIn>

        <ol role="list" className="flex flex-col">
          {PROJECTS.map(({ name, year, stack, description, github, live, note }, i) => (
            <FadeIn key={name} delay={i * 0.08}>
              <motion.li
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.35,
                  y: hoveredIndex === i ? -4 : 0
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group border-t border-divider py-10 last:border-b cursor-default"
              >
                <div className="flex flex-col gap-4">
                  {/* Project header row */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      {/* Number + title */}
                      <div className="flex items-baseline gap-3">
                        <span className="font-heading text-xs font-semibold text-muted tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-heading font-bold text-xl text-ink group-hover:text-accent transition-colors duration-150">
                          {name}
                        </h3>
                        <span className="text-xs text-muted ml-1">{year}</span>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${name} source code on GitHub`}
                          className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors"
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                          Source
                        </a>
                      )}
                      {live && (
                        <a
                          href={live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${name} live demo`}
                          className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          Live
                        </a>
                      )}
                      {note && (
                        <span className="text-xs text-muted italic">{note}</span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[15px] text-ink2 leading-relaxed max-w-2xl">
                    {description}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {stack.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
