import { useCallback, useEffect, useState } from "react";

const useSwitchMode = ({incrementMode, forceMode, forceModeValue}) => {
    let [cycleModeValue, setCycleModeValue] = useState(1);

    //Increment cycleMode value, Resets value = 1 if modeLimit met
    const switchMode = useCallback(() => {
        const modeLimit = 2;

        if(incrementMode) {
            cycleModeValue >= modeLimit ? setCycleModeValue(1) : setCycleModeValue(cycleModeValue++);
            incrementValue = false;
        };
    }, [cycleModeValue, setCycleModeValue]);

    useEffect(() => {
        forceMode ? setCycleModeValue(forceModeValue) : switchMode();
    }, [setCycleModeValue, forceMode, forceModeValue, switchMode]);

    return cycleModeValue
};

export default useSwitchMode