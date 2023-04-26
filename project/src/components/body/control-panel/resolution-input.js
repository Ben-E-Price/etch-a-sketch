import { useRef, useState } from "react";

const ResolutionInput = (prop) => {
    const ref = useRef("");
    const {currentRes, inputStep, inputMin} = prop.resoultionSettings
    
    return(
        <>
            <p>Resoulution {currentRes} X {currentRes}</p>
            <input 
                id="resolution-input"
                type="range"
                min={inputMin} 
                max={64} 
                value={currentRes} 
                step={inputStep} 
                ref={ref}
                onInput={prop.handleResolution}
                >
            </input>
        </>
    )
};

export default ResolutionInput