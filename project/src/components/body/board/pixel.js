import { useEffect, useState } from "react";
import useColourMode from "../../../hooks/colour-mode";

function Pixel(prop) {
    const {activeMode} = useColourMode();
    const [pixelColour, setPixelColour] = useState("");
    
    // Set background colour of component
    const updatePixelColour = (ref) => {
        ref.style.background = pixelColour;
    };

    // Set pixelColour string
    useEffect(() => {
        setPixelColour(activeMode.colour);
    }, [setPixelColour, activeMode]);

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