import { useEffect, useState } from "react";
import useSwitchMode from "./cycle-mode";

// Contains mode objects
const modes = new Map([
    [0, {
        modeIdent: 0,
        displayText: "Erase",
        colour: "none",
    }],

    [1, {
        modeIdent: 1,
        displayText: "User Selected Colour",
        colour: "Colour String",

        // //Returns current value of colour picker element - Selected by user
        setColour: function(ref) {
            this.colour = ref.current.value;
        },
    }],

    [2, {
        modeIdent: 2,
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
                    let newNumber = genNumber();
                    newNumber = !i === genNumber ? newNumber.concat(', ') : newNumber;
                    outString.concat(newNumber);                 
                };

                return outString
            };

            return `rgb(${genRgbValues()})`
        },
    }],
]);

//Cycle + retrun active mode object
const useColourMode = () => {
    const [activeMode, setActiveMode] = useState("");
    const activeModeValue = useSwitchMode();

    useEffect(() => {
        setActiveMode(modes.get(activeModeValue));
    }, [activeModeValue , activeMode]);
        
    return {activeMode};
};

export default useColourMode