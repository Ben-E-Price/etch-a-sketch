import { useEffect, useLayoutEffect, useRef, useState } from "react";

const ResolutionInput = () => {
    const ref = useRef("");
    const [currentRes, updateCurrentRes] = useState("");

    //Update currentRes value
    const setRes = (ref) => {
        updateCurrentRes(ref.value)
    };
    
    // Initilize on first render
    useEffect(() => {
        setRes(ref.current);
    }, []);

    return(
        <>
            <p>{currentRes}</p>
            <input type="range" min={4} max={32} step={4} ref={ref} onChange={(el) => setRes(el.target)}></input>
        </>
    )
};

export default ResolutionInput