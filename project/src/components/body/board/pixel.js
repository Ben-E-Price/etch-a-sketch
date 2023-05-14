import { useState } from "react";
import useColourMode from "../../../hooks/colour-mode";

function Pixel(prop) {
    const [pixelColour, setPixelColour] = useState("");
    const {activeMode} = useColourMode();
    
    // Set background colour of component
    const updatePixelColour = (ref) => {
        setPixelColour(activeMode.colour);
        ref.style.background = pixelColour;
    };

    return(
        <div 
            className='pixel'
            style={{width: prop.sizing, height: prop.sizing}}
            onClick={(element) => {updatePixelColour(element.target)}}>
        </div>
    )
};

export default Pixel;