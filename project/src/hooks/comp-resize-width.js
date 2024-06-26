import { useEffect, useState } from "react";

const useCompResizeWidth = (ref) => {
    const [width, setCompWidth] = useState(0);
    
    //Update value of width
    const updateCompWidth = (ref) => {             
        setCompWidth(ref.current.getBoundingClientRect().width);
    };

    useEffect(() => {
        updateCompWidth(ref)
        window.addEventListener("resize",() => updateCompWidth(ref));

        return () => {
            window.removeEventListener("resize", () => updateCompWidth(ref));
        };
    }, [ref]);

    return {width};
};

export {useCompResizeWidth}