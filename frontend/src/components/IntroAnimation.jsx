import React, { useEffect } from 'react';
import { startAnimation } from '../utils/introAnimation.js'; // Import from animation.js

const IntroAnimation = ({ onEnd }) => {
    useEffect(() => {
        // Initialize your animation
        // const animationControl = startAnimation();
        console.log('Animation started');

        // When the component unmounts or animation ends
        return () => {
            onEnd(); // Call the onEnd callback

            // If there's any cleanup function in your animation.js, call it here
            // anotherFunction();
        };
    }, [onEnd]);

    return <div id="intro-animation-container"></div>;
};

export default IntroAnimation;
