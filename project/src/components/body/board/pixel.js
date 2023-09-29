import { useEffect, useState } from "react";
import useColourMode from "../../../hooks/colour-mode";

function Pixel(prop) {
    const {activeMode} = useColourMode();
    // console.log(activeMode)
    
    // Set background colour of component
    const updatePixelColour = (ref) => {
        const {colour} = activeMode;
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