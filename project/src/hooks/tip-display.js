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
        const {type, target} = event;

        //Return component screen postion based on eventLocation - Return string, applied within component inline styling
        const componentPosition = (target) => {
            const locationString = (pageLocation) => `${pageLocation}px`;

            const calcTipPos = (target) => {

                // Create object containg location + sizing infomation from hoverd element 
                const getTargetInfo = (target) => {
                    const {
                        offsetLeft,
                        offsetTop,
                        offsetWidth,
                        offsetHeight,
                    } = target;

                    const targetLoc = {
                        offsetLeft,
                        offsetTop
                    };

                    const targetSize = {
                        offsetHeight,
                        offsetWidth
                    };

                    return {targetLoc, targetSize}
                };
            }


        };

        if(type === "mouseenter") {
            setCreateTimer(true);
            updateCompData({
                compText: compText,
                pageLocX: componentPosition(pageX, false),
                pageLocY: componentPosition(pageY, true, 20), 
            });  
        } else if (type === "mouseleave") {
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
    }, [createTimer]);

    return {handleMouseEvent, compData}
};

export default useToolTipDisplay