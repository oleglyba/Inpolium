import {useCallback} from "react";

const useScrollToSection = (offset = 80) => {
    return useCallback((id) => {
        const section = document.getElementById(id);
        if (section) {
            const elementPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    }, [offset]);
};

export default useScrollToSection;
