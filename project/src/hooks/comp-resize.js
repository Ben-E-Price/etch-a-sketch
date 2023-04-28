import { useCallback, useEffect, useState } from "react";

const useCompResize = (ref) => {
    const [width, setCompWidth] = useState(0);

    //Update value of width
    const getCompSize = (ref) => {
        setCompWidth(ref.current.getBoundingClientRect().width);
    };

    //Update componets sizing - Ensures component width:height - 1:1
    const resizeComp = useCallback((ref, size) => {
        const applySize = (ref, size) => {
            ref.current.style.height = `${size}px`;
            // console.log(ref.current.getBoundingClientRect())
        }; 
        
        getCompSize(ref);
        // applySize(ref, width);
    }, [width]);

    useEffect(() => {
        resizeComp(ref, width)
        window.addEventListener("resize",() => getCompSize(ref));

        return () => {
            window.removeEventListener("resize",() => getCompSize(ref));
        };
    }, [ref, width, resizeComp]);

    return {width};
};

export {useCompResize}