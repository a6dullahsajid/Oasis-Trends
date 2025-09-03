import React, { useState } from 'react'
import { appData } from '../data/app-data'
import GalleryModal from './gallery-modal'

const Gallery = () => {
  const galleryImages = appData.gallery
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (index) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="gallery-section">
      <h3 className="gallery-section__title">Our Manufacturing Facility</h3>
      {/* <p className="gallery-section__subtitle">
        Take a behind-the-scenes look at our state-of-the-art manufacturing facility where 
        premium leather products are crafted with precision and care.
      </p> */}
      <div className="gallery-section__grid">
        {galleryImages.map((image, index) => (
          <div key={image.id} className="gallery-section__item" onClick={() => openModal(index)}>
            <div className="gallery-section__image-container">
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-section__image"
                loading="lazy"
              />
            </div>
            {/* <p className="gallery-section__caption">{image.caption}</p> */}
          </div>
        ))}
      </div>

      <GalleryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={galleryImages[currentImageIndex]}
        images={galleryImages}
        currentIndex={currentImageIndex}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </div>
  )
}

export default Gallery
