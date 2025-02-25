import React, { useState, useEffect } from 'react';
import './ProcessSection.scss';
import useIsMobile from '../../hooks/useIsMobile';

const ProcessSection = ({ id }) => {
    const steps = [
        {
            label: 'Product Discovery Phase',
            image: '/icon/ProcessSection/ProductDiscoveryPhase.svg',
            text: 'We define a clear product vision, conduct competitive analysis, assess risks and budgets, and design a technical architecture. Finally, we craft a strategic roadmap to ensure a smooth and efficient development process.'
        },
        {
            label: 'UI/UX/CX Design',
            image: '/icon/ProcessSection/CXDesign.svg',
            text: 'We craft intuitive, user-friendly experiences through research, wireframing, and prototyping. Our focus is on visual appeal, usability, and functionality, ensuring a seamless and engaging interaction for your users.'
        },
        {
            label: 'Development & Testing',
            image: '/icon/ProcessSection/Development.svg',
            text: 'Using modern technologies, we build secure, scalable solutions with a focus on performance and reliability. Through agile development and rigorous testing, we ensure a stable, high-quality product ready for launch.'
        },
        {
            label: 'Deployment',
            image: '/icon/ProcessSection/Deployment.svg',
            text: 'We ensure a smooth and secure deployment by configuring infrastructure, optimizing performance, and ensuring scalability. Our cloud-based approach guarantees high availability and seamless integration into your business.'
        },
        {
            label: 'Maintenance & Support',
            image: '/icon/ProcessSection/Maintenance.svg',
            text: 'We provide continuous monitoring, updates, and improvements to keep your system secure, efficient, and up-to-date. Our proactive support ensures long-term stability and optimal performance for your product.'
        }
    ];

    const [activeStep, setActiveStep] = useState(0);
    const isMobile = useIsMobile(768);

    // Автоматична зміна кроків лише для ПК
    useEffect(() => {
        if (!isMobile) {
            const interval = setInterval(() => {
                setActiveStep(prev => (prev + 1) % steps.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [isMobile, steps.length]);

    const handleStepClick = (index) => {
        setActiveStep(index);
    };

    return (
        <section id={id} className="process-section">
            {isMobile ? (
                // Мобільна версія
                <div className="process-grid mobile">
                    {steps.map((step, index) => (
                        <div key={index} className="process-item">
                            <div className="step-header">
                                <div className="step-number">{index + 1}.</div>
                                <h3 className="step-label">{step.label}</h3>
                            </div>
                            <div className="separator" />
                            <div className="mobile-image-section">
                                <div className="icon-wrapper">
                                    <img src={step.image} alt={step.label} />
                                </div>
                            </div>
                            <div className="separator" />
                            <div className="text-content">
                                <p>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // ПК-версія
                <div className="process-grid">
                    <div className="process-steps">
                        <h2>From Idea to Launch</h2>
                        <ol className="process-list">
                            {steps.map((step, index) => {
                                let itemClass = '';
                                if (index < activeStep) {
                                    itemClass = 'completed';
                                } else if (index === activeStep) {
                                    itemClass = 'active';
                                }
                                return (
                                    <li
                                        key={index}
                                        className={`process-item ${itemClass}`}
                                        onClick={() => handleStepClick(index)}
                                    >
                                        <div className="step-number">{index + 1}</div>
                                        <div className="step-label">{step.label}</div>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                    <div className="process-graphic">
                        <div className="icon-wrapper">
                            <img
                                key={steps[activeStep].image}
                                src={steps[activeStep].image}
                                alt={steps[activeStep].label}
                                className="fade-image"
                            />
                        </div>
                        <div className="text-content">
                            <p>{steps[activeStep].text}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProcessSection;
