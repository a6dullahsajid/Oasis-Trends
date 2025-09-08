import React, { useEffect } from 'react'

const ProductModal = ({ isOpen, onClose, product, products, currentIndex, onNext, onPrev }) => {
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

  if (!isOpen || !product) return null

  return (
    <div className="product-modal" onClick={onClose}>
      <div className="product-modal__overlay">
        <div className="product-modal__container">
          <button 
            className="product-modal__nav product-modal__nav--prev" 
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <span>&#8249;</span>
          </button>
          <div className="product-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="product-modal__close" onClick={onClose}>
              <span>&times;</span>
            </button>
            <div className="product-modal__image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-modal__image"
              />
            </div>

            <div className="product-modal__info">
              <div className="product-modal__details">
                <h3 className="product-modal__title">{product.name}</h3>
                <p className="product-modal__style">Style No: {product.productStyle}</p>
                <p className="product-modal__category">
                  {product.subCategory ? product.subCategory.replace('-', ' ').toUpperCase() : product.category.replace('-', ' ').toUpperCase()}
                </p>
              </div>
              <div className="product-modal__actions">
                <a
                  href={`https://wa.me/916394938670?text=Hi Nabeel!\nI'm interested in ${product.name} (Style: ${product.productStyle}). Can you please provide more details and pricing?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-modal__whatsapp-btn"
                >
                  Get Quote
                  {/* <img
                    src="./assets/WhatsApp_logo.png"
                    alt="WhatsApp"
                    className="product-modal__whatsapp-icon"
                  /> */}
                </a>
              </div>
            </div>
          </div>

          <button 
            className="product-modal__nav product-modal__nav--next" 
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <span>&#8250;</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductModal