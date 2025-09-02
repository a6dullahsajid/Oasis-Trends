import React from 'react'
import Gallery from './gallery'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-section__container">
        <div className="about-section__content">
          <h2 className="about-section__title">About Us</h2>
          <div className="about-section__text">
            <p className="about-section__paragraph">
              OASIS TRENDS stands as a premier manufacturer and global exporter of premium leather and non-leather accessories. 
              Our organization is distinguished by leadership with over 8 years of progressive industry expertise, enabling us 
              to deliver exceptional quality products that combine innovative technology with traditional craftsmanship. 
              We take pride in our comprehensive in-house manufacturing capabilities, ensuring complete control over every 
              aspect of production from concept to completion.
            </p>
            <p className="about-section__paragraph">
              At the core of our business philosophy lies a steadfast commitment to ethical business practices and 
              sustainable operations. We maintain rigorous standards for our business partnerships, collaborating exclusively 
              with long-term, strategic suppliers who share our values of worker welfare, safe working environments, 
              and corporate responsibility. This commitment extends throughout our supply chain, ensuring that every 
              product we deliver reflects our dedication to excellence and integrity.
            </p>
          </div>
        </div>
        <Gallery />
      </div>
    </section>
  )
}

export default About
