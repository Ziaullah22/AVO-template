import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import './Contact.css'; // Import your custom CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">HAVE A PROJECT?</h1>
      <p className="contact-paragraph">
        We would love to hear about your project. Whether you have a big idea or just want to discuss your needs, feel free to reach out to us. Our team is ready to help you bring your vision to life with our expertise and experience.
      </p>
      <div className="contact-content">
        <form className="contact-form">

          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <input type="text" id="subject" name="subject" placeholder="Subject" required />

          <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
            <br />
          <div className="contact-info-item">
            <FaMapMarkerAlt className="contact-info-icon" />
            <span>198 West 21th Street, Suite 721 New York NY 10016</span>
          </div>
          <br />
          <div className="contact-info-item">
            <FaPhoneAlt className="contact-info-icon" />
            <span>+1235 2355 98</span>
          </div>
          <br />
          <div className="contact-info-item">
            <FaEnvelope className="contact-info-icon" />
            <span>info@yoursite.com</span>
          </div>
          <br />
          <div className="contact-info-item">
            <FaGlobe className="contact-info-icon" />
            <span>yoursite.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
