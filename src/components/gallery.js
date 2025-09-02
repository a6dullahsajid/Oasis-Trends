import React from 'react'
import { appData } from '../data/app-data'

const Gallery = () => {
  const galleryImages = appData.gallery

  return (
    <div className="gallery-section">
      <h3 className="gallery-section__title">Our Manufacturing Facility</h3>
      <p className="gallery-section__subtitle">
        Take a behind-the-scenes look at our state-of-the-art manufacturing facility where 
        premium leather products are crafted with precision and care.
      </p>
      <div className="gallery-section__grid">
        {galleryImages.map(image => (
          <div key={image.id} className="gallery-section__item">
            <div className="gallery-section__image-container">
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-section__image"
                loading="lazy"
              />
            </div>
            <p className="gallery-section__caption">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
