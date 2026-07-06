import { motion } from 'framer-motion';

/**
 * FadeIn — wraps children in a subtle scroll-triggered fade + slide animation.
 * @param {number}  delay     - stagger delay in seconds
 * @param {string}  direction - 'up' | 'left' | 'right' (default: 'up')
 * @param {boolean} once      - only animate once on enter (default: true)
 */
export default function FadeIn({
  children,
  delay     = 0,
  direction = 'up',
  once      = true,
  className = '',
}) {
  const initial = {
    opacity: 0,
    y: direction === 'up'   ? 28 : 0,
    x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
