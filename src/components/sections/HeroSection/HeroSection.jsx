import React from 'react';
import './HeroSection.scss';
import ExpertisesLabel from "../../component/ExpertisesLabel";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <h1>
                Unlocking<span className="mobile-break"><br /></span> the <span className="highlight">Data of Tomorrow</span>, today
            </h1>

            <div className="hero-bottom-text">
                <ExpertisesLabel text=".services" />
                <h2>What We Offer</h2>
                <p className="services-intro">
                    <span className="styled-text">We deliver end-to-end</span> software development,  <span className="styled-text"> from </span> ideation to
                    deployment. <span className="styled-text">Our custom solutions enhance</span> efficiency, scalability, and
                    innovation <span className="styled-text">for businesses worldwide.</span>
                </p>

            </div>
        </section>
    );
};

export default HeroSection;
