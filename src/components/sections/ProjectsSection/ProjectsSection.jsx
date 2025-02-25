import React from 'react';
import './ProjectsSection.scss';

const ProjectsSection = ({ id }) => {  // Додаємо пропс id
    return (
        <section id={id} className="projects-section"> {/* Додаємо id */}
            <h2>Success Stories</h2>

            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-image">
                        <img src="/icon/ProjectsSection/TaskManagement.png" alt="Task Management" />
                    </div>
                    <div className="project-info">
                        <div className="project-tags">
                            <span>Web App</span>
                            <span>Management</span>
                        </div>
                        <h3>Task Management</h3>
                        <p>
                            Managing a large team and multiple projects can be a daunting
                            task. Still, our intuitive team management design with a
                            convenient calendar...
                        </p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src="/icon/ProjectsSection/CreditRepairSoftware.png" alt="Credit Repair Software" />
                    </div>
                    <div className="project-info">
                        <div className="project-tags">
                            <span>Mobile App</span>
                            <span>FinTech</span>
                        </div>
                        <h3>Credit Repair Software</h3>
                        <p>
                            DisputFork is a credit repair software that helps users dispute
                            inaccurate records to improve their credit score. The software
                            automates many of the manual tasks...
                        </p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src="/icon/ProjectsSection/FleetManagement.png" alt="Fleet Management" />
                    </div>
                    <div className="project-info">
                        <div className="project-tags">
                            <span>Web App</span>
                            <span>Management</span>
                        </div>
                        <h3>Fleet Management</h3>
                        <p>
                            In addition to enhancing safety and efficiency, the dashboard
                            offers real-time alerts and notifications to keep fleet managers
                            informed of...
                        </p>
                    </div>
                </div>

                {/* Нові три картки */}
                <div className="project-card">
                    <div className="project-image">
                        <img src="/icon/ProjectsSection/AgriculturalManagement.png" alt="Agricultural Management" />
                    </div>
                    <div className="project-info">
                        <div className="project-tags">
                            <span>Native App</span>
                            <span>AgTech</span>
                        </div>
                        <h3>Agricultural Management</h3>
                        <p>
                            EarthEye is a pioneering company that leverages advanced
                            technologies for agricultural management, with a special emphasis
                            on vineyard monitoring...
                        </p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src="/icon/ProjectsSection/FinanceManagement.png" alt="Finance Management" />
                    </div>
                    <div className="project-info">
                        <div className="project-tags">
                            <span>Mobile App</span>
                            <span>FinTech</span>
                        </div>
                        <h3>Finance Management</h3>
                        <p>
                            The app offers personalized financial insights on your spending habits,
                            so you can make informed decisions and reach your financial goals faster...
                        </p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src="/icon/ProjectsSection/FitnessPlanningApp.png" alt="Fitness Planning App" />
                    </div>
                    <div className="project-info">
                        <div className="project-tags">
                            <span>Mobile App</span>
                            <span>SportsTech</span>
                        </div>
                        <h3>Fitness Planning App</h3>
                        <p>
                            Whether you’re working out alone or with friends, the app allows
                            you to plan your workouts, track your progress, and stay motivated...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
