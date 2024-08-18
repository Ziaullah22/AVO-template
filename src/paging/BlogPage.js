import React from 'react';
import '../index.css';          
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar4 from '../Components/Navbar4';
import Footer from '../Components/Footer';
import Blogs from '../Components/Blog';


function BlogPage() {
    return (
    <div>  
        <Navbar4/>
        <Blogs/>  
        <Footer/>                       
  </div>
);
}
export default BlogPage;