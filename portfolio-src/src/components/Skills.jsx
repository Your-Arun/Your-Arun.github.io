import FadeIn from './FadeIn';

const SKILL_GROUPS = [
  {
    category: 'Backend',
    items: [
      'Python',
      'Django',
      'Django REST Framework',
      'Frappe Framework',
      'REST APIs',
      'WebSockets',
    ],
  },
  {
    category: 'Frontend & MERN',
    items: [
      'JavaScript (ES2020+)',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'HTML & CSS',
    ],
  },
  {
    category: 'Mobile',
    items: [
      'React Native',
      'Expo',
    ],
  },
  {
    category: 'Tools & Infrastructure',
    items: [
      'Git & GitHub',
      'IoT Protocols (MQTT)',
      'Google Assistant API',
      'Postman',
      'Linux CLI',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-subtle/40">
      <div className="section-wrap">
        <span className="hairline mb-16" aria-hidden="true" />

        <FadeIn>
          <p className="section-label">Technical Proficiency</p>
          <h2 id="skills-heading" className="section-title">Skills</h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
          {SKILL_GROUPS.map(({ category, items }, gi) => (
            <FadeIn key={category} delay={gi * 0.08}>
              <div className="flex flex-col gap-4">
                <h3 className="font-heading font-semibold text-sm tracking-[0.1em] uppercase text-accent">
                  {category}
                </h3>
                <ul role="list" className="flex flex-col gap-2">
                  {items.map((skill, si) => (
                    <li key={skill} className="flex items-center gap-3 group">
                      {/* Thin accent dot */}
                      <span
                        className="w-1 h-1 rounded-full bg-divider group-hover:bg-accent transition-colors duration-200 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[15px] text-ink2 group-hover:text-ink transition-colors duration-150 leading-tight">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
