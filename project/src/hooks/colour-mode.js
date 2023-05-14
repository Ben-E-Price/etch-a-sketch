import { useState } from "react";

// Contains mode objects
const modes = new Map(
    [0, {}],
    [1, {}],
    [2, {}],
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