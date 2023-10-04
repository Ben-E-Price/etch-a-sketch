import React, { useEffect, useState } from "react";
import useColourMode from "../../../hooks/colour-mode";

function Pixel(prop) {
    const activeMode = prop.activeMode;

    // Set background colour of component
    const updatePixelColour = (ref, activeMode) => {
        const {modeIdent, colour} = activeMode;

        // Sets static user selected colour value
        const setStaticColour = (pixel, newColour) => {
            pixel.style.background = newColour
        };

        // Calls random colour function, Sets pixel colour
        const setRandomColour = (pixel, colourFunc) => {
            pixel.style.background = colourFunc();
        };

        // Selects colour setting method based on current mode
        if(modeIdent === 1 || modeIdent === 0) {
            setStaticColour(ref, colour);
        } else if(modeIdent === 2) {
            setRandomColour(ref, colour);
        };
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