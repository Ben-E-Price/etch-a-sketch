import { useState } from 'react';

const useGridToggle = () => {
    const [stateToggle, setStateToggle] = useState(false);
    const [outString, setOutString] = useState('none');

    const handleClick = (stateCheck = stateToggle) => {
        const hideStyle = 'none';
        const displayStyle = '1px solid black';

        const handleStateChange = (toggleSwitch, stringSwitch) => {
            setOutString(stringSwitch);
            setStateToggle(toggleSwitch);
        };

        // stateCheck === true, hide grid - stateCheck === false, display grid 
        stateCheck ? handleStateChange(false, hideStyle) : handleStateChange(true, displayStyle);
    };
};

export default useGridToggle