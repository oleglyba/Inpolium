import React from 'react';
import './CTASection.scss';
import Button from "../../ui/Button/Button";
import useScrollToSection from "../../hooks/useScrollToSection";

const CTASection = () => {
    const scrollToSection = useScrollToSection(80);

    return (
        <section className="cta-section">
            <h2>Let's Get Started!</h2>
            <p>
                Take the next step toward data-driven, scalable solutions with Inpolium.
                Let’s turn your vision into reality.
            </p>
            <Button className="button-cta" onClick={() => scrollToSection("contact-section")}>
                Let's Talk
            </Button>
        </section>
    );
};

export default CTASection;
