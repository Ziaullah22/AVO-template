import React, { useEffect, useRef } from 'react';
import './About Us.css'; // Ensure to create this CSS file for styling
import { FaRegLightbulb, FaLaptopCode, FaBoxOpen, FaMobileAlt, FaSearch } from 'react-icons/fa';

function AboutUs() {
  const aboutUsRef = useRef(null);

  const handleScroll = () => {
    if (aboutUsRef.current) {
      const rect = aboutUsRef.current.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        aboutUsRef.current.classList.add('visible');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-us" ref={aboutUsRef}>
      <div className="about-us-heading">
        <h2>ABOUT US</h2>
      </div>
      <div className="about-us-content">
        <div className="column">
          <FaRegLightbulb className="icon" />
          <h5>UI/UX Design</h5>
        </div>
        <div className="column">
          <FaLaptopCode className="icon" />
          <h5>Web Development</h5>
        </div>
        <div className="column">
          <FaBoxOpen className="icon" />
          <h5>Product Design</h5>
        </div>
        <div className="column">
          <FaMobileAlt className="icon" />
          <h5>Mobile Apps</h5>
        </div>
        <div className="column">
          <FaSearch className="icon" />
          <h5>SEO</h5>
        </div>
      </div>
      <div className="about-us-row">
        <div className="about-us-row-column">
          <h4>Welcome to AVO A</h4>
          <h4>Personal Portfolio</h4>
          <h4>Web Agency</h4>
          <p>
            We are a dynamic web agency dedicated to providing innovative solutions for your digital needs. Our expertise spans across UI/UX design, web development, product design, mobile applications, and SEO. With a team of skilled professionals, we ensure that every project is executed with precision and creativity, helping you achieve your business goals and stand out in the digital world. Whether you're looking to enhance your online presence or develop a new product, we have the tools and knowledge to make it happen.
          </p>
        </div>
        <div className="about-us-row-column">
        </div>
        <div className="about-us-row-column">
          <p>
            We are a dynamic web agency dedicated to providing innovative solutions for your digital needs. Our expertise spans across UI/UX design, web development, product design, mobile applications, and SEO. With a team of skilled professionals, we ensure that every project is executed with precision and creativity, helping you achieve your business goals and stand out in the digital world. Whether you're looking to enhance your online presence or develop a new product, we have the tools and knowledge to make it happen.
          </p>
          <a href="#" className="view-all-projects">View all projects</a>
        </div>
      </div>
      <div className="about-us-row-new">
        <div className="about-us-row-new-column">
          <div className="text-container">
            <span className="number">01</span>
            <span className="text">Search Engine Optimization</span>
            <p>Far far away, behind the word mountains</p>
          </div>
        </div>
        <div className="about-us-row-new-column">
          <div className="text-container">
            <span className="number">02</span>
            <span className="text">Search Engine Optimization</span>
            <p>Far far away, behind the word mountains</p>
          </div>
        </div>
        <div className="about-us-row-new-column">
          <div className="text-container">
            <span className="number">03</span>
            <span className="text">Search Engine Optimization</span>
            <p>Far far away, behind the word mountains</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
