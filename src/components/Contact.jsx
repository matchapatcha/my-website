import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  }

  const contactMethods = [
    { icon: '✉', label: 'Email', value: 'hello@example.com' },
    { icon: '→', label: 'Website', value: 'example.com' },
    { icon: '↗', label: 'LinkedIn', value: 'linkedin.com/in/user' },
    { icon: '◇', label: 'GitHub', value: 'github.com/user' },
  ]

  return (
    <motion.section 
      className="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="contact-container">
        <motion.h2 className="contact-title" variants={itemVariants}>
          Contact
        </motion.h2>

        <motion.p className="contact-subtitle" variants={itemVariants}>
          Let's work together. Get in touch.
        </motion.p>

        <motion.div className="contact-methods" variants={containerVariants}>
          {contactMethods.map((method, i) => (
            <motion.a 
              key={i}
              href="#"
              className="contact-card"
              variants={itemVariants}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="contact-icon">{method.icon}</div>
              <h3>{method.label}</h3>
              <p>{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.form className="contact-form" variants={itemVariants}>
          <motion.input 
            type="text"
            placeholder="Name"
            whileFocus={{ scale: 1.01 }}
          />
          <motion.input 
            type="email"
            placeholder="Email"
            whileFocus={{ scale: 1.01 }}
          />
          <motion.textarea 
            placeholder="Message"
            rows="4"
            whileFocus={{ scale: 1.01 }}
          />
          <motion.button 
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  )
}
