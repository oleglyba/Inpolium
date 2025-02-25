import React from 'react';
import useScrollToSection from '../../hooks/useScrollToSection';

const navItems = [
    { id: "services", label: "Services" },
    { id: "expertises", label: "Expertises" },
    { id: "process", label: "Process" },
    { id: "projects", label: "Projects" },
];

const NavigationLinks = ({ className, onLinkClick }) => {
    const scrollToSection = useScrollToSection(80);

    const handleClick = (e, id) => {
        e.preventDefault(); // Prevent default anchor navigation
        scrollToSection(id);
        if (onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <ul className={className}>
            {navItems.map(item => (
                <li key={item.id}>
                    <a
                        href={`#${item.id}`}
                        onClick={(e) => handleClick(e, item.id)}
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default NavigationLinks;
