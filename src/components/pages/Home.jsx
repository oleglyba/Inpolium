import React from 'react';
import Header from "../layout/Header/Header";
import HeroSection from "../sections/HeroSection/HeroSection";
import CTASection from "../sections/CTASection/CTASection";
import ExpertisesSection from "../sections/ExpertisesSection/ExpertisesSection";
import ProcessSection from "../sections/ProcessSection/ProcessSection";
import ProjectsSection from "../sections/ProjectsSection/ProjectsSection";
import ServicesSection from "../sections/ServicesSection/ServicesSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import Footer from "../layout/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <HeroSection/>
                <ServicesSection id="services"/>
                <ExpertisesSection id="expertises"/>
                <ProcessSection id="process"/>
                <CTASection/>
                <ProjectsSection id="projects"/>
                {/*<TestimonialsSection/>*/}
                <ContactSection id="contact-section" />
            </main>

            <Footer/>
        </>
    );
};

export default Home;
