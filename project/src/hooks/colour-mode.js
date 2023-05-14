import { useState } from "react";

const useColourMode = (force, forceMode) => {
    const [activeMode, setActiveMode] = useState("");
    const [cycleMode, setCycleMode] = useState("");

    return activeMode;
};

export default useColourMode