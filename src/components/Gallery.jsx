import { motion } from 'framer-motion'
import './Gallery.css'

export default function Gallery() {
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
      src: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnFyNGV6bzIyY3I4aGs4NTFsNm15bDhjcDFxeTYzc2lob3VxNXZwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pciDrSmCu2w6eY6Njf/giphy.gif',
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
                <img src={photo.src} alt={photo.title} loading="lazy" />
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