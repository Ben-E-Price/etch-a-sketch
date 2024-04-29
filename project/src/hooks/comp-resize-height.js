import { useEffect, useState } from "react";

const useCompResizeHeight = (ref, currentRes) => {
    const [height, setCompHeight] = useState(0);
    
    //Update value of height
    const updateCompHeight = (ref) => {             
        setCompHeight(ref.getBoundingClientRect().height);
        console.log(ref.getBoundingClientRect().height)
    };

    useEffect(() => {
        updateCompHeight(ref)
        window.addEventListener("resize",() => updateCompHeight(ref));

        return () => {
            window.removeEventListener("resize", () => updateCompHeight(ref));
        };
    }, [ref]);

    return {height};
};

export {useCompResizeHeight}