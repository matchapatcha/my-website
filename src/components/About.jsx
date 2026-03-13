import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.section 
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="about-container">
        <motion.div className="about-header" variants={itemVariants}>
          <h2>About</h2>
          <motion.div 
            className="underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <motion.div className="about-content" variants={itemVariants}>
          <p>
            I'm a designer and developer passionate about creating clean, functional digital experiences. 
            I believe in simplicity, clarity, and purposeful design.
          </p>
          <p>
            With a focus on user experience and modern technologies, I build solutions that are both beautiful and practical.
          </p>
        </motion.div>

        <motion.div className="skills-grid" variants={containerVariants}>
          {['Design', 'Web', 'React', 'CSS', 'JavaScript', 'UX'].map((skill) => (
            <motion.div 
              key={skill}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="skill-icon">•</div>
              <p>{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
