import React from 'react';
import '../index.css';          
import Navbar from '../Components/Navbar';
import AboutUs from '../Components/About Us';
import OurWorks from '../Components/Our Work';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clients from '../Components/Client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Blogs from '../Components/Blog';
import Footer from '../Components/Footer';


function HomePage() {
    return (
    <div>
        <Navbar/>
        <AboutUs/>                                              
        <OurWorks/>
        <Clients/>
        <Blogs/>
        <Footer/>

  </div>
);
}
export default HomePage;
