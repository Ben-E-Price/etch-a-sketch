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
};

export default useUserAlert