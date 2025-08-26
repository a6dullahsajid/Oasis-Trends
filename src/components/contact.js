import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Redirect to phone number - you can manually add the number here
    const phoneNumber = '+91-6394938670' // Replace with your actual number
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__container">
        <h2 className="contact-section__title">Contact Us</h2>
        
        <div className="contact-section__content">
          {/* Contact Details */}
          <div className="contact-section__info">
            <h3 className="contact-section__subtitle">Get In Touch</h3>
            <div className="contact-section__details">
              <div className="contact-section__detail-item">
                <div className="contact-section__detail-icon">
                  <img src="./assets/icons/address.png" alt="Address" />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>585/4 C NAI CHUNGI JAJMAU<br />
                  Uttar Pradesh<br />
                  India</p>
                </div>
              </div>
              
              <div className="contact-section__detail-item">
                <div className="contact-section__detail-icon">
                  <img src="./assets/icons/phone.png" alt="Contact Person" />
                </div>
                <div>
                  <h4>Contact Person</h4>
                  <p><strong>Mohammad Nabeel</strong><br />
                  Managing Partner<br />
                  <strong>Contact:</strong> +91 6394938670</p>
                </div>
              </div>
              
              <div className="contact-section__detail-item">
                <div className="contact-section__detail-icon">
                  <img src="./assets/icons/mail.png" alt="Email" />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@oasistrends.com</p>
                </div>
              </div>
              
              <div className="contact-section__detail-item">
                <div className="contact-section__detail-icon">
                  <img src="./assets/icons/clock.png" alt="Business Hours" />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
               

            </div>
          </div>

          {/* Enquiry Form */}
          <div className="contact-section__form-container">
            <h3 className="contact-section__subtitle">Enquire Here</h3>
            <form className="contact-section__form" onSubmit={handleSubmit}>
              <div className="contact-section__form-row">
                <div className="contact-section__form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="First Last"
                  />
                </div>
                <div className="contact-section__form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div className="contact-section__form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Your email address"
                />
              </div>
              
              <div className="contact-section__form-group">
                <label htmlFor="country">Which country do you reside in? *</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">- Please select -</option>
                  <option value="United States of America">United States of America</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Norway">Norway</option>
                  <option value="Finland">Finland</option>
                  <option value="India">India</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="contact-section__form-group">
                <label htmlFor="message">Comment or Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <button type="submit" className="contact-section__submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Contact
