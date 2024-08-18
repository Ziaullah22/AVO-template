import React from 'react';
import '../index.css';          
import Navbar3 from '../Components/Navbar3';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Components/Footer';
import OurWorks from '../Components/Our Work';



function WorkPage() {
    return (
    <div> 
        <Navbar3/> 
        <OurWorks/>
        <Footer/>                                    
  </div>
);
}
export default WorkPage;
