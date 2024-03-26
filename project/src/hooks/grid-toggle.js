import { useState } from "react";
import data from "data/comp-class-list.json";

const useGridToggle = () => {
    const [stateToggle, setStateToggle] = useState(false);
    const [outString, setOutString] = useState("");

    const handleClick = (stateCheck = stateToggle) => {
        const {activeBackground} = data;

        const handleStateChange = (toggleSwitch, stringSwitch) => {
            setOutString(stringSwitch);
            setStateToggle(toggleSwitch);
        };

        // stateCheck === true, hide grid - stateCheck === false, display grid 
        stateCheck ? handleStateChange(false, false) : handleStateChange(true, activeBackground);
    };

    return {handleClick, outString}
};

export default useGridToggle