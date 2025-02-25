import React, { useState } from "react";
import "./Header.scss";
import Button from "../../ui/Button/Button";
import { FiMenu, FiX } from "react-icons/fi";
import useScrollToSection from "../../hooks/useScrollToSection";
import NavigationLinks from "../NavigationLinks/NavigationLinks";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = useScrollToSection(80);

    return (
        <header className="site-header">
            <div className="header-left">
                <div className="logo">INPOLIUM</div>
            </div>

            <div className="header-center">
                <NavigationLinks className="nav-links" />
            </div>

            <div className="header-right">
                <Button className="btn-contact" onClick={() => scrollToSection("contact-section")}>
                    Get in touch
                </Button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <NavigationLinks className="mobile-nav-links" onLinkClick={() => setIsOpen(false)} />
                <div className="divider"></div>
                <Button
                    className="btn-contact"
                    onClick={() => {
                        scrollToSection("contact-section");
                        setIsOpen(false);
                    }}
                >
                    Get in Touch
                </Button>
            </div>
        </header>
    );
};

export default Header;
