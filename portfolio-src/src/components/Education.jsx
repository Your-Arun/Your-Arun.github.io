import FadeIn from './FadeIn';

const EDUCATION_ITEMS = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'NIMS University, Jaipur',
    period: '2020 — 2024',
    details: 'CGPA: 7.2',
  },
  {
    degree: 'Intermediate — PCM',
    school: 'Mahaveer Public School, Jodhpur',
    period: '2018 — 2020',
    details: 'Grade: 71%',
  },
];

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="bg-subtle/20">
      <div className="section-wrap">
        <span className="hairline mb-16" aria-hidden="true" />

        <FadeIn>
          <p className="section-label">Academic Background</p>
          <h2 id="education-heading" className="section-title">Education</h2>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {EDUCATION_ITEMS.map(({ degree, school, period, details }, i) => (
            <FadeIn key={degree} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-divider pb-6 last:border-0 last:pb-0">
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-bold text-lg text-ink">
                    {degree}
                  </h3>
                  <p className="text-sm text-accent font-medium">{school}</p>
                  <p className="text-sm text-ink2 mt-1">{details}</p>
                </div>
                <div className="text-xs text-muted font-medium sm:text-right mt-1 sm:mt-0">
                  <time>{period}</time>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
