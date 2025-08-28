import React, { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Carousel slides with industry-focused content
  const slides = [
    {
      id: 1,
      image: './assets/industry_image1.jpg',
      title: 'Crafting Excellence',
      subtitle: 'Premium Leather Manufacturing',
      description: 'Experience the pinnacle of leather craftsmanship with our state-of-the-art manufacturing facility. We transform premium materials into exceptional products that embody your brand vision.',
      cta: 'Explore Products'
    },
    {
      id: 2,
      image: './assets/industry_image2.jpg',
      title: 'Premium Finished Leather',
      subtitle: 'Quality Materials, Superior Results',
      description: 'Source the finest finished leather materials for your manufacturing needs. Our premium leather selection ensures exceptional durability, texture, and finish for superior end products.',
      cta: 'Contact Us'
    },
    {
      id: 3,
      image: './assets/industry_image3.jpg',
      title: 'Global Leather Solutions',
      subtitle: 'Manufacturing Excellence Worldwide',
      description: 'Partner with a trusted manufacturer serving 15+ countries. Our commitment to quality, innovation, and timely delivery makes us the preferred choice for international businesses.',
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
              As a leading manufacturer with over 8 years of expertise, we specialize in crafting premium finished leather and leather bags, alongside belts, and lifestyle accessories. Our commitment to quality and precision has made us a trusted partner for businesses worldwide. With a strong focus on private labeling and custom manufacturing, we deliver tailored solutions that reflect elegance, durability, and distinction in every product.</p>
            {/* <div className="hero-section__features">
              <div className="hero-section__feature">
                <span>2000+ Units Monthly Production</span>
              </div>
              <div className="hero-section__feature">
                <span>Exporting to 15+ Countries</span>
              </div>
              <div className="hero-section__feature">
                <span>100% Real Leather Products</span>
              </div>
            </div> */}
          </div>

          <div className="hero-section__stats">
            <div className="hero-section__stat-item">
              <div className="hero-section__stat-content">
                <span className="hero-section__stat-number">8+</span>
                <span className="hero-section__stat-label">Years of Experience</span>
              </div>
            </div>

            <div className="hero-section__stat-item">
              <div className="hero-section__stat-content">
                <span className="hero-section__stat-number">3000+</span>
                <span className="hero-section__stat-label">Monthly Production</span>
              </div>
            </div>

            <div className="hero-section__stat-item">
              <div className="hero-section__stat-content">
                <span className="hero-section__stat-number">15+</span>
                <span className="hero-section__stat-label">Countries Served</span>
              </div>
            </div>

            <div className="hero-section__stat-item">
              <div className="hero-section__stat-content">
                <span className="hero-section__stat-number">100%</span>
                <span className="hero-section__stat-label">Real Leather</span>
              </div>
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
