import { useState } from "react";

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
        for(const [key, value] in keyPairs.entries()) {
            setCompData(prevState => {
                return {...prevState, [key]: value}
            });
        };
    };

    //Call on mouseOver + mouseOut events - Timer creation or Timer removal defined by event type
    const handleMouseEvent = (event, compText) => {
        
    };

};

export default useToolTipDisplay