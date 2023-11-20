import { useState } from "react";

const useUserAlert = () => {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [alertText, setAlertText] = useState("");
    const [blockedFn, setBlockedFn] = useState({
        fn: false,
        args: [],
    });

    // Update all blockedFn state keypairs with newState values
    const updateBlockedFn = (newState, currentState = blockedFn) => {

        for(const [index, key] of Object.keys(currentState)) {

            setBlockedFn((prevState) => {
                return {...prevState, [key]: newState[index]}
            });
        };
    };

    // Called on user input - Initialize user alert - Set alert text content - Set callback ref  - Display alert comp
    const alertInit = (callbackFn, fnArgs, alertText) => {
        setAlertText(alertText);
        updateBlockedFn([callbackFn, fnArgs]);
        setDisplayAlert(true);
    };

    // Called on user input via alert comp - Hide alert comp - Execute blocked inital function on confirm
    const alertInput = (userConfirm, blockedFn) => {
        setDisplayAlert(false);

        if(userConfirm) {
            const [callback, fnArgs] = blockedFn;
            callback(...fnArgs);
        };
    };
};

export default useUserAlert