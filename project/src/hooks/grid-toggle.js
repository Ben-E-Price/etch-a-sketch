import { useState } from "react";

const useGridToggle = () => {
    const [stateToggle, setStateToggle] = useState(false);
    const [outString, setOutString] = useState("none");

    const handleClick = (stateCheck = stateToggle) => {
        const handleStateChange = (toggleSwitch, stringSwitch) => {
            setOutString(stringSwitch);
            setStateToggle(toggleSwitch);
        };

        // stateCheck === true, hide grid - stateCheck === false, display grid 
        stateCheck ? handleStateChange(false, "none") : handleStateChange(true, "")
    };
};

export default useGridToggle