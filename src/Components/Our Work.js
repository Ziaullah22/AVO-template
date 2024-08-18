import React, { useEffect } from 'react';
import './Our Work.css'; // Ensure the CSS file name is correct


const OurWorks = () => {
    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        const elements = document.querySelectorAll('.slide-up');

        elements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <section className="our-works">
            <div className="clip-path-top"></div>
            <div className="container">
                <h2 className="heading slide-up">OUR WORKS</h2>
                <div className="row">
                    <div className="col">
                        <div className="work-item">
                            <img src="\images\work-1.jpg.webp" alt="Work 1" className="work-image" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="work-item content-item">
                            <h3 className="small-heading slide-up">Web Design</h3>
                            <h2 className="large-heading slide-up">Cassette tape</h2>
                            <p className="description slide-up">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                            <div className="profile slide-up">
                                <img src="\images\person_1.jpg.webp" alt="Jamie Jonson" className="profile-image" />
                                <div className="profile-info">
                                    <h3 className="profile-name">Jamie Jonson</h3>
                                    <p className="profile-email">avo.com</p>
                                </div>
                            </div>
                            <a href="#view-portfolio" className="btn-view-portfolio slide-up">View Portfolio</a>
                        </div>
                    </div>
                </div>
                <div className="row slide-up">
                    <div className="col slide-up">
                        <div className="work-item content-item">
                            <h3 className="small-heading">Application</h3>
                            <h2 className="large-heading">Miniwall Clock</h2>
                            <p className="description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                            <div className="profile">
                                <img src="\images\person_2.jpg.webp" alt="Jamie Jonson" className="profile-image" />
                                <div className="profile-info">
                                    <h3 className="profile-name">Jamie Jonson</h3>
                                    <p className="profile-email">avo.com</p>
                                </div>
                            </div>
                            <a href="#view-portfolio" className="btn-view-portfolio slide-up">View Portfolio</a>
                        </div>
                    </div>
                    <div className="col slide-up">
                        <div className="work-item">
                            <img src="\images\work-2.jpg.webp" alt="Work 4" className="work-image" />
                        </div>
                    </div>
                </div>
                <div className="row slide-up">
                    <div className="col slide-up">
                        <div className="work-item">
                            <img src="\images\work-3.jpg.webp" alt="Work 1" className="work-image" />
                        </div>
                    </div>
                    <div className="col slide-up">
                        <div className="work-item content-item">
                            <h3 className="small-heading">UI/UX Design</h3>
                            <h2 className="large-heading">Avo Portfolio Agency</h2>
                            <p className="description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                            <div className="profile">
                                <img src="\images\person_1.jpg.webp" alt="Jamie Jonson" className="profile-image" />
                                <div className="profile-info">
                                    <h3 className="profile-name">Jamie Jonson</h3>
                                    <p className="profile-email">avo.com</p>
                                </div>
                            </div>
                            <a href="#view-portfolio" className="btn-view-portfolio slide-up">View Portfolio</a>
                        </div>
                    </div>
                </div>
                <div className="row slide-up">
                    <div className="col slide-up">
                        <div className="work-item content-item">
                            <h3 className="small-heading">Web Development</h3>
                            <h2 className="large-heading">Hand Writing</h2>
                            <p className="description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                            <div className="profile">
                                <img src="\images\person_3.jpg.webp" alt="Jamie Jonson" className="profile-image" />
                                <div className="profile-info">
                                    <h3 className="profile-name">Jamie Jonson</h3>
                                    <p className="profile-email">avo.com</p>
                                </div>
                            </div>
                            <a href="#view-portfolio" className="btn-view-portfolio slide-up">View Portfolio</a>
                        </div>
                    </div>
                    <div className="col slide-up">
                        <div className="work-item">
                            <img src="\images\work-4.jpg.webp" alt="Work 4" className="work-image" />
                        </div>
                    </div>
                </div>
                <div className="row slide-up">
                    <div className="col slide-up">
                        <div className="work-item">
                            <img src="\images\work-5.jpg.webp" alt="Work 1" className="work-image" />
                        </div>
                    </div>
                    <div className="col slide-up">
                        <div className="work-item content-item">
                            <h3 className="small-heading">Illustration</h3>
                            <h2 className="large-heading">Keyboard</h2>
                            <p className="description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                            <div className="profile">
                                <img src="\images\person_1.jpg.webp" alt="Jamie Jonson" className="profile-image" />
                                <div className="profile-info">
                                    <h3 className="profile-name">Jamie Jonson</h3>
                                    <p className="profile-email">avo.com</p>
                                </div>
                            </div>
                            <a href="#view-portfolio" className="btn-view-portfolio slide-up">View Portfolio</a>
                        </div>
                    </div>
                </div>
                <div className="row slide-up">
                    <div className="col slide-up">
                        <div className="work-item content-item">
                            <h3 className="small-heading">Web Development</h3>
                            <h2 className="large-heading">Spiral</h2>
                            <p className="description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                            <div className="profile">
                                <img src="\images\person_2.jpg.webp" alt="Jamie Jonson" className="profile-image" />
                                <div className="profile-info">
                                    <h3 className="profile-name">Jamie Jonson</h3>
                                    <p className="profile-email">avo.com</p>
                                </div>
                            </div>
                            <a href="#view-portfolio" className="btn-view-portfolio slide-up">View Portfolio</a>
                        </div>
                    </div>
                    <div className="col slide-up">
                        <div className="work-item">
                            <img src="\images\work-6.jpg.webp" alt="Work 4" className="work-image" />
                        </div>
                    </div>
                </div>
                <br/><br/><br /><br />
            </div>
            <div className="clip-path-bottom"></div>
        </section>
    );
}

export default OurWorks;
