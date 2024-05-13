import { useState, useEffect, useCallback } from "react";
import { useCompResizeHeight } from "./comp-resize-height";

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

    const [blockedEl, setBlockedEl] = useState("");
    const {height} = useCompResizeHeight(displayModal, blockedEl);

    // Update element to be blocked - Via element ID
    const updateBlockedElement = (elName) => {
        const getBlockedEl = (elName) => document.getElementById(elName);
        setBlockedEl(getBlockedEl(elName));
    };

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

    // Calculate modal height based on blocked element - Re-position blocked el to original height
    const handleModalHeight = useCallback((blockedHeight) => {
        const pixelString = (value) => `${value}px`;

        const updateBlockedElTop = (blockedHeight) => {
            const newTop = blockedHeight * -1; //Invert passed value - pos > neg
            updateStatePair(setBlockedElStyles, "top", pixelString(newTop));
        };

        updateBlockedElTop(blockedHeight);
        updateStatePair(setModalData, "modalHeight", pixelString(blockedHeight));
    }, []);

    // Called on user input - Initialize user modal - Set modal text content - Set callback ref  - Display modal comp
    const modalInit = (callbackFn, fnArgs, modalText) => {
        handleModalHeight(height);
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

    //Inital Render - Initalise height value
    useEffect(() => {
        updateBlockedElement("main-content");
    }, []);

    // Update modal on blocked element height change
    useEffect(() => {
        handleModalHeight(height);
    }, [height, handleModalHeight]); 

    return {modalInit, modalInput, displayModal, modalData, blockedElStyles, modalCancelled}
};

export default useModal