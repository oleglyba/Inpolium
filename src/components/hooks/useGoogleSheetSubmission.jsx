import { useState } from "react";

const useGoogleSheetSubmission = () => {
    const [buttonText, setButtonText] = useState("Send Request");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendToGoogleSheet = async (formData) => {
        const googleScriptURL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
        const formBody = new URLSearchParams(formData).toString();

        try {
            setButtonText("Sending...");
            setErrorMessage("");

            const response = await fetch(googleScriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formBody,
            });

            const result = await response.text();

            if (result.includes("success")) {
                setIsSubmitted(true);
                setButtonText("Complete");
                setTimeout(() => {
                    setIsSubmitted(false);
                    setButtonText("Send Request");
                }, 2000);
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            setErrorMessage(
                !navigator.onLine ? "No internet connection. Please check your network." : "Something went wrong. Please try again."
            );
            setButtonText("Send Request");
        }
    };

    return { sendToGoogleSheet, buttonText, errorMessage, isSubmitted, setErrorMessage };
};

export default useGoogleSheetSubmission;
