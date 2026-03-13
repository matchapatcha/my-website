import { motion } from 'framer-motion'
import './Work.css'

export default function Work() {
  const projects = [
    {
      title: 'Project One',
      description: 'A clean web application with a focus on user experience',
      tech: ['React', 'CSS', 'JavaScript'],
    },
    {
      title: 'Project Two',
      description: 'Responsive design system built with modern technologies',
      tech: ['Design', 'Frontend', 'UX'],
    },
    {
      title: 'Project Three',
      description: 'Minimalist tool for organizing and managing content',
      tech: ['Web', 'Frontend', 'React'],
    },
  ]

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.section 
      className="work"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="work-container">
        <motion.h2 className="work-title" variants={itemVariants}>
          Work
        </motion.h2>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div className="project-image">
                <div className="placeholder-image">—</div>
              </motion.div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <motion.button 
                  className="view-project-btn"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
