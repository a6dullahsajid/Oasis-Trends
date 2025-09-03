import React, { useEffect } from 'react'

const GalleryModal = ({ isOpen, onClose, image, images, currentIndex, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowRight') {
        onNext()
      } else if (event.key === 'ArrowLeft') {
        onPrev()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen || !image) return null

  return (
    <div className="gallery-modal" onClick={onClose}>
      <div className="gallery-modal__overlay">
        <div className="gallery-modal__content" onClick={(e) => e.stopPropagation()}>
          <button className="gallery-modal__close" onClick={onClose}>
            <span>&times;</span>
          </button>
          
          {images && images.length > 1 && (
            <>
              <button className="gallery-modal__nav gallery-modal__nav--prev" onClick={onPrev}>
                <span>&#8249;</span>
              </button>
              <button className="gallery-modal__nav gallery-modal__nav--next" onClick={onNext}>
                <span>&#8250;</span>
              </button>
            </>
          )}

          <div className="gallery-modal__image-container">
            <img 
              src={image.src} 
              alt={image.alt}
              className="gallery-modal__image"
            />
          </div>

                     {/* <div className="gallery-modal__info">
             <h3 className="gallery-modal__caption">{image.caption}</h3>
           </div> */}
        </div>
      </div>
    </div>
  )
}

export default GalleryModal
