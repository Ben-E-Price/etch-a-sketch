import { useState } from "react";

const useModal = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const [modalData, setModalData] = useState({
        modalText: "temp",
        modalHeight: 0,
    });

    const [blockedFn, setBlockedFn] = useState({
        callbackFn: false,
        fnArgs: [],
    });

    // Style properties required by blocked element
    const [blockedElStyles, setBlockedElStyles] = useState({
        position: "relative",
        "z-index": 0,
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
        for(const key of Object.keys(currentState)) {
            const newValue = newState[key];
            updateStatePair(setBlockedFn, key, newValue);
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
                updateStatePair(setBlockedElStyles, "top", newTop);
            };

            const blockedHeight = getElementHeight(blockedElId);
            updateBlockedElTop(blockedHeight);
            updateStatePair(setModalData, "modalHeight", blockedHeight);
        };

        handleHeight("main-content");
        updateStatePair(setModalData, "modalText", modalText);
        updateBlockedFn({callbackFn, fnArgs});
        setDisplayModal(true);
    };

    // Called on user input via modal comp - Hide modal comp - Execute blocked inital function on confirm
    const modalInput = (userConfirm, blockedFn) => {
        setDisplayModal(false);

        if(userConfirm) {
            const [callbackFn, fnArgs] = blockedFn;
            callbackFn(...fnArgs);
        };
    };

    return {modalInit, modalInput, displayModal, modalData, blockedElStyles}
};

export default useModal