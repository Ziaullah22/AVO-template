import React from 'react';
import Slider from 'react-slick';
import './Client.css'; // Ensure this file contains your updated CSS



const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="clients">
      <h2 className="clients-title">CLIENTS SAY ABOUT US?</h2>
      <Slider {...settings}>
        <div className="client">
          <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
          <p className="client-quote">
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          </p>
          <div className="client-profile">
            <img src="\images\person_1.jpg.webp" alt="John Doe" className="client-profile-pic" />
            <div className="client-info">
              <p className="client-name">John Doe</p>
              <p className="client-post">Marketing Manager</p>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
          <p className="client-quote">
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          </p>
          <div className="client-profile">
            <img src="\images\person_2.jpg.webp" alt="Jane Smith" className="client-profile-pic" />
            <div className="client-info">
              <p className="client-name">Jane Smith</p>
              <p className="client-post">Product Designer</p>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
          <p className="client-quote">
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          </p>
          <div className="client-profile">
            <img src="\images\person_3.jpg.webp" alt="Mary Johnson" className="client-profile-pic" />
            <div className="client-info">
              <p className="client-name">Mary Johnson</p>
              <p className="client-post">UX Designer</p>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
          <p className="client-quote">
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          </p>
          <div className="client-profile">
            <img src="\images\person_1.jpg.webp" alt="James Brown" className="client-profile-pic" />
            <div className="client-info">
              <p className="client-name">James Brown</p>
              <p className="client-post">Sales Manager</p>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
          <p className="client-quote">
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          </p>
          <div className="client-profile">
            <img src="\images\person_2.jpg.webp" alt="Patricia Davis" className="client-profile-pic" />
            <div className="client-info">
              <p className="client-name">Patricia Davis</p>
              <p className="client-post">Customer Support</p>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
          <p className="client-quote">
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          </p>
          <div className="client-profile">
            <img src="\images\person_3.jpg.webp" alt="Robert Miller" className="client-profile-pic" />
            <div className="client-info">
              <p className="client-name">Robert Miller</p>
              <p className="client-post">HR Specialist</p>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="quote-icon"><i className="fa fa-quote-left"></i></div>
          <p className="client-quote">
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          </p>
          <div className="client-profile">
            <img src="\images\person_2.jpg.webp" alt="Linda Wilson" className="client-profile-pic" />
            <div className="client-info">
              <p className="client-name">Linda Wilson</p>
              <p className="client-post">Finance Manager</p>
            </div>
          </div>
        </div>
      </Slider>
      <div className="full-width-image-container">
        <img src="\images\bg_1.jpg.webp" alt="Full Width" className="full-width-image" />
        <div className="get-started-text">Get Started</div>
        <h3>Fill in the brief and get the project estimate</h3>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <a href="http://localhost:3000/"><button className="get-started-button">Get Started</button></a>
      </div>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default Clients;
