import FadeIn from './FadeIn';

const CERTIFICATIONS = [
  { name: 'HP Enterprise',         provider: 'Software Engg. Job Simulation' },
  { name: 'Goldman Sachs',         provider: 'Software Engg. Job Simulation' },
  { name: 'Responsive Web Design', provider: 'freeCodeCamp' },
  { name: 'Build Website with WordPress', provider: 'Coursera' },
  { name: 'Get Started with Figma', provider: 'Coursera' },
  { name: 'Intro to Generative AI Studio', provider: 'Google / Coursera' },
];

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certs-heading" className="bg-ivory">
      <div className="section-wrap">
        <span className="hairline mb-16" aria-hidden="true" />

        <FadeIn>
          <p className="section-label">Professional Development</p>
          <h2 id="certs-heading" className="section-title">Certifications</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map(({ name, provider }, i) => (
            <FadeIn key={name} delay={i * 0.06}>
              <div className="flex items-center justify-between border border-divider rounded p-4 bg-subtle bg-opacity-30 hover:border-accent hover:bg-opacity-50 transition-all duration-200">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-heading font-semibold text-sm text-ink leading-tight">
                    {name}
                  </h3>
                  <p className="text-xs text-muted font-medium">{provider}</p>
                </div>
                {/* Minimalist dot indicator */}
                <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 flex-shrink-0 ml-4" aria-hidden="true" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
