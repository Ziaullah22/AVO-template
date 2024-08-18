import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="custom-navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <span className="logo">a<span className="red-v">v</span>o</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i> {/* Font Awesome icon */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">HOME<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">ABOUT</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="work">WORK</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog">BLOG</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`navbar-content ${isVisible ? 'slide-up' : ''}`}>
        <div className="navbar-heading">
          <h2>WE CREATE</h2>
          <h2>MODERN &</h2>
          <h2>MINIMAL WEBSITES</h2>
          <p className="heading-paragraph">We focus on delivering high-quality, aesthetically pleasing websites that are both functional and visually appealing.</p>
          <a className="explore-button" href="#">Explore Projects</a>
        </div>
        <div className="experience-info">
          <div className="experience-number">21</div>
          <div className="experience-details">
            <div className="vertical-line"></div>
            <div className="experience-text">
              <p>Years of <br /> Experienced</p>
            </div>
          </div>
        </div>
        <div className="video-icon-container">
          <a className="video-icon" href="#">
            <i className="fa fa-play"></i> {}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
