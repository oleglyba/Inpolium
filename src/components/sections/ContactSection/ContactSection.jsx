import React, { useState } from "react";
import "./ContactSection.scss";
import Button from "../../ui/Button/Button";
import useGoogleSheetSubmission from "../../hooks/useGoogleSheetSubmission";

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { sendToGoogleSheet, buttonText, errorMessage, setErrorMessage } = useGoogleSheetSubmission();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "message" && value.length > 500) {
            setErrorMessage("Message length limit is 500 characters.");
            return;
        } else {
            setErrorMessage("");
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasAttemptedSubmit(true);

        if (!formData.name || !formData.email || formData.message.length > 500) {
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        try {
            await sendToGoogleSheet(formData);
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitted(true);
            setHasAttemptedSubmit(false);
            // Показуємо повідомлення протягом 4 секунд, після чого повертаємо звичайний вигляд
            setTimeout(() => {
                setIsSubmitted(false);
            }, 4000);
        } catch (error) {
            setErrorMessage("Error submitting the form. Please try again.");
            console.error("Error submitting form:", error);
        }
    };

    return (
        <section id="contact-section" className="contact-section">
            <div className="contact-content">
                <h2>Let's Build Together!</h2>
                <p>Tell us about your project, and we’ll craft a powerful, scalable solution tailored to your needs.</p>
            </div>

            <div className="contact-form-wrapper">
                <form onSubmit={handleSubmit} className="contact-form">
                    <h3 className="form-title">Contact Us</h3>

                    <label htmlFor="name" className="required">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={hasAttemptedSubmit && !formData.name ? "error" : ""}
                    />

                    <label htmlFor="email" className="required">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={hasAttemptedSubmit && !formData.email ? "error" : ""}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Enter your message..."
                        value={formData.message}
                        onChange={handleChange}
                        className={hasAttemptedSubmit && !formData.message ? "error" : ""}
                    />

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <div className="form-footer">
                        {isSubmitted ? (
                            <p className="success-message">
                                ✨ Success! Your request is submitted. We’ll get back to you soon!
                            </p>
                        ) : (
                            <>
                                <p className="privacy-text">
                                    By signing this form you agree to our{" "}
                                    <a href="/privacy-policy" target="_blank" rel="noreferrer" style={{ color: "#ffffff" }}>
                                        Privacy Policy
                                    </a>
                                </p>
                                <Button className="btn-submit" type="submit" variant="submit">
                                    {buttonText}
                                </Button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
