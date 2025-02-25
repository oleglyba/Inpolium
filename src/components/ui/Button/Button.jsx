import React from 'react';

const Button = ({ type = 'button', onClick, children, className, href, ...props }) => {
    if (href) {
        return (
            <a href={href} className={className} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={className} {...props}>
            {children}
        </button>
    );
};

export default Button;
