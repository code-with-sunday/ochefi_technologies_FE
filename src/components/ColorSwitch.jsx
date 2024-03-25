import React, { useState } from 'react';

export const ColorSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
        // Additional theme toggle logic can go here
    };

    return (
        <div className="switch-box">
            <label id="switch" className="switch">
                <input type="checkbox" onChange={toggleTheme} id="slider" />
                <span className="slider round" />
            </label>
        </div>
    );
};