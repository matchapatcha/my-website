import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './Gallery.css'

export default function Gallery() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://tenor.com/embed.js"]')
    if (existingScript) return

    const script = document.createElement('script')
    script.src = 'https://tenor.com/embed.js'
    script.async = true
    script.type = 'text/javascript'
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // Add or replace photo objects here.
  const galleryPhotos = [
    {
      title: 'Yung Unc Jack',
      caption: 'Yung Unc Jack',
      src: '/photos/IMG_1427.jpg',
    },
    {
      title: 'Best Friends',
      caption: 'Best Friends',
      src: '/photos/IMG_1353.jpg',
    },
    {
      title: 'IShowSpeed',
      caption: 'IShowSpeed',
      tenorPostId: '11790467925100085893',
    },
    {
      title: 'Chud Gabriel',
      caption: 'Chud Gabriel',
      src: '/photos/IMG_0007.JPG',
    },
  ]

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
      className="gallery"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="gallery-container">
        <motion.h2 className="gallery-title" variants={itemVariants}>
          Gallery
        </motion.h2>

        <motion.p className="gallery-note" variants={itemVariants}>
          Edit the <strong>galleryPhotos</strong> array in Gallery.jsx to add your own photos.
        </motion.p>

        <motion.div className="gallery-grid" variants={containerVariants}>
          {galleryPhotos.map((photo, index) => (
            <motion.article
              key={index}
              className="gallery-card"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div className="gallery-image-wrap">
                {photo.tenorPostId ? (
                  <div
                    className="tenor-gif-embed"
                    data-postid={photo.tenorPostId}
                    data-share-method="host"
                    data-aspect-ratio="1"
                    data-width="100%"
                  >
                    <a href="https://tenor.com/view/ishow-speed-twitch-emote-desert-gif-11790467925100085893">
                      Ishow Speed Sticker
                    </a>
                    from{' '}
                    <a href="https://tenor.com/search/ishow-stickers">Ishow Stickers</a>
                  </div>
                ) : (
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                )}
              </div>
              <div className="gallery-meta">
                <h3>{photo.title}</h3>
                <p>{photo.caption}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}