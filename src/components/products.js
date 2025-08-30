import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Products = ({
  products,
  currentFilter,
  onFilterChange,
  onProductClick
}) => {
  const [showBagSubControls, setShowBagSubControls] = useState(false)

  const mainCategories = [
    { id: 'all', name: 'All Products' },
    { id: 'finished-leather', name: 'Finished Leather' },
    { id: 'leather-bags', name: 'Leather Bags', hasSubControls: true },
    { id: 'belts', name: 'Leather Belts' },
    { id: 'wash-bag', name: 'Leather Accessories' },
  ]

  const bagSubCategories = [
    { id: 'leather-bags', subId: 'leather-bags', name: 'All Bags' },
    { id: 'leather-bags', subId: 'laptop-bags', name: 'Laptop & Messenger Bags' },
    { id: 'leather-bags', subId: 'backpacks', name: 'Leather Backpacks' },
    { id: 'leather-bags', subId: 'tote-bag', name: 'Ladies Tote Bags' },
    { id: 'leather-bags', subId: 'duffel-bag', name: 'Duffle & Travel Bags' },
    { id: 'leather-bags', subId: 'sling-bag', name: 'Sling Bags' },
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

  const handleCategoryClick = (categoryId, hasSubControls) => {
    console.log('Category clicked:', categoryId, 'hasSubControls:', hasSubControls)
    
    if (hasSubControls) {
      // For Leather Bags, show all bag products and display sub-controls
      console.log('Setting filter to leather-bags and showing sub-controls')
      onFilterChange('leather-bags')
      setShowBagSubControls(true)
    } else {
      console.log('Setting filter to:', categoryId)
      onFilterChange(categoryId)
      // Check if the selected category is a bag category
      const isBagCategory = bagSubCategories.some(bagCat => bagCat.subId === categoryId)
      console.log('Is bag category:', isBagCategory)
      setShowBagSubControls(isBagCategory)
    }
  }

  // Auto-show sub-controls when viewing bag categories
  useEffect(() => {
    const isBagCategory = bagSubCategories.some(bagCat => bagCat.subId === currentFilter)
    if (isBagCategory) {
      setShowBagSubControls(true)
    }
  }, [currentFilter, bagSubCategories])

  return (
    <section id="products" className="products-section">
      <div className="products-section__container">
        <div className="products-section__header">
          <h2 className="products-section__title">Our Products</h2>
          <div className="products-section__controls">
            <div className="products-section__filters">
              {mainCategories.map(category => (
                <button
                  key={category.id}
                  className={`products-section__filter-button ${
                    currentFilter === category.id || 
                    (category.id === 'leather-bags' && bagSubCategories.some(bagCat => bagCat.subId === currentFilter))
                      ? 'products-section__filter-button--active' 
                      : ''
                  }`}
                  onClick={() => handleCategoryClick(category.id, category.hasSubControls)}
                >
                  {category.name}
                  {/* {category.hasSubControls && (
                    <span className="products-section__filter-arrow"> ›</span>
                  )} */}
                </button>
              ))}
            </div>
            
            {/* Sub-controls for Leather Bags - displayed inline */}
            {showBagSubControls && (
              <div className="products-section__sub-controls-inline">
                {bagSubCategories.map(subCategory => (
                  <button
                    key={subCategory.subId}
                    className={`products-section__sub-filter-button ${currentFilter === subCategory.subId ? 'products-section__sub-filter-button--active' : ''
                      }`}
                    onClick={() => {
                      console.log('Sub-control clicked:', subCategory.subId)
                      console.log('Setting filter to:', subCategory.subId)
                      onFilterChange(subCategory.subId)
                      // Don't hide sub-controls - keep them visible for bag categories
                    }}
                  >
                    {subCategory.name}
                  </button>
                ))}
              </div>
            )}
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

        {/* Special case for Leather Bags - show all bag products */}
        {currentFilter === 'leather-bags' && (
          <div className="products-section__grid">
            {products.filter(product => 
              product.category === 'leather-bags'
            ).map(product => (
              <div key={product.id} className="products-section__card" data-category={product.subCategory}>
                <div className="products-section__card-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="products-section__card-image--contained"
                  />
                </div>
                <div className="products-section__card-content">
                  <h3 className="products-section__card-title">{product.name}</h3>
                  <p className="products-section__card-style">Style No: {product.productStyle}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Show products for specific sub-categories */}
        {currentFilter !== 'all' && currentFilter !== 'leather-bags' && (
          <div className="products-section__grid">
            {(() => {
              console.log('Filtering for:', currentFilter)
              console.log('Available products:', products)
              
              const filteredProducts = products.filter(product => {
                // For bag products, check subCategory
                if (product.category === 'leather-bags') {
                  console.log('Bag product:', product.name, 'subCategory:', product.subCategory, 'currentFilter:', currentFilter)
                  return product.subCategory === currentFilter
                }
                // For non-bag products, check category directly
                console.log('Non-bag product:', product.name, 'category:', product.category, 'currentFilter:', currentFilter)
                return product.category === currentFilter
              })
              
              console.log('Filtered products:', filteredProducts)
              
              if (filteredProducts.length === 0) {
                return (
                  <div className="products-section__empty-state">
                    <p>No products found matching your criteria.</p>
                    <p>Filter: {currentFilter}</p>
                    <p>Available categories: {[...new Set(products.map(p => p.category))].join(', ')}</p>
                    <p>Available subCategories: {[...new Set(products.filter(p => p.subCategory).map(p => p.subCategory))].join(', ')}</p>
                  </div>
                )
              }
              
              return filteredProducts.map(product => (
                <div key={product.id} className="products-section__card" data-category={product.subCategory || product.category}>
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
            })()}
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
      subCategory: PropTypes.string,
      image: PropTypes.string.isRequired,
      productStyle: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

export default Products

