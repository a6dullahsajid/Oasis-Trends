import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Custom Leather Manufacturing",
      description: "Premium bespoke leather manufacturing with master craftsmanship, delivering exceptional quality products tailored to your exact specifications and design requirements.",
      icon: "./assets/icons/factory.png"
    },
    {
      id: 2,
      title: "Private Labeling Services",
      description: "Comprehensive private labeling solutions enabling you to establish your brand identity with premium leather goods manufactured to your exact specifications and quality standards.",
      icon: "./assets/icons/label.png"
    },
    {
      id: 3,
      title: "Craftsmanship & Detailing",
      description: "Skilled craftsmen who carefully hand-stitch every seam, finish edges perfectly, and pay attention to every detail to create beautiful, long-lasting leather products.",
      icon: "./assets/icons/craftsmenship.png"
    },
    {
      id: 4,
      title: "Custom Design & Development",
      description: "Collaborative design and development services where our expert team transforms your creative vision into exceptional leather products through innovative design solutions.",
      icon: "./assets/icons/customization.png"
    },
    {
      id: 5,
      title: "Quality Assurance",
      description: "Comprehensive quality management system ensuring 100% product excellence through rigorous testing, inspection protocols, and continuous quality monitoring.",
      icon: "./assets/icons/verified.png"
    },
    {
      id: 6,
      title: "Global Export Services",
      description: "International trade expertise with seamless export services to 15+ countries, supported by reliable logistics, customs compliance, and dedicated customer service.",
      icon: "./assets/icons/global.png"
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
