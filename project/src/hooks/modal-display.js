import { useState } from "react";

const useUserModal = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const [modalData, setModalData] = useState({
        modalText: "temp",
        modalHeight: 0,
    });

    const [blockedFn, setBlockedFn] = useState({
        fn: false,
        args: [],
    });

    // Style properties required by blocked element
    const [blockedElStyles, setBlockedElStyles] = useState({
        position: "relative",
        [z-index]: 0,
        top: 0
    });

    // Update state object keypair values
    const updateStatePair = (stateCallback, keyName, newValue) => {
        stateCallback((prevValue) => {
            return {...prevValue, [keyName]: newValue}
        });
    };

    // Update all blockedFn state keypairs with newState values
    const updateBlockedFn = (newState, currentState = blockedFn) => {
        for(const [index, key] of Object.keys(currentState)) {
            updateStatePair(setBlockedFn, key, newState[index]);
        };
    };

    // Called on user input - Initialize user modal - Set modal text content - Set callback ref  - Display modal comp
    const modalInit = (callbackFn, fnArgs, modalText) => {
        
        // Get height of blocked element
        const handleHeight = (blockedElId) => { 
            const getElementHeight = (blockedElId) => {
                return document.getElementById(blockedElId).clientHeight;
            };

            const updateBlockedElTop = (blockedHeight) => {
                const newTop = blockedHeight * -1; //Invert passed value - pos > neg
                updateStatePair(blockedElStyles, "top", newTop);
            };

            const blockedHeight = getElementHeight(blockedElId);
            updateBlockedElTop(blockedHeight);
            updateStatePair(setModalData, "modalHeight", blockedHeight);
        };

        handleHeight("main-content");
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