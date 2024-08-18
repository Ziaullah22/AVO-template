// Team.js
import React from 'react';
import './Team.css'; // Make sure to create this CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

const teamMembers = [
  { name: 'Alice Smith', post: 'Web Designer', image: '/images/team-1.jpg.webp' },
  { name: 'Bob Johnson', post: 'Frontend Developer', image: '/images/team-2.jpg.webp' },
  { name: 'Charlie Brown', post: 'Backend Developer', image: '/images/team-3.jpg.webp' },
  { name: 'Dana White', post: 'UI/UX Designer', image: '/images/team-4.jpg.webp' },
  { name: 'Eva Green', post: 'Project Manager', image: '/images/team-5.jpg.webp' },
  { name: 'Frank Black', post: 'SEO Specialist', image: '/images/team-6.jpg.webp' },
  { name: 'Grace Lee', post: 'Marketing Strategist', image: '/images/team-7.jpg.webp' },
  { name: 'Hank Adams', post: 'Content Creator', image: '/images/team-8.jpg.webp' },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">EXPERT TEAM</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-member-image">
              <img src={member.image} alt={member.name} />
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <p className="team-member-name">{member.name.toUpperCase()}</p>
            <p className="team-member-post">{member.post}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
