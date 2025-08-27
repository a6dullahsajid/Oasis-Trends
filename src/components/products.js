import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Products = ({
  products,
  currentFilter,
  onFilterChange,
  onProductClick
}) => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'finished-leather', name: 'Finished Leather' },
    { id: 'laptop-bags', name: 'Laptop & Messenger Bags' },
    { id: 'backpacks', name: 'Leather Backpacks' },
    { id: 'tote-bag', name: 'Ladies Tote Bags' },
    { id: 'belts', name: 'Leather Belts' },
    { id: 'duffel-bag', name: 'Duffle & Travel Bags' },
    { id: 'sling-bag', name: 'Sling Bags' },
    { id: 'wash-bag', name: 'Travel Accessories' },
  ]

  // Listen for category selection events from header dropdown
  useEffect(() => {
    const handleCategorySelect = (event) => {
      const { categoryId } = event.detail
      console.log('Products component received category selection:', categoryId)

      // Trigger the category filter change
      if (categoryId && onFilterChange) {
        onFilterChange(categoryId)
      }
    }

    // Add event listener
    window.addEventListener('selectCategory', handleCategorySelect)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('selectCategory', handleCategorySelect)
    }
  }, [onFilterChange])

  return (
    <section id="products" className="products-section">
      <div className="products-section__container">
        <div className="products-section__header">
          <h2 className="products-section__title">Our Products</h2>
          <div className="products-section__controls">
            <div className="products-section__filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`products-section__filter-button ${currentFilter === category.id ? 'products-section__filter-button--active' : ''
                    }`}
                  onClick={() => onFilterChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {currentFilter === 'all' && (
          <div className="products-section__all-products">
            <div className="products-section__all-image-container products-section__backpacks" onClick={() => onFilterChange('backpacks')}>
              <img src="./assets/all/backpacks.png" alt="Backpacks" className='products-section__all-backpacks' />
              <div className="products-section__all-category-name">Leather Backpacks</div>
            </div>
            <div className="products-section__all-image-container products-section__finished-leather" onClick={() => onFilterChange('finished-leather')}>
              <img src="./assets/all/finished.jpg" alt="Finished Leather" className='products-section__all-finished' />
              <div className="products-section__all-category-name">Finished Leather</div>
            </div>
            <div className="products-section__all-image-container products-section__belts" onClick={() => onFilterChange('belts')}>
              <img src="./assets/all/belts.png" alt="Leather Belts" className='products-section__all-belts' />
              <div className="products-section__all-category-name">Leather Belts</div>
            </div>
            <div className="products-section__all-image-container products-section__travel" onClick={() => onFilterChange('wash-bag')}>
              <img src="./assets/all/travel.png" alt="Travel Accessories" className='products-section__all-travel' />
              <div className="products-section__all-category-name">Travel Accessories</div>
            </div>
            <div className="products-section__all-image-container products-section__sling-bag" onClick={() => onFilterChange('sling-bag')}>
              <img src="./assets/all/slingbags.png" alt="Sling Bags" className='products-section__all-slingbags' />
              <div className="products-section__all-category-name">Sling Bags</div>
            </div>
            <div className="products-section__all-image-container products-section__tote-bag" onClick={() => onFilterChange('tote-bag')}>
              <img src="./assets/all/totebags.png" alt="Tote Bags" className='products-section__all-totebags' />
              <div className="products-section__all-category-name">Ladies Tote Bags</div>
            </div>
            <div className="products-section__all-image-container products-section__laptop-bags" onClick={() => onFilterChange('laptop-bags')}>
              <img src="./assets/all/laptop-bags.png" alt="Laptop Bags" className='products-section__all-laptop-bags' />
              <div className="products-section__all-category-name">Laptop Bags</div>
            </div>
            <div className="products-section__all-image-container products-section__duffel-bag" onClick={() => onFilterChange('duffel-bag')}>
              <img src="./assets/all/duffelbags.png" alt="Duffel Bags" className='products-section__all-duffelbags' />
              <div className="products-section__all-category-name">Duffle & Travel Bags</div>
            </div>
          </div>
        )}

        {currentFilter !== 'all' && (
          <div className="products-section__grid">
            {products.length === 0 ? (
              <div className="products-section__empty-state">
                <p>No products found matching your criteria.</p>
              </div>
            ) : (
              products.map(product => (
                <div key={product.id} className="products-section__card" data-category={product.category}>
                  <div className={`products-section__card-image-container ${product.category === 'finished-leather'
                    ? 'products-section__card-image-container--finished-leather'
                    : ''
                    }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`products-section__card-image ${product.category === 'finished-leather'
                        ? 'products-section__card-image--finished-leather'
                        : 'products-section__card-image--contained'
                        }`}
                    />
                  </div>
                  <div className="products-section__card-content">
                    <h3 className="products-section__card-title">{product.name}</h3>
                    <p className="products-section__card-style">Style No: {product.productStyle}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      productStyle: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

export default Products
