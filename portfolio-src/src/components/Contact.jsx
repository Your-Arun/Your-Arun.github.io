import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import FadeIn from './FadeIn';

const DIRECT_LINKS = [
  {
    icon:  Mail,
    label: 'Email',
    value: 'arun.work82@gmail.com',
    href:  'mailto:arun.work82@gmail.com',
  },
  {
    icon:  Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/urarun',
    href:  'https://www.linkedin.com/in/urarun/',
  },
  {
    icon:  Github,
    label: 'GitHub',
    value: 'github.com/Your-Arun',
    href:  'https://github.com/Your-Arun',
  },
];

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', message: '' });
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    fetch("https://formsubmit.co/ajax/arun.work82@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message
      })
    })
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert("Could not send message. Please send an email directly to arun.work82@gmail.com");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-ivory">
      <div className="section-wrap">
        <span className="hairline mb-16" aria-hidden="true" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24 items-start">

          {/* Left: heading + direct links */}
          <FadeIn direction="left" className="flex flex-col gap-8">
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 id="contact-heading" className="section-title mb-0">
                Let's work<br />together.
              </h2>
            </div>

            <p className="text-[15px] text-ink2 leading-relaxed">
              I'm open to full-time roles, contract work, and interesting freelance
              projects. Feel free to reach out — I typically respond within 24 hours.
            </p>

            <ul role="list" className="flex flex-col gap-5">
              {DIRECT_LINKS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-divider bg-subtle flex-shrink-0"
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-semibold uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-ink hover:text-accent transition-colors"
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.1}>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
                <span className="text-3xl" aria-hidden="true">✓</span>
                <p className="font-heading font-semibold text-ink text-lg">Message sent!</p>
                <p className="text-sm text-muted">Thank you. Your message has been sent directly to my inbox.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm link-accent"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
                aria-label="Contact form"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-name" className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Name <span aria-hidden="true" className="text-accent">*</span>
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    disabled={loading}
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-divider rounded px-4 py-3 text-sm text-ink bg-ivory
                               placeholder:text-muted/50 focus:outline-none focus:border-accent
                               transition-colors duration-150 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-email" className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Email <span aria-hidden="true" className="text-accent">*</span>
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    disabled={loading}
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-divider rounded px-4 py-3 text-sm text-ink bg-ivory
                               placeholder:text-muted/50 focus:outline-none focus:border-accent
                               transition-colors duration-150 disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-message" className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Message <span aria-hidden="true" className="text-accent">*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    required
                    disabled={loading}
                    rows={5}
                    placeholder="Tell me about your project or opportunity…"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-divider rounded px-4 py-3 text-sm text-ink bg-ivory
                               placeholder:text-muted/50 focus:outline-none focus:border-accent
                               transition-colors duration-150 resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary self-start disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
