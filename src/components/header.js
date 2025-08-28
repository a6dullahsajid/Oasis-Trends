import React, { useState, useEffect } from 'react'
import { appData } from '../data/app-data.js'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'services', 'about', 'contact']
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80
      const scrollPosition = window.scrollY + headerHeight + 150

      let currentActive = 'home'

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentActive = sections[i]
            break
          }
        }
      }

      setActiveSection(currentActive)
    }

    window.addEventListener('scroll', handleScroll)
    // Call once on mount to set initial active section
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Close products dropdown when mobile menu is toggled
    if (isProductsDropdownOpen) {
      setIsProductsDropdownOpen(false)
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    // Close products dropdown when mobile menu is closed
    if (isProductsDropdownOpen) {
      setIsProductsDropdownOpen(false)
    }
  }

  const scrollToSection = (sectionId) => {
    console.log('Attempting to scroll to:', sectionId)
    const section = document.getElementById(sectionId)
    console.log('Section found:', section)

    if (section) {
      const headerHeight = document.querySelector('.site-header').offsetHeight
      const sectionTop = section.offsetTop - headerHeight - 20
      console.log('Scrolling to position:', sectionTop)

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    } else {
      console.log('Section not found with ID:', sectionId)
    }
    closeMobileMenu()
  }

  const scrollToCategory = (categoryId) => {
    // First scroll to products section
    scrollToSection('products')
    
    // Dispatch a custom event to trigger category selection in products section
    setTimeout(() => {
      const categorySelectEvent = new CustomEvent('selectCategory', {
        detail: { categoryId: categoryId }
      })
      window.dispatchEvent(categorySelectEvent)
      console.log('Dispatched category selection event for:', categoryId)
    }, 1000)
  }

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen)
  }

  const closeProductsDropdown = () => {
    setIsProductsDropdownOpen(false)
  }

  const handleProductsMouseEnter = () => {
    // Only show dropdown on hover for desktop devices
    if (!isMobile && !isMobileMenuOpen) {
      setIsProductsDropdownOpen(true)
    }
  }

  const handleProductsMouseLeave = () => {
    // Only hide dropdown on mouse leave for desktop devices
    if (!isMobile && !isMobileMenuOpen) {
      setTimeout(() => {
        setIsProductsDropdownOpen(false)
      }, 500)
    }
  }

  const getNavItemClass = (sectionId) => {
    const baseClass = 'site-navigation__menu-link'
    return activeSection === sectionId ? `${baseClass} ${baseClass}--active` : baseClass
  }

  return (
    <header className="site-header">
      <nav className="site-navigation">
        <div className="site-navigation__container">
          <div className="site-navigation__brand">
            <img src="./assets/oasis-trends-logo.png" alt="Oasis Trends Logo" className="site-navigation__brand-logo" />
            <div className="site-navigation__brand-text">
              <h1 className="site-navigation__brand-title">OASIS TRENDS</h1>
              <p className="site-navigation__brand-tagline">MANUFACTURER OF FINISHED LEATHER AND LEATHER GOODS</p>
            </div>
          </div>

          <ul className={`site-navigation__menu ${isMobileMenuOpen ? 'site-navigation__menu--mobile-open' : ''}`}>
            <li className="site-navigation__menu-item">
              <button
                className={getNavItemClass('home')}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li 
              className="site-navigation__menu-item site-navigation__menu-item--has-dropdown"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                className={getNavItemClass('products')}
                onClick={() => {
                  if (isMobile) {
                    // On mobile, only toggle dropdown, don't scroll
                    toggleProductsDropdown()
                  } else {
                    // On desktop, scroll to products section
                    scrollToSection('products')
                  }
                }}
              >
                Our Products
                <span className="site-navigation__dropdown-arrow"> v</span>
              </button>
              {isProductsDropdownOpen && (
                <div 
                  className="site-navigation__dropdown"
                >
                  {appData.categories.map((category) => (
                    <button
                      key={category.id}
                      className="site-navigation__dropdown-item"
                      onClick={() => {
                        scrollToCategory(category.id)
                        closeProductsDropdown()
                      }}
                    >
                      <span className="site-navigation__dropdown-item-name">{category.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </li>
            <li className="site-navigation__menu-item">
              <button
                className={getNavItemClass('services')}
                onClick={() => scrollToSection('services')}
              >
                Services
              </button>
            </li><li className="site-navigation__menu-item">
              <button
                className={getNavItemClass('about')}
                onClick={() => scrollToSection('about')}
              >
                About Us
              </button>
            </li>

            <li className="site-navigation__menu-item">
              <button
                className={getNavItemClass('contact')}
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </button>
            </li>
          </ul>

          <button
            className={`site-navigation__mobile-toggle ${isMobileMenuOpen ? 'site-navigation__mobile-toggle--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="site-navigation__mobile-toggle-line"></span>
            <span className="site-navigation__mobile-toggle-line"></span>
            <span className="site-navigation__mobile-toggle-line"></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
