import FadeIn from './FadeIn';

const EXPERIENCES = [
  {
    role:     'MERN Stack Developer',
    company:  'Sanghi Brothers, Jodhpur',
    period:   'Dec 2024 — Present',
    location: 'System & Automation Technician role · MERN Stack Development track',
    bullets: [
      'Designed & built BranchFlow Pro, a 5-module logistics platform (Staff Web, Admin Panel, Mobile App, API) covering real-time dispatch tracking, role-based access control & Android APK via EAS Build — now used for day-to-day branch operations.',
      'Built Feedback & Complaint System: a 4-part architecture (QR intake, Socket.io live admin dashboard, backend, database) replacing manual complaint tracking, deployed on Render; also developed company website end-to-end (MERN, Tailwind) — sanghibros.vercel.app',
      'Built Electricity Billing App (React Native, JWT auth): automated PDF bill generation and OTP-based recovery, with a configurable billing engine handling multiplier & fixed-charge logic for tenant accounts.',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'React Native', 'Socket.io', 'Expo', 'EAS Build'],
  },
  {
    role:     'Freelance MERN Stack Developer',
    company:  'Self-employed',
    period:   'Jul 2024 — Nov 2024',
    location: 'MERN Stack & UI Development',
    bullets: [
      'Built Urban Estate (MERN + Firebase) — Live real estate platform featuring property filtering, real-time database, and inquiry features.',
      'Developed Hotstar Clone (React, TMDB API) — Live streaming user interface with TMDB API integration, categories browsing, and fully responsive layout.',
    ],
    tags: ['React.js', 'Firebase', 'Tailwind CSS', 'TMDB API', 'JavaScript'],
  },
  {
    role:     'Web Designer Intern',
    company:  'DETECHIE DIGITAL ACADEMY, Delhi',
    period:   'Jan 2023 — Jul 2023',
    location: 'Frontend Development & Web Design',
    bullets: [
      'Developed 15+ responsive web pages using modern HTML5, CSS3, and JavaScript standards.',
      'Improved UX and optimized page loading performance via debugging and layouts cross-browser testing.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Debugging'],
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-ivory">
      <div className="section-wrap">
        <span className="hairline mb-16" aria-hidden="true" />

        <FadeIn>
          <p className="section-label">Career History</p>
          <h2 id="experience-heading" className="section-title">Experience</h2>
        </FadeIn>

        {/* Vertical timeline */}
        <ol role="list" className="relative flex flex-col gap-0">
          {EXPERIENCES.map(({ role, company, period, location, bullets, tags }, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <li className="relative flex gap-8 pb-14 last:pb-0">
                {/* Timeline spine + dot */}
                <div className="flex flex-col items-center flex-shrink-0" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-accent bg-ivory mt-1.5" />
                  {i < EXPERIENCES.length - 1 && (
                    <div className="w-px flex-1 bg-divider mt-1" />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 min-w-0 pb-2">
                  {/* Header */}
                  <div className="flex flex-col gap-0.5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-heading font-semibold text-lg text-ink leading-tight">
                        {role}
                      </h3>
                      <span className="text-accent font-medium text-sm">
                        {company}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 text-xs text-muted">
                      <time>{period}</time>
                      <span>{location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul role="list" className="flex flex-col gap-2">
                    {bullets.map((b, bi) => (
                      <li key={bi} className="text-[15px] text-ink2 leading-relaxed pl-3 border-l border-divider">
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {tags.map(t => (
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
