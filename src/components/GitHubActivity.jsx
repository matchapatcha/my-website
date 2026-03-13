import { motion } from 'framer-motion'
import './GitHubActivity.css'

export default function GitHubActivity() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55 },
    },
  }

  return (
    <motion.section
      className="activity"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="activity-container">
        <motion.h2 className="activity-title" variants={itemVariants}>
          GitHub Activity
        </motion.h2>

        <motion.p className="activity-subtitle" variants={itemVariants}>
          A quick view of recent contributions and the command-line setup I like to code in.
        </motion.p>

        <motion.div className="activity-grid" variants={containerVariants}>
          <motion.article className="activity-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-dot" />
              <p>contributions.matchapatcha</p>
            </div>
            <img
              className="activity-image"
              src="https://ghchart.rshah.org/79ffc9/matchapatcha"
              alt="GitHub contribution activity chart for matchapatcha"
              loading="lazy"
            />
            <a
              className="activity-link"
              href="https://github.com/matchapatcha"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full profile
            </a>
          </motion.article>

          <motion.article className="activity-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-dot" />
              <p>terminal.workspace</p>
            </div>
            <img
              className="activity-image cli-image"
              src="/coding-cli.svg"
              alt="Minimal coding command line illustration"
              loading="lazy"
            />
            <p className="cli-caption">Focus mode: build, test, repeat.</p>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  )
}
