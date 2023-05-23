import { useCallback, useEffect, useState } from "react";

const useSwitchMode = ({incrementValue, force, forceModeValue}) => {
    let [cycleModeValue, setCycleModeValue] = useState(1);

    //Increment cycleMode value, Resets value = 1 if modeLimit met
    const cycleMode = useCallback(() => {
        const modeLimit = 2;
        cycleModeValue >= modeLimit ? setCycleModeValue(1) : setCycleModeValue(cycleModeValue++);
    }, [cycleModeValue, setCycleModeValue])

    useEffect(() => {
        force ? setCycleModeValue(forceModeValue) : cycleMode();
    }, [setCycleModeValue, force, forceModeValue, cycleMode]);

    return cycleModeValue
};

export default useSwitchMode