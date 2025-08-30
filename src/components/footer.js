import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerHeight = document.querySelector('.site-header').offsetHeight
      const sectionTop = section.offsetTop - headerHeight - 20
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__content">
          <div className="site-footer__section">
            <h3 className="site-footer__section-title">Oasis Trends</h3>
            <p className="site-footer__section-text">Manufacturer of Finished Leather and Leather Goods</p>
          </div>
          
          <div className="site-footer__section">
            <h4 className="site-footer__section-subtitle">Quick Links</h4>
            <ul className="site-footer__section-links">
              <li className="site-footer__section-link-item">
                <button 
                  className="site-footer__section-link"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </button>
              </li>
              <li className="site-footer__section-link-item">
                <button 
                  className="site-footer__section-link"
                  onClick={() => scrollToSection('products')}
                >
                  Products
                </button>
              </li>
              <li className="site-footer__section-link-item">
                <button 
                  className="site-footer__section-link"
                  onClick={() => scrollToSection('services')}
                >
                  Our Services
                </button>
              </li>
              <li className="site-footer__section-link-item">
                <button 
                  className="site-footer__section-link"
                  onClick={() => scrollToSection('about')}
                >
                  About
                </button>
              </li>
            </ul>
          </div>
          
          <div className="site-footer__section">
            <h4 className="site-footer__section-subtitle">Contact Info</h4>
            <div className="site-footer__section-contact">
              <p className="site-footer__section-contact-item">
                585/4 C, BLOCK, NAI CHUNGI JAJMAU, KANPUR, UTTAR PRADESH, INDIA
              </p>
              <p className="site-footer__section-contact-item">
                Phone: +91-6394938670
              </p>
              <p className="site-footer__section-contact-item">
                Email: info@oasistrends.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            &copy; 2025 Oasis Trends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
