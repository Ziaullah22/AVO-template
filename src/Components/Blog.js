import React from 'react';
import './Blog.css';

const Blogs = () => {
    return (
        <div className="blogs-container">
            <div className="clip-path-top"></div>
            <h1 className="blogs-title">RECENT BLOGS</h1>
            <div className="row-container">
                <div className="column">
                    <h2 className="column-title">Amplify your blockchain team</h2>
                    <img src="\image_1.jpg.webp" alt="Blockchain Team" className="column-image" />
                    <div className="details">
                        <span className="date">June 01, 2020</span>
                        <span className="author">Admin</span>
                        <span className="message-icon">🗨️</span>
                        <span className="comments">3</span>
                    </div>
                    <p className="column-paragraph">Blockchain technology can help your organization build secure, decentralized applications, increasing transparency and reducing fraud.</p>
                </div>
                <div className="column">
                    <h2 className="column-title">Maximize your digital marketing</h2>
                    <img src="\image_2.jpg.webp" alt="Digital Marketing" className="column-image" />
                    <div className="details">
                        <span className="date">June 01, 2020</span>
                        <span className="author">Admin</span>
                        <span className="message-icon">🗨️</span>
                        <span className="comments">5</span>
                    </div>
                    <p className="column-paragraph">Utilize cutting-edge digital marketing strategies to engage your audience and drive higher conversion rates through targeted campaigns.</p>
                </div>
                <div className="column">
                    <h2 className="column-title">Enhance your cybersecurity Team</h2>
                    <img src="\image_3.jpg.webp" alt="Cybersecurity" className="column-image" />
                    <div className="details">
                        <span className="date">June 01, 2020</span>
                        <span className="author">Admin</span>
                        <span className="message-icon">🗨️</span>
                        <span className="comments">2</span>
                    </div>
                    <p className="column-paragraph">Strengthen your cybersecurity posture with advanced threat detection and response strategies to safeguard your digital assets.</p>
                </div>
                <div className="column">
                    <h2 className="column-title">Optimize your web development</h2>
                    <img src="\image_4.jpg.webp" alt="Web Development" className="column-image" />
                    <div className="details">
                        <span className="date">June 01, 2020</span>
                        <span className="author">Admin</span>
                        <span className="message-icon">🗨️</span>
                        <span className="comments">7</span>
                    </div>
                    <p className="column-paragraph">Improve your web development process with modern frameworks and practices to build responsive, high-performance websites.</p>
                </div>
            </div>
                <br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default Blogs;
