import { useEffect, useState } from "react";

const useCompResize = (ref, currentRes) => {
    const [width, setCompWidth] = useState(0);

    //Update value of width
    const getCompSize = (ref, currentRes) => {        
        setCompWidth(ref.current.getBoundingClientRect().width);
    };

    useEffect(() => {
        getCompSize(ref, currentRes);
        window.addEventListener("resize",() => getCompSize(ref, currentRes));

        return () => {
            window.removeEventListener("resize",() => getCompSize(ref, currentRes));
        };
    }, [ref]);

    return {width};
};

export {useCompResize}