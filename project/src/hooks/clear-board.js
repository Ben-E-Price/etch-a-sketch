import { useState } from 'react';

const useClearBoard = () => {

    const handleClick = () => {
        const className = "active-background";
        const activePixels = document.getElementsByClassName(className);

        const clearPixel = (pixel, className) => {
            pixel.style.background = "none";
            pixel.classList.remove(className);
        };

        activePixels.forEach(element => clearPixel(element, className));
    };

    return {handleClick}
};

export default useClearBoard