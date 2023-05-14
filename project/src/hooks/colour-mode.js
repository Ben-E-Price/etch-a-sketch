import { useState } from "react";

// Contains mode objects
const modes = new Map(
    [0, {
        displayText: "Erase",
        colour: "none",
    }],

    [1, {
        displayText: "User Selected Colour",
        colourPicker: document.getElementById("colour-picker"),

        //Returns current value of colour picker element - Selected by user
        colour: function() {
            return this.colourPicker.value
        },
    }],

    [2, {
        displayText: "Random Colour",

        // Retruns formatted RGB value string - rgb(000, 000, 000)
        colour: function() {
            // Retruns formatted string of values - 000, 000, 000
            const genRgbValues = (createNumbers = 3) => {
                let outString = "";

                // Generate number between 0 - 255
                const genNumber = (maxValue = 255) => {
                    return String(Math.floor(Math.random() * maxValue));
                };

                // Construct string with required amount of numbers - Add ', ' to all but last number
                for(let i = 0; i < createNumbers; i++) {
                    const newNumber = genNumber();
                    newNumber = !i === genNumber ? newNumber.concat(', ') : newNumber;
                    outString.concat(newNumber);                 
                };

                return outString
            };

            return `rgb(${genRgbValues()})`
        },
    }],
);

//Cycle + retrun active mode object
const useColourMode = (force, forceMode) => {
    const [activeMode, setActiveMode] = useState("");
    const [cycleMode, setCycleMode] = useState("");

    //Increment cycleMode value, Resets value = 1 if modeLimit met
    const switchMode = () => {
        const modeLimit = 2;
        cycleMode >= modeLimit ? setCycleMode(1) : setCycleMode(cycleMode++);
    };

    return activeMode;
};

export default useColourMode