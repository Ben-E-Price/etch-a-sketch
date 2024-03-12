import { useCallback, useEffect, useState } from "react";

const defaultprop = {
    incrementMode: false,
    forceMode: true,
    forceModeValue: 1,
};

const useSwitchMode = (prop = defaultprop) => {
    const defaultModeValue = 1;
    const [cycleModeValue, setCycleModeValue] = useState(defaultModeValue);
    const [forceModeState, setForceModeState] = useState("");
    const [forceModeValueState, setForceModeValueState] = useState("");
    const [incrementModeState, setIncrementModeState] = useState("");

    const setInitalStates = useCallback((stateObj) => {
        const {
            forceModeValue,
            forceMode,
            incrementMode
        } = stateObj;

        setForceModeValueState(forceModeValue);
        setForceModeState(forceMode);
        setIncrementModeState(incrementMode);
    }, []);

    const handleModeSwitch = useCallback(() => {
        //Increment cycleMode value, Resets value = 1 if modeLimit met 
        const switchMode = () => {
            const modeLimit = 2;

            const incrementModeStateValue = () => {
                setCycleModeValue(cycleModeValue + 1);
            };

            setIncrementModeState(false);
            cycleModeValue >= modeLimit ? setCycleModeValue(defaultModeValue) : incrementModeStateValue();
        };

        const setForcedMode = () => {
            setForceModeState(false);
            setCycleModeValue(forceModeValueState);
        };

        const checkSwitchType = () => {
            if(incrementModeState) {
                switchMode();
            } else if (forceModeState) {
                setForcedMode();
            };
        };

        checkSwitchType(); 
    }, [cycleModeValue, forceModeValueState, forceModeState, incrementModeState]);

    // Inital Render
    useEffect(() => {
        setInitalStates(prop);
    }, [setInitalStates, prop]);

    useEffect(() => {
        handleModeSwitch();
    }, [handleModeSwitch]);

    return cycleModeValue
};

export default useSwitchMode