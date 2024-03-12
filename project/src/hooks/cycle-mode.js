import { useCallback, useEffect, useState } from "react";

const defaultprop = {
    incrementMode: false,
    forceMode: true,
    forceModeValue: 1,
    defaultMode: 1,
};

const useSwitchMode = (prop = defaultprop) => {
    const {
        forceModeValue,
        forceMode,
        incrementMode,
        defaultMode
    } = prop;

    const [cycleModeValue, setCycleModeValue] = useState(defaultMode);
    const [forceModeState, setForceModeState] = useState(forceMode);
    const [forceModeValueState, setForceModeValueState] = useState(forceModeValue);
    const [incrementModeState, setIncrementModeState] = useState(incrementMode);

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

    useEffect(() => {
        handleModeSwitch();
    }, [handleModeSwitch]);

    return cycleModeValue
};

export default useSwitchMode