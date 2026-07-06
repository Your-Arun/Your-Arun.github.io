import { ExternalLink, Github } from 'lucide-react';
import FadeIn from './FadeIn';

const PROJECTS = [
  {
    name:        'IoT Home Automation',
    year:        '2024',
    stack:       ['Django', 'DRF', 'Python', 'MQTT', 'Google Assistant API'],
    description:
      'A voice-controlled home automation system integrating Google Assistant with physical IoT devices — motion sensors, smart switches, and remote appliance control via a Django & Django REST Framework backend. Enables real-time device access from anywhere with secure API authentication.',
    github:      'https://github.com/Your-Arun',
    live:        null,
  },
  {
    name:        'Truckky',
    year:        '2024',
    stack:       ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    description:
      'A MERN stack discovery platform for food truck owners to publish menus, real-time locations, and events — and for users to find and follow their favourite trucks. Features real-time location updates, user authentication, and an owner dashboard for post management.',
    github:      'https://github.com/Your-Arun',
    live:        null,
  },
  {
    name:        'Legal CRM (Bangladesh)',
    year:        '2023',
    stack:       ['Frappe Framework', 'Python', 'MariaDB', 'JavaScript'],
    description:
      'An enterprise CRM built on Frappe for a Bangladesh-based legal consultancy, covering client onboarding, case document management, billing workflows, and automated email notifications. Delivered with custom Frappe doctypes, workflows, and client portal access.',
    github:      null,
    live:        null,
    note:        'Client project — code is private',
  },
  {
    name:        'Educational Teaching Platform',
    year:        '2023',
    stack:       ['Frappe Framework', 'Python', 'MariaDB'],
    description:
      "A teaching management platform built on Frappe's LMS primitives, adding custom course scheduling, instructor–student session tracking, attendance records, and progress reports — deployed for a private training institution.",
    github:      null,
    live:        null,
    note:        'Client project — code is private',
  },
];

export default function Projects() {
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
              <li className="group border-t border-divider py-10 last:border-b">
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
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
