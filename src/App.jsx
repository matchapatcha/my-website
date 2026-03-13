import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Awards from './components/Awards'
import GitHubActivity from './components/GitHubActivity'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [gifOpacity, setGifOpacity] = useState(0)
  const heroRef = useRef(null)
  const awardsRef = useRef(null)
  const activityRef = useRef(null)

  const handleNavClick = (section) => {
    setActiveSection(section)
    const refs = {
      hero: heroRef,
      awards: awardsRef,
      activity: activityRef,
    }
    
    if (refs[section]?.current) {
      refs[section].current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: 'hero', ref: heroRef },
        { name: 'awards', ref: awardsRef },
        { name: 'activity', ref: activityRef },
      ]

      for (const { name, ref } of sections) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          if (rect.top < window.innerHeight / 2) {
            setActiveSection(name)
          }
        }
      }

      const scrollY = window.scrollY
      const vh = window.innerHeight
      const opacity = Math.min(1, Math.max(0, (scrollY - vh * 0.3) / (vh * 0.4)))
      setGifOpacity(opacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div className="app">
      <Navigation activeSection={activeSection} onNavigate={handleNavClick} />
      
      <main className="main-content">
        <section ref={heroRef} className="section-wrapper">
          <Hero />
        </section>
        
        <section ref={awardsRef} className="section-wrapper">
          <Awards />
        </section>

        <section ref={activityRef} className="section-wrapper">
          <GitHubActivity />
        </section>
      </main>

      <footer className="site-footer">
        <a href="https://github.com/matchapatcha" target="_blank" rel="noopener noreferrer" className="footer-link">
          <svg viewBox="0 0 24 24" fill="currentColor" className="footer-icon"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
        <a href="https://www.tiktok.com/@aquafinnitys" target="_blank" rel="noopener noreferrer" className="footer-link">
          <svg viewBox="0 0 24 24" fill="currentColor" className="footer-icon"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
          TikTok
        </a>
      </footer>

      <div
        className="corner-gif"
        style={{ opacity: gifOpacity, transition: 'opacity 0.3s ease' }}
      >
        <iframe
          src="https://tenor.com/embed/27312164"
          frameBorder="0"
          allowFullScreen
          title="ishowspeed hype"
        />
      </div>
    </motion.div>
  )
}

export default App
