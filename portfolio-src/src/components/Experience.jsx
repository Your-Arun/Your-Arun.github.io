import FadeIn from './FadeIn';

const EXPERIENCES = [
  {
    role:     'Full Stack Developer',
    company:  'Tech Company',
    period:   '2024 — Present',
    location: 'Jodhpur, Rajasthan (Remote)',
    bullets: [
      'Led end-to-end development of an Asset Management System and Ticket Support Platform using Django & Django REST Framework — from architecture planning through client deployment and post-launch support.',
      'Designed RESTful API contracts, integrated role-based access control, and improved query performance by optimising ORM-level database interactions.',
    ],
    tags: ['Python', 'Django', 'DRF', 'PostgreSQL', 'React'],
  },
  {
    role:     'Software Developer',
    company:  'Frappe / ERPNext Partner',
    period:   '2023 — 2024',
    location: 'Remote',
    bullets: [
      'Delivered a Bangladesh-based CRM system for a legal consultancy firm, handling client onboarding workflows, document management, and billing — built on the Frappe Framework.',
      "Developed an educational teaching platform with course management, session scheduling, and student progress tracking using Frappe's desk and portal layers.",
    ],
    tags: ['Frappe Framework', 'Python', 'MariaDB', 'JavaScript'],
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
