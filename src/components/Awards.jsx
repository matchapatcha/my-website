import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './Awards.css'

export default function Awards() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="//cdn.credly.com/assets/utilities/embed.js"], script[src="https://cdn.credly.com/assets/utilities/embed.js"]'
    )

    if (existingScript) {
      return
    }

    const script = document.createElement('script')
    script.src = '//cdn.credly.com/assets/utilities/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const badges = [
    {
      title: 'JavaScript Essentials 1',
      organization: 'Cisco',
      issued: 'Sep 30, 2025',
      image: 'https://images.credly.com/images/b93bf373-3da6-4ada-9879-a0c39d6a11f8/image.png',
      url: 'https://www.credly.com/users/aiden-aydenjian',
    },
    {
      title: 'Networking Basics',
      organization: 'Cisco',
      issued: 'Dec 9, 2025',
      image: 'https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png',
      url: 'https://www.credly.com/users/aiden-aydenjian',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section 
      className="awards"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="awards-container">
        <motion.h2 className="awards-title" variants={itemVariants}>
          Certifications
        </motion.h2>

        <div className="badges-section">
          <div className="certifications-layout">
            <motion.div className="badges-grid" variants={containerVariants}>
              {badges.map((badge, i) => (
                <motion.a
                  key={i}
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge-card"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="badge-image">
                    <img src={badge.image} alt={badge.title} />
                  </div>
                  <div className="badge-info">
                    <h4>{badge.title}</h4>
                    <p className="badge-org">{badge.organization}</p>
                    <p className="badge-issued">Issued {badge.issued}</p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                className="badge-card credly-badge-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id="9f104a14-7782-4fe0-892e-7e17877bac85"
                  data-share-badge-host="https://www.credly.com"
                />
              </motion.div>

              <motion.div
                className="badge-card credly-badge-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id="4497e9f8-9ce0-4c81-965a-854f6632eb22"
                  data-share-badge-host="https://www.credly.com"
                />
              </motion.div>
            </motion.div>

            <motion.div className="certifications-gif" variants={itemVariants}>
              <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2t5OGhsbWhzejQ3N2FwcngyMDl0cTNmYW8yM25mNnE4ejFrMmQ4MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D63HGAzG15LQrjBPRE/giphy.gif"
                alt="Celebration GIF"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
