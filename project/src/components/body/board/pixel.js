import { useEffect, useState } from "react";
import useColourMode from "../../../hooks/colour-mode";

function Pixel(prop) {
    const {activeMode} = useColourMode();
    
    // Set background colour of component
    const updatePixelColour = (ref) => {
        const {colour} = activeMode;
        // console.log(colour)
        ref.style.background = colour;
    };

    return(
        <div
            className='pixel'
            style={{width: prop.sizing, height: prop.sizing}}
            onClick={(el) => {updatePixelColour(el.target)}}
            >
        </div>
    )
};

export default Pixel;