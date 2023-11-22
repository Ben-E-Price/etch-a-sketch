import { useState } from "react";

const useUserModal = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const [modalText, setModalText] = useState("");
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

    // Called on user input - Initialize user modal - Set modal text content - Set callback ref  - Display modal comp
    const modalInit = (callbackFn, fnArgs, modalText) => {
        setModalText(modalText);
        updateBlockedFn([callbackFn, fnArgs]);
        setDisplayModal(true);
    };

    // Called on user input via modal comp - Hide modal comp - Execute blocked inital function on confirm
    const modalInput = (userConfirm, blockedFn) => {
        setDisplayModal(false);

        if(userConfirm) {
            const [callback, fnArgs] = blockedFn;
            callback(...fnArgs);
        };
    };

    return {modalInit, modalInput, displayModal, modalText}
};

export default useUserModal