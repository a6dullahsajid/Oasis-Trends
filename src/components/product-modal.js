import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
const ProductModal = ({ product, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  if (!isOpen || !product) return null

  return (
    <div className="product-modal">
      <div className="product-modal__overlay" onClick={onClose}></div>
      <div className="product-modal__content">
        <button 
          className="product-modal__close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        
        <div className="product-modal__body">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-modal__product-image"
          />
          <h2 className="product-modal__product-title">{product.name}</h2>
          <p className="product-modal__product-description">
            {product.description}
          </p>
          
          <div className="product-modal__product-details">
            <div className="product-modal__detail-item">
              <span className="product-modal__detail-label">Product Code:</span>
              <span className="product-modal__detail-value">{product.productCode}</span>
            </div>
            <div className="product-modal__detail-item">
              <span className="product-modal__detail-label">Material:</span>
              <span className="product-modal__detail-value">{product.material}</span>
            </div>
            <div className="product-modal__detail-item">
              <span className="product-modal__detail-label">Available Colors:</span>
              <span className="product-modal__detail-value">
                {product.colors.join(', ')}
              </span>
            </div>
            <div className="product-modal__detail-item">
              <span className="product-modal__detail-label">Dimensions:</span>
              <span className="product-modal__detail-value">{product.dimensions}</span>
            </div>
            <div className="product-modal__detail-item">
              <span className="product-modal__detail-label">Weight:</span>
              <span className="product-modal__detail-value">{product.weight}</span>
            </div>
            <div className="product-modal__detail-item">
              <span className="product-modal__detail-label">Features:</span>
              <span className="product-modal__detail-value">
                {product.features.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    productCode: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    dimensions: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ProductModal
