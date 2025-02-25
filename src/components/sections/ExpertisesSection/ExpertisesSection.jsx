import React from 'react';
import './ExpertisesSection.scss';
import useIsMobile from '../../hooks/useIsMobile';

const techData = [
    { src: "/icon/ExpertisesSection/python.svg", alt: "Python", label: "Python" },
    { src: "/icon/ExpertisesSection/Django.svg", alt: "Django", label: "Django" },
    { src: "/icon/ExpertisesSection/FastAPI.svg", alt: "FastAPI", label: "FastAPI" },
    { src: "/icon/ExpertisesSection/Scrapy.svg", alt: "Scrapy", label: "Scrapy" },
    { src: "/icon/ExpertisesSection/Selenium.svg", alt: "Selenium", label: "Selenium" },
    { src: "/icon/ExpertisesSection/AWS.svg", alt: "AWS", label: "AWS" },
    { src: "/icon/ExpertisesSection/React.svg", alt: "React", label: "React" },
    { src: "/icon/ExpertisesSection/Redux.svg", alt: "Redux", label: "Redux" },
    { src: "/icon/ExpertisesSection/Next.svg", alt: "Next.js", label: "Next.js", isNext: true },
];

const ExpertisesSection = ({ id }) => {
    useIsMobile(768);
    const renderCard = (tech, index) => (
        <div key={index} className={`technology-card ${tech.isNext ? 'next-card' : ''}`}>
            <div className="icon-wrapper">
                <img src={tech.src} alt={tech.alt} />
            </div>
            <p>{tech.label}</p>
        </div>
    );

    return (
        <section id={id} className="expertises-section">
            <h2>Our Core Technologies</h2>
            <div className="technologies-row">
                {techData.map(renderCard)}
            </div>
        </section>
    );
};

export default ExpertisesSection;
