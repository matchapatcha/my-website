import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section 
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-content">
        <motion.p className="hero-eyebrow" variants={itemVariants}>
          // programmer portfolio
        </motion.p>

        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          Aiden Aydenjian
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
        >
          Building clean interfaces, writing reliable code, and exploring hardware from the command line up.
        </motion.p>

        <motion.pre className="hero-code" variants={itemVariants}>
          <code>{`const stack = ['JavaScript', 'React', 'Networking'];\nconst focus = 'Minimal builds, maximal clarity.';`}</code>
        </motion.pre>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        ↓
      </motion.div>
    </motion.section>
  )
}
