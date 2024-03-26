import { useState } from 'react';

const useGridToggle = () => {
    const [stateToggle, setStateToggle] = useState(false);
    const [outString, setOutString] = useState('');

    const handleClick = (stateCheck = stateToggle) => {
        const hideClass = "";
        const displayClass = '1px solid black';

        const handleStateChange = (toggleSwitch, stringSwitch) => {
            setOutString(stringSwitch);
            setStateToggle(toggleSwitch);
        };

        // stateCheck === true, hide grid - stateCheck === false, display grid 
        stateCheck ? handleStateChange(false, hideClass) : handleStateChange(true, displayClass);
    };

    return {handleClick, outString}
};

export default useGridToggle