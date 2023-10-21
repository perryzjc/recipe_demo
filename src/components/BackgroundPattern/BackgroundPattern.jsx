import React from 'react';
import './styles.css';

const BackgroundPattern = ({ children }) => {
    return (
        <>
            <div className="background-pattern"></div>
            {children}
        </>
    );
}

export default BackgroundPattern;
