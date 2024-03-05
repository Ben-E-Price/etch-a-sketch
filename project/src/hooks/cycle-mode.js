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

    const setStates = useCallback(() => {
        setForceModeValueState(prop.forceModeValue);
        setForceModeState(prop.forceMode);
        setIncrementModeState(prop.incrementMode);
    }, [prop.forceModeValue, prop.forceMode, prop.incrementMode]);

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
        setStates();
    }, [setStates, prop]);

    useEffect(() => {
        handleModeSwitch();
    }, [handleModeSwitch]);

    return cycleModeValue
};

export default useSwitchMode