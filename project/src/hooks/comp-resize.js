import { useEffect, useLayoutEffect, useState } from "react";

const useCompResize = (ref) => {
    const [width, setCompWidth] = useState(0);

    //Update value of width
    const getCompSize = (ref) => {
        setCompWidth(ref.current.getBoundingClientRect().width);
    };

    //Update componets sizing - Ensures component width:height - 1:1
    const resizeComp = (ref, size) => {
       const applySize = (ref, size) => {
            ref.current.style.height = `${size}px`;
            // ref.current.style.height = ref.current.getBoundingClientRect().width
            console.log(ref.current.getBoundingClientRect() )
        }; 
        
        getCompSize(ref);
        applySize(ref, width);
    };

    // Initilzie width value before inital render
    useLayoutEffect(() => {
        getCompSize(ref)
    },[ref])

    useEffect(() => {
        resizeComp(ref, width)
        window.addEventListener("resize",() => resizeComp(ref, width));

        return () => {
            window.removeEventListener("resize",() => resizeComp(ref, width));
        };
    }, [ref, width, resizeComp]);

    return {width};
};

export {useCompResize}