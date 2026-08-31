import { motion } from 'framer-motion'

export default function WordReveal({
  text,
  children,
  className = '',
  as = 'span',
  delay = 0.1,
  staggerDuration = 0.06,
  fromColor,
  toColor,
  once = true,
}) {
  const content = text || (typeof children === 'string' ? children : '')
  const words = content.split(' ').filter(Boolean)

  const MotionComponent = motion[as] || motion.span

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: {
      color: fromColor || 'rgba(156, 163, 175, 0.35)', // initial muted grey
      opacity: 0.4,
      y: 4,
    },
    visible: {
      color: toColor || 'inherit',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      variants={containerVariants}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          variants={wordVariants}
          className="inline-block mr-[0.26em] last:mr-0 transition-colors duration-200"
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  )
}
