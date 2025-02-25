import React from "react";
import "./Footer.scss";
import NavigationLinks from "../NavigationLinks/NavigationLinks";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="footer-header">
                    <div className="footer-logo">INPOLIUM</div>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/company/inpolium-data/" target="_blank" rel="noreferrer">
                            <img src="/icon/footer/lindedIn.svg" alt="LinkedIn" />
                        </a>
                        <a href="https://www.upwork.com" target="_blank" rel="noreferrer">
                            <img src="/icon/footer/up.svg" alt="Upwork" />
                        </a>
                        <a href="https://www.clutch.co" target="_blank" rel="noreferrer">
                            <img src="/icon/footer/clutch.svg" alt="Clutch" />
                        </a>
                    </div>
                </div>

                <div className="footer-nav-header">
                    <nav className="footer-nav">
                        <NavigationLinks className="footer-links" />
                    </nav>
                    <a className="footer-email" href="mailto:info@inpolium.com">
                        info@inpolium.com
                    </a>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p>Copyright © {new Date().getFullYear()} Inpolium. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
