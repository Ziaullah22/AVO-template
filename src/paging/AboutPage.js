import React from 'react';
// import '../index.css';         
import Navbar2 from '../Components/Navbar2';
import AboutUs from '../Components/About Us';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Clients from '../Components/Client';
import Footer from '../Components/Footer';
import Team from '../Components/Team';


function AboutPage() {
    return (
    <div>
        <Navbar2/>
        <AboutUs/> 
        <Team/> 
        <Clients/>
        <Footer/>                                 
  </div>
);
}
export default AboutPage;
