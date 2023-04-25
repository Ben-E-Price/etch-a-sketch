import { useRef, useState } from "react";
import useGridResolution from "../../../hooks/grid-res";

const ResolutionInput = () => {
    const ref = useRef("");
    const {currentRes, inputStep, inputMin} = useGridResolution(ref);
        
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
                onInput={(el) => setRes(el.target)}>
            </input>
        </>
    )
};

export default ResolutionInput