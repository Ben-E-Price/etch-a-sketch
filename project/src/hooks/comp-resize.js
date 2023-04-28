import { useEffect, useState } from "react";

const useCompResize = (ref) => {
    const [width, setCompWidth] = useState(0);

    //Update value of width
    const getCompSize = (ref) => {
        setCompWidth(ref.current.getBoundingClientRect().width);
    };

    useEffect(() => {
        getCompSize(ref)
        window.addEventListener("resize",() => getCompSize(ref));

        return () => {
            window.removeEventListener("resize",() => getCompSize(ref));
        };
    }, [ref]);

    return {width};
};

export {useCompResize}