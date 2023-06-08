import { useCallback, useEffect, useRef, useState } from "react";

const tempProps = {
    incrementMode: false,
    forceMode: false,
    forceModeValue: null,
};

const useSwitchMode = (props = tempProps) => {
    const [cycleModeSettings, setCycleModeSettings] = useState(props);
    const {forceMode, forceModeValue} = cycleModeSettings;
    const incrementMode = useRef(cycleModeSettings.incrementMode);
    let [cycleModeValue, setCycleModeValue] = useState(1);

    //Increment cycleMode value, Resets value = 1 if modeLimit met
    const switchMode = useCallback(() => {
        const modeLimit = 2;
        cycleModeValue >= modeLimit ? setCycleModeValue(1) : setCycleModeValue(cycleModeValue++);
        incrementMode.current = false;
    }, [cycleModeValue, setCycleModeValue, incrementMode]);

    useEffect(() => {
        console.log("props", props)
        forceMode ? setCycleModeValue(forceModeValue) : switchMode();
    }, [setCycleModeValue, forceMode, forceModeValue, switchMode, props]);

    return cycleModeValue
};

export default useSwitchMode