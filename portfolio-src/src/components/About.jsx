import { MapPin } from 'lucide-react';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-ivory">
      <div className="section-wrap">
        <span className="hairline mb-16" aria-hidden="true" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-14 md:gap-20 items-start">

          {/* Headshot placeholder */}
          <FadeIn direction="left" className="flex flex-col items-center md:items-start gap-4">
            <div
              aria-label="Portrait of Arun Kumar"
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-subtle border border-divider
                         flex items-center justify-center overflow-hidden select-none"
            >
              {/* Styled initials stand-in */}
              <span className="font-heading font-bold text-5xl text-accent opacity-60 tracking-tighter">
                AK
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-muted text-sm">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              <span>Jodhpur, Rajasthan, India</span>
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.1} className="flex flex-col gap-6">
            <div>
              <p id="about-heading" className="section-label">About Me</p>
              <h2 className="section-title mb-0">
                Engineer by trade,<br />problem-solver by nature.
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-ink2 text-[15px] leading-relaxed">
              <p>
                I'm a Full-Stack Software Engineer with hands-on experience across backend
                engineering, MERN stack development, and IoT-driven application architecture.
                My work spans building REST APIs in <strong className="text-ink font-semibold">Django &amp; DRF</strong>, architecting
                data-driven web apps with <strong className="text-ink font-semibold">React &amp; Node.js</strong>, and integrating
                real-time device control systems using IoT protocols.
              </p>
              <p>
                I've worked on enterprise-grade projects — an{' '}
                <span className="text-ink font-medium">Asset Management System</span>,
                a <span className="text-ink font-medium">Ticket Support Platform</span>,
                a <span className="text-ink font-medium">Legal CRM</span>, and an{' '}
                <span className="text-ink font-medium">Educational Teaching Platform</span> —
                taking ownership from requirement gathering through to production deployment.
              </p>
              <p>
                Outside of work, I believe that{' '}
                <em className="italic text-ink">
                  "The intersection of knowledge, skill, and desire is where real mastery lives."
                </em>{' '}
                I'm driven by curiosity about how systems talk to each other — whether that's
                microservices, hardware sensors, or distributed teams.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-divider">
              {[
                { label: 'Specialization', value: 'Backend & MERN' },
                { label: 'Domain',         value: 'Web & IoT'      },
                { label: 'Email',          value: 'arun.work82@gmail.com', href: 'mailto:arun.work82@gmail.com' },
                { label: 'Availability',   value: 'Open to roles'  },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted mb-0.5">
                    {label}
                  </dt>
                  <dd className="text-sm font-medium text-ink">
                    {href
                      ? <a href={href} className="link-accent">{value}</a>
                      : value
                    }
                  </dd>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
