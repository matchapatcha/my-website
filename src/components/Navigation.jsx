import { motion } from 'framer-motion'
import './Navigation.css'

export default function Navigation({ activeSection, onNavigate }) {
  const navItems = ['hero', 'awards']

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header 
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <motion.div className="nav-container" variants={containerVariants} initial="hidden" animate="visible">
        <motion.p 
          className="logo"
          variants={itemVariants}
        >
          AA
        </motion.p>
        
        <motion.nav className="nav-links" variants={containerVariants}>
          {navItems.map((item) => (
            <motion.button
              key={item}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
              onClick={() => onNavigate(item)}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.button>
          ))}
        </motion.nav>
      </motion.div>
    </motion.header>
  )
}
