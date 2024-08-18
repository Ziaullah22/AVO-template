import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarNew.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar2() {
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
    <div className="main-navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <div className="logo-container">
            <span className="logo">a<span className="highlight">v</span>o</span>  
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">HOME<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="work">WORK</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="blog">BLOG</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`navbar-data ${isVisible ? 'slide-up' : ''}`}>
        <div className="explore-container">
          <a className="explore" href="/home">HOME</a> 
          <a className="explore-text" href="">BLOG</a>
          <h1>OUR BLOGS</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
