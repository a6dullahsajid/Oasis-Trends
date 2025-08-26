import React, { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const statsRefs = useRef([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Carousel slides with industry-focused content
  const slides = [
    {
      id: 1,
      image: './assets/industry_image1.jpg',
      title: 'Our Factory, Your Brand',
      subtitle: 'Custom Leather Goods Manufacturer',
      description: 'We specialize in creating premium handmade leather products with exceptional craftsmanship. Our products are designed to last and reflect your unique style.',
      cta: 'Explore Products'
    },
    {
      id: 2,
      image: './assets/industry_image2.jpg',
      title: 'Bespoke Leather Goods',
      subtitle: 'Tailored to Perfection',
      description: 'Stand out from the crowd with our premium leather goods. Contact us today to discuss your private labeling needs and custom requirements.',
      cta: 'Contact Us'
    },
    {
      id: 3,
      image: './assets/industry_image3.jpg',
      title: 'Luxury Redefined',
      subtitle: 'Customized for You',
      description: 'Looking to add a touch of luxury to your brand? Our private labeling service offers custom-made leather goods perfect for your business.',
      cta: 'Get Quote'
    }
  ]

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length, isPaused])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    statsRefs.current.forEach(stat => {
      if (stat) observer.observe(stat)
    })

    return () => observer.disconnect()
  }, [])



  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'))
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0
    
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      
      if (target >= 1000) {
        element.textContent = Math.floor(current).toLocaleString() + '+'
      } else {
        element.textContent = Math.floor(current) + (target === 100 ? '%' : '+')
      }
    }, 16)
  }

  const handleCTAAction = (slideIndex) => {
    switch (slideIndex) {
      case 0: // Explore Products
        const productsSection = document.getElementById('products')
        if (productsSection) {
          const headerHeight = document.querySelector('.site-header').offsetHeight
          const sectionTop = productsSection.offsetTop - headerHeight - 20
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
          })
        }
        break
      case 1: // Contact Us
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          const headerHeight = document.querySelector('.site-header').offsetHeight
          const sectionTop = contactSection.offsetTop - headerHeight - 20
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
          })
        }
        break
      case 2: // Get Quote
        // For now, scroll to products section as a fallback
        const productsFallback = document.getElementById('products')
        if (productsFallback) {
          const headerHeight = document.querySelector('.site-header').offsetHeight
          const sectionTop = productsFallback.offsetTop - headerHeight - 20
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
          })
        }
        break
      default:
        break
    }
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-section__container">
        {/* Carousel Section */}
        <div className="hero-section__carousel">
          <div 
            className="hero-carousel" 
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="hero-carousel__track">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className={`hero-carousel__slide ${currentSlide === index ? 'hero-carousel__slide--active' : ''}`}
                >
                  <div className="hero-carousel__content">
                    <div className="hero-carousel__text">
                      <h1 className="hero-carousel__title">{slide.title}</h1>
                      <h2 className="hero-carousel__subtitle">{slide.subtitle}</h2>
                      <p className="hero-carousel__description">{slide.description}</p>
                      <button 
                        className="hero-carousel__cta-button"
                        onClick={() => handleCTAAction(index)}
                      >
                        {slide.cta}
                      </button>
                    </div>
                    <div 
                      className="hero-carousel__image"
                      style={{ backgroundImage: `url(${slide.image})` }}
                      aria-label={slide.title}
                    />
                  </div>
                </div>
              ))}
            </div>
            

            
            {/* Dots Indicator */}
            <div className="hero-carousel__dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`hero-carousel__dot ${currentSlide === index ? 'hero-carousel__dot--active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="hero-section__info">
          <div className="hero-section__company-intro">
            <h2 className="hero-section__company-title">Oasis Trends</h2>
            <p className="hero-section__company-description">
              Leading custom leather goods manufacturer with 8+ years of experience. We produce 
              high-quality leather products including bags, wallets, belts, and accessories. 
              Specializing in private labeling and custom manufacturing for businesses worldwide.
            </p>
            <div className="hero-section__features">
              <div className="hero-section__feature">
                <img src="./assets/icons/factory.png" alt="Factory" className="hero-section__feature-icon" />
                <span>2000+ Units Monthly Production</span>
              </div>
              <div className="hero-section__feature">
                <img src="./assets/icons/global.png" alt="Global" className="hero-section__feature-icon" />
                <span>Exporting to 15+ Countries</span>
              </div>
              <div className="hero-section__feature">
                <img src="./assets/icons/verified.png" alt="Verified" className="hero-section__feature-icon" />
                <span>100% Real Leather Products</span>
              </div>
            </div>
          </div>
          
          <div className="hero-section__stats">
            <div className="hero-section__stat-item">
              <span 
                className="hero-section__stat-number" 
                data-target="8"
                ref={el => statsRefs.current[0] = el}
              >
                0
              </span>
              <span className="hero-section__stat-label">Years of Experience</span>
            </div>
            
            <div className="hero-section__stat-item">
              <span 
                className="hero-section__stat-number" 
                data-target="2000"
                ref={el => statsRefs.current[1] = el}
              >
                0
              </span>
              <span className="hero-section__stat-label">Monthly Production</span>
            </div>
            
            <div className="hero-section__stat-item">
              <span 
                className="hero-section__stat-number" 
                data-target="15"
                ref={el => statsRefs.current[2] = el}
              >
                0
              </span>
              <span className="hero-section__stat-label">Countries Served</span>
            </div>
            
            <div className="hero-section__stat-item">
              <span 
                className="hero-section__stat-number" 
                data-target="100"
                ref={el => statsRefs.current[3] = el}
              >
                0
              </span>
              <span className="hero-section__stat-label">Real Leather</span>
            </div>
          </div>
        </div>
        
        {/* Floating WhatsApp Button */}
        <div className="hero-section__whatsapp-float">
          <a 
            href="https://wa.me/916394938670?text=Hi Nabeel! I'm interested in your leather products. Can you please provide more information?"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-section__whatsapp-btn"
            aria-label="Chat on WhatsApp"
          >
            <img src="./assets/WhatsApp_logo.png" alt="WhatsApp" />
            <div className="hero-section__whatsapp-btn-text">
              Enquire
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
