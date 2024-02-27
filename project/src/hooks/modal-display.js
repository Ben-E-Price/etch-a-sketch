import { useState } from "react";

const useModal = () => {
    let modalCancelled = false;
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
        "zIndex": 0,
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
        
        // Return empty array if args = falsy value 
        const argsCheck = (args) => {
            return !args ? [] : args
        };

        for(const key of Object.keys(currentState)) {
            let newValue = newState[key];
            newValue = key === "fnArgs" ? argsCheck(newValue) : newValue;
            updateStatePair(setBlockedFn, key, newValue);
        };
    };

    // Called on user input - Initialize user modal - Set modal text content - Set callback ref  - Display modal comp
    const modalInit = (callbackFn, fnArgs, modalText) => {
        // Get height of blocked element
        const handleHeight = (blockedElId) => {
            const pixelString = (value) => `${value}px`;
            
            const getElementHeight = (blockedElId) => {
                return document.getElementById(blockedElId).clientHeight;
            };
            
            const updateBlockedElTop = (blockedHeight) => {
                const newTop = blockedHeight * -1; //Invert passed value - pos > neg
                updateStatePair(setBlockedElStyles, "top", pixelString(newTop));
            };
            
            const blockedHeight = getElementHeight(blockedElId);
            updateBlockedElTop(blockedHeight);
            updateStatePair(setModalData, "modalHeight", pixelString(blockedHeight));
        };

        handleHeight("main-content");
        updateStatePair(setModalData, "modalText", modalText);
        updateBlockedFn({callbackFn, fnArgs});
        setDisplayModal(true);
    };

    // Called on user input via modal comp - Hide modal comp - Execute blocked inital function on confirm
    const modalInput = (userConfirm, blockedCallbackFn = blockedFn) => {
        setDisplayModal(false);
        const {callbackFn, fnArgs} = blockedCallbackFn;
        callbackFn(...fnArgs, userConfirm);
    };

    return {modalInit, modalInput, displayModal, modalData, blockedElStyles, modalCancelled}
};

export default useModal