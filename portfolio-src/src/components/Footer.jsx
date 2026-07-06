import { Github, Linkedin, Mail } from 'lucide-react';

const YEAR = new Date().getFullYear();

const SOCIALS = [
  { icon: Github,   href: 'https://github.com/Your-Arun',          label: 'GitHub'   },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/urarun/',    label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:arun.work82@gmail.com',           label: 'Email'    },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-ivory border-t border-divider">
      <div className="max-w-content mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted text-center sm:text-left">
          &copy; {YEAR}{' '}
          <span className="font-medium text-ink">Arun Kumar</span>.
          {' '}Built with React &amp; Tailwind CSS.
        </p>

        <nav aria-label="Footer social links" className="flex items-center gap-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-muted hover:text-accent transition-colors duration-150"
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
