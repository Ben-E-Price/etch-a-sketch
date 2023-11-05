import { useEffect, useState } from "react";

const useToolTipDisplay = () => {
    const [compData, setCompData] = useState({
        compText: "",
        compDisplay: false,
        pageLocX: "",
        pageLocY: "",
    });

    const [createTimer, setCreateTimer] = useState("")
    const [timer, setTimer] = useState("");

    // Update compData state key pair values
    const updateCompData = (keyPairs) => {
        for(const [key, value] of Object.entries(keyPairs)) {
            setCompData(prevState => {
                return {...prevState, [key]: value}
            });
        };
    };

    //Call on mouseOver + mouseOut events - Timer creation or Timer removal defined by event type
    const handleMouseEvent = (event, compText) => {
        const {type, pageX, pageY} = event;
        const locString = (loc) => `${loc}px;`;

        if(type === "mouseover") {
            setCreateTimer(true);
            setCompData({
                compText: compText,
                pageLocX: locString(pageX),
                pageLocY: locString(pageY),
            });    
        } else if (type === "mouseout") {
            setCreateTimer(false);
        };
    };

    // Create/Delete timer - Update compData.compDisplay, Display/Hide tooltip component
    const handleTimer = (timer, currentTimerState, setTimerFn, setCompDataFn) => {
        const delayTime = 1000;
        const compDis = (value) => {
            return {compDisplay: value}
        };

        //Create timer - On timer complete display component
        const createTimer = (timeDelay, setCompDataFn, compDisFn) => {
           return setTimeout(() => setCompDataFn(compDisFn(true)), timeDelay)
        };

        // Remove timer - Hide compoent
        const clearTimer = (timer, setCompDataFn, compDisFn) => {
            clearTimeout(timer);
            setCompDataFn(compDisFn(false));           
        };

        if(currentTimerState) {
            setTimerFn(createTimer(delayTime, setCompDataFn, compDis));
        } else if(!currentTimerState){
            clearTimer(timer, setCompDataFn, compDis);
        };
    };

    // Invoke handleTimer on createTimer update/change
    useEffect(() => {
        handleTimer(timer, createTimer, setTimer, updateCompData);
    }, [createTimer, timer]);

    return {handleMouseEvent, compData}
};

export default useToolTipDisplay