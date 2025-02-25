import React from 'react';
import './ServicesSection.scss';

const ServicesSection = ({ id }) => {
    return (
        <section id={id} className="services-section">
            <h2>What We Offer</h2>
            <p className="services-intro">
                We deliver end-to-end software development, from ideation to deployment.
                Our custom solutions enhance efficiency, scalability, and innovation for
                businesses worldwide.
            </p>

            <div className="services-grid">
                <div className="service-card">
                    <div className="icon-wrapper">
                        <img src="/icon/ServicesSection/WebScraping.svg" alt="Web Scraping" />
                    </div>
                    <h3>Web Scraping & Data Extraction</h3>
                    <p>
                        Extract valuable insights from websites efficiently to fuel
                        data-driven decision-making.
                    </p>
                </div>

                <div className="service-card">
                    <div className="icon-wrapper">
                        <img src="/icon/ServicesSection/BackendDevelopment.svg" alt="Backend" />
                    </div>
                    <h3>Backend Development</h3>
                    <p>
                        Scalable, secure, and high-performance backend solutions for digital
                        experiences.
                    </p>
                </div>

                <div className="service-card">
                    <div className="icon-wrapper">
                        <img src="/icon/ServicesSection/FrontendDevelopment.svg" alt="Frontend" />
                    </div>
                    <h3>Frontend Development</h3>
                    <p>
                        Crafting intuitive and visually engaging user interfaces for
                        superior customer retention.
                    </p>
                </div>

                <div className="service-card">
                    <div className="icon-wrapper">
                        <img src="/icon/ServicesSection/TelegramBotDevelopment.svg" alt="Telegram Bot" />
                    </div>
                    <h3>Telegram Bot Development</h3>
                    <p>
                        Automated bots that enhance communication, streamline processes, and
                        reduce overhead.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
