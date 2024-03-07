import React, { useEffect, useState } from "react";
import useColourMode from "../../../hooks/colour-mode";
import data from "../../../data/comp-class-list.json"

const Pixel = (prop) => {
    const {activeMode, mouseState, gridVisibility} = prop;
    const {pixel} = data;

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

            // Adds/Removes "active-background" class from compoents - Allows tracking of compoents with backgrounds applied
            const setActiveClass = (modeIdent, pixel) => {
                const className = "active-background";
                const modeCheck = modeIdent !== 0 ? true : false;

                const classAdd = (pixel, className) => pixel.classList.add(className);
                const classRemove = (pixel, className) => pixel.classList.remove(className);

                const classCheck = (pixel, className) => pixel.classList.contains(className);

                if(modeCheck && !classCheck(pixel, className)) {
                    // Add class if user selected or random colour mode
                    classAdd(pixel, className);
                } else if (!modeCheck && classCheck(pixel, className)) {
                    // Remove class if erase mode
                    classRemove(pixel, className);
                };
            };

            // Sets static user selected colour value
            const setStaticColour = (pixel, newColour) => {
                pixel.style.background = newColour
            };

            // Calls random colour function, Sets pixel colour
            const setRandomColour = (pixel, colourFunc) => {
                pixel.style.background = colourFunc();
            };

            setActiveClass(modeIdent, ref)
            
            // Selects colour setting method based on current mode
            if(modeIdent === 1 || modeIdent === 0) {
                setStaticColour(ref, colour);
            } else if(modeIdent === 2) {
                setRandomColour(ref, colour);
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
            className={pixel}
            style={{border: gridVisibility}}
            onClick={(event) => {eventCheck(event, mouseState, activeMode)}}
            onMouseOver={(event) => {eventCheck(event, mouseState, activeMode)}}
            >
        </span>
    )
};

export default Pixel;