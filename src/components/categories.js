import React from 'react'
import PropTypes from 'prop-types'

const Categories = ({ categories, onCategoryClick }) => {
  return (
    <section id="categories" className="categories-section">
      <div className="categories-section__container">
        <h2 className="categories-section__title">Our Product Categories</h2>
        <div className="categories-section__grid">
          {categories.map(category => (
            <div 
              key={category.id}
              className="categories-section__card"
              onClick={() => onCategoryClick(category.id)}
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="categories-section__card-image"
              />
              <div className="categories-section__card-content">
                <h3 className="categories-section__card-title">{category.name}</h3>
                <p className="categories-section__card-description">
                  {category.description}
                </p>
                <span className="categories-section__card-count">
                  {category.count} Products
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
}

export default Categories
