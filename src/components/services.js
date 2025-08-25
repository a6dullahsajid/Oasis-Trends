import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Custom Leather Manufacturing",
      description: "We specialize in creating premium handmade leather products with exceptional craftsmanship tailored to your specifications.",
      icon: "/assets/icons/factory.png"
    },
    {
      id: 2,
      title: "Private Labeling Services",
      description: "Build your brand with our private labeling service. We manufacture high-quality leather goods with your branding and specifications.",
      icon: "/assets/icons/label.png"
    },
    {
      id: 3,
      title: "Bulk Manufacturing",
      description: "Large-scale production capabilities with 5000+ units monthly production capacity for businesses worldwide.",
      icon: "/assets/icons/bulk.png"
    },
    {
      id: 4,
      title: "Custom Design & Development",
      description: "Our expert team works with you to design and develop unique leather products that match your vision and requirements.",
      icon: "/assets/icons/customization.png"
    },
    {
      id: 5,
      title: "Quality Assurance",
      description: "We ensure 100% quality in every product with rigorous testing and quality control processes throughout manufacturing.",
      icon: "/assets/icons/verified.png"
    },
    {
      id: 6,
      title: "Global Export Services",
      description: "We export to 25+ countries worldwide with reliable shipping and logistics support for international clients.",
      icon: "/assets/icons/global.png"
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="services-section__container">
        <h2 className="services-section__title">Services Provided by Us</h2>
        <div className="services-section__grid">
          {services.map(service => (
            <div key={service.id} className="services-section__card">
              <div className="services-section__card-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <div className="services-section__card-content">
                <h3 className="services-section__card-title">{service.title}</h3>
                <p className="services-section__card-description">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

Services.propTypes = {}

export default Services
