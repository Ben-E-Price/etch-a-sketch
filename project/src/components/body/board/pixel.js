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

    // Check if colour should be added to component based on invoction event
    const eventCheck = (event, mouseDownState, activeMode) => {
        const {type, target} = event;
        const eventClick = "click";
        const eventOver = "mouseover";

        const eventCompare = (activeEvent, compareEvent) => {
            return activeEvent === compareEvent ? true : false
        };

        // Set background colour of component
        const updatePixelColour = (ref, activeMode) => {
            const {modeIdent, colour} = activeMode;
            const setCompBackground = (el, colourString) => el.style.background = colourString; 

            // Adds/Removes "active-background" class from compoents - Allows tracking of compoents with backgrounds applied
            const setActiveClass = (modeIdent, pixel, className) => {
                const modeCheck = modeIdent !== 0 ? true : false;
                const pixelClassList = pixel.classList;

                const classAdd = (classList, className) => classList.add(className);
                const classRemove = (classList, className) => classList.remove(className);
                const classCheck = (classList, className) => classList.contains(className);

                if(modeCheck && !classCheck(pixelClassList, className)) {
                    // Add class if user selected or random colour mode
                    classAdd(pixelClassList, className);
                } else if (!modeCheck && classCheck(pixelClassList, className)) {
                    // Remove class if erase mode
                    classRemove(pixelClassList, className);
                };
            };

            // Sets static user selected colour value
            const setStaticColour = (pixel, newColour, setBackgroundFn) => setBackgroundFn(pixel, newColour);

            // Calls random colour function, Sets pixel colour
            const setRandomColour = (pixel, randColourFn, setBackgroundFn) => setBackgroundFn(pixel, randColourFn());

            setActiveClass(modeIdent, ref, activeBackground);
            
            // Selects colour setting method based on current mode
            if(modeIdent === 1 || modeIdent === 0) {
                setStaticColour(ref, colour, setCompBackground);
            } else if(modeIdent === 2) {
                setRandomColour(ref, colour, setCompBackground);
            };
        };

        // Check invoction event type
        if(eventCompare(type, eventOver)) {
            // onMouseOver event
            if(!mouseDownState) {
                return
            } else if(mouseDownState) {
                // onHover + mouseDown
                updatePixelColour(target, activeMode);
            };

        } else if(eventCompare(type, eventClick)) {
            // onClick events
            updatePixelColour(target, activeMode); 
        };
    };

    return(
        <span
            className={handleClassString([pixel, gridVisibility])}
            onClick={(event) => {eventCheck(event, mouseState, activeMode)}}
            onMouseOver={(event) => {eventCheck(event, mouseState, activeMode)}}
            >
        </span>
    )
};

export default Pixel;