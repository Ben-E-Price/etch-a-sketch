import React, { useEffect, useState } from "react";
import useColourMode from "hooks/colour-mode";
import useClassStringConstruct from "hooks/create-class-string";
import data from "data/comp-class-list.json"

const Pixel = (prop) => {
    const handleClassString = useClassStringConstruct();
    const {
            activeMode,
            mouseState,
            gridVisibility
    } = prop;
    const {
        pixel,
        activeBackground
    } = data;

    return(
        <span
            className={handleClassString([pixel, gridVisibility])}
            >
        </span>
    )
};

export default Pixel;