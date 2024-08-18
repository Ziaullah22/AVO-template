import React from 'react';
import '../index.css';          
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar5 from '../Components/Navbar5';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';


function ContactPage() {
    return (
    <div>
        <Navbar5/>
        <Contact/>
        <Footer/>
                                         
  </div>
);
}
export default ContactPage;