import React from 'react'
import PropTypes from 'prop-types'

const Products = ({ 
  products, 
  currentFilter, 
  searchQuery, 
  onSearch, 
  onFilterChange, 
  onProductClick 
}) => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'laptop-bags', name: 'Laptop & Messenger Bags' },
    { id: 'backpacks', name: 'Leather Backpacks' },
    { id: 'tote-bag', name: 'Ladies Tote Bags' },
    { id: 'duffel-bag', name: 'Duffle & Travel Bags' },
    { id: 'sling-bag', name: 'Sling Bags' },
    { id: 'wash-bag', name: 'Travel Accessories' },
    { id: 'belts', name: 'Leather Belts' }
  ]

  return (
    <section id="products" className="products-section">
      <div className="products-section__container">
        <div className="products-section__header">
          <h2 className="products-section__title">Our Products</h2>
          <div className="products-section__controls">
            <div className="products-section__search">
              <input 
                type="text" 
                className="products-section__search-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <div className="products-section__filters">
              {categories.map(category => (
                <button 
                  key={category.id}
                  className={`products-section__filter-button ${
                    currentFilter === category.id ? 'products-section__filter-button--active' : ''
                  }`}
                  onClick={() => onFilterChange(category.id)}
                >
                  {category.name}
                </button> 
              ))}
            </div>
          </div>
        </div>
        
        <div className="products-section__grid">
          {products.length === 0 ? (
            <div className="products-section__empty-state">
              <p>No products found matching your criteria.</p>
            </div>
          ) : (
            products.map(product => (
              <div key={product.id} className="products-section__card" data-category={product.category}>
                <div className="products-section__card-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="products-section__card-image products-section__card-image--contained"
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
  searchQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

export default Products
