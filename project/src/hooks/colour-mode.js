import { useCallback, useEffect, useState } from "react";
import ModePanel from "../components/body/control-panel/mode-panel";

const intialSwitchStates = {
    incrementMode: false,
    forceMode: true,
    forceModeValue: 1,
};

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
const useColourMode = (switchProps = intialSwitchStates) => {
    const defaultModeValue = 1;
    const [activeModeValue, setActiveModeValue] = useState(defaultModeValue);
    const [switchState, setSwitchState] = useState("");
    const [activeMode, setActiveMode] = useState("");

    // Inserts object containg keypairs into switchState
    const handleSwitchStates = useCallback(() => {
        setSwitchState(switchProps);
    }, [setSwitchState, switchProps]);

    // Force or increment activeModeValue dependent on values/settings within switchState
    const switchModeValue = useCallback(() => {
        const {forceMode, forceModeValue, incrementMode} = switchState;

        //Update switchState individual keypair values 
        const updateSwitchStates = (keyName, keyValue) => {
            setSwitchState((prevState) => {
                return {...prevState, [keyName]: keyValue}
            });
        };
    
        // Increments activeModeValue - Resets to default value once modeLimit is reached
        const incrementModeSwitch = (currentModeValue) => {
            const modeLimit = modes.size - 1;

            const incrementActiveMode = () => {
                setActiveModeValue(currentModeValue + 1); 
            };

            updateSwitchStates("incrementMode", false);
            currentModeValue === modeLimit ? setActiveModeValue(defaultModeValue) : incrementActiveMode();
        };

        //Forces/Sets activeModeValue to specified passed value
        const forceModeSwitch = (forceValue) => {
            updateSwitchStates("forceMode", false);
            setActiveModeValue(forceValue);
        };

        // Checks method with whitch to set activeModeValue 
        const checkSwitchType = (activeMode, forceValue) => {
            if(incrementMode) {
                incrementModeSwitch(activeMode);
            } else if (forceMode) {
                forceModeSwitch(forceValue);
            };
        };

        checkSwitchType(activeModeValue, forceModeValue);
    }, [switchState, activeModeValue]);

    // Sets activeMode to required object from modes map
    const setColourMode = useCallback(() => {
        switchModeValue();
        setActiveMode(modes.get(activeModeValue));
    }, [switchModeValue, activeModeValue]);

    useEffect(() => {
        handleSwitchStates();
    }, [handleSwitchStates]);
    
    useEffect(() => {
        setColourMode();
    }, [setColourMode]);
    
    return {activeMode};
};

export default useColourMode