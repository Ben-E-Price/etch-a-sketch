import React, { useEffect, useState } from "react";
import useColourMode from "../../../hooks/colour-mode";

function Pixel(prop) {
    const activeMode = prop.activeMode;

    // Set background colour of component
    const updatePixelColour = (ref, activeMode) => {
        const {modeIdent, colour} = activeMode;

        // Adds/Removes "active-background" class from compoents - Allows tracking of compoents with backgrounds applied
        const setActiveClass = (modeIdent, pixel) => {
            const className = "active-background";
            const modeCheck = modeIdent !== 0 ? true : false;

            const classAdd = (pixel, className) => pixel.classList.add(className);
            const classRemove = (pixel, className) => pixel.classList.remove(className);

            const checkClass = (pixel, className) => pixel.classList.contains(className);

            if(modeCheck && !checkClass(pixel, className)) {
                // Add class if user selected or random colour mode
                classAdd(pixel, className);
            } else if (!modeCheck && checkClass(pixel, className)) {
                // Remove class if erase mode
                classRemove(pixel, className);
            };
        };

        // Sets static user selected colour value
        const setStaticColour = (pixel, newColour) => {
            pixel.style.background = newColour
        };

        // Calls random colour function, Sets pixel colour
        const setRandomColour = (pixel, colourFunc) => {
            pixel.style.background = colourFunc();
        };

        setActiveClass(modeIdent, ref)
        
        // Selects colour setting method based on current mode
        if(modeIdent === 1 || modeIdent === 0) {
            setStaticColour(ref, colour);
        } else if(modeIdent === 2) {
            setRandomColour(ref, colour);
        };
    };

    // Check if colour should be added to component based on invoction event
    const eventCheck = (event, mouseDownState, activeMode) => {

    };

    return(
        <div
            className='pixel'
            style={{width: prop.sizing, height: prop.sizing, border: prop.gridVisibility}}
            onClick={(el) => {updatePixelColour(el.target, activeMode)}}
            >
        </div>
    )
};

export default Pixel;