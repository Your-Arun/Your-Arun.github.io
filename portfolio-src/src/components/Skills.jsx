import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'React Native', 'Tailwind CSS', 'Bootstrap', 'Figma'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    category: 'Mobile',
    items: ['Expo', 'EAS Build'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Netlify', 'Nodemailer'],
  },
  {
    category: 'CMS',
    items: ['WordPress'],
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-subtle/40">
      <div className="section-wrap">
        <span className="hairline mb-16" aria-hidden="true" />

        <FadeIn>
          <p className="section-label">Technical Proficiency</p>
          <h2 id="skills-heading" className="section-title">Skills</h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12">
          {SKILL_GROUPS.map(({ category, items }, gi) => (
            <FadeIn key={category} delay={gi * 0.08}>
              <div className="flex flex-col gap-4">
                <h3 className="font-heading font-semibold text-sm tracking-[0.1em] uppercase text-accent">
                  {category}
                </h3>
                <motion.ul
                  role="list"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="flex flex-col gap-2"
                >
                  {items.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      {/* Thin accent dot */}
                      <span
                        className="w-1 h-1 rounded-full bg-divider group-hover:bg-accent transition-colors duration-200 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[15px] text-ink2 group-hover:text-ink transition-colors duration-150 leading-tight">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
