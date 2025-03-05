import React from 'react';
import './ExpertisesLabel.scss'; // Імпортуємо файл зі стилями (за потреби)

const ExpertisesLabel = ({ text }) => {
    return <span className="expertises-label">{text}</span>;
};

export default ExpertisesLabel;
