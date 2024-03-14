import { useState } from "react";

const resDefault = 16;

const defaultSettings = {
    resNew: resDefault,
    resPrev: resDefault,
    inputStep: resDefault,
    inputMin: 0,
};

const useUpdateGridResolution = () => {
    const [resSettings, setSettings] = useState(defaultSettings);
    const [pixelBoardRes, setPixelBoardRes] = useState(resDefault);
    const [oldGridRes, setOldGridRes] = useState(resDefault);

    const createSetState = stateKey => (newStateValue) => setSettings(previousState => {
        return { ...previousState, [stateKey]: newStateValue };
    });

    const setResCurrent = createSetState("resNew");
    const setResPrev = createSetState("resPrev");
    const setInputMin = createSetState("inputMin");
    const setInputStep = createSetState("inputStep");

    // Sets gird resoultion based on "ref" (gridResoultion compoent) value
    const handleResolutionChange = (event) => {
        const { resPrev } = resSettings;
        const currentValue = Number(event.target.value);

        const updateResolution = (currentValue, prevValue) => {
            const minRes = 4;
            const maxRes = 32;

            // Update inputStep + currentRes values
            const updateValues = ({resUpdated, increasedRes}) => {
                increasedRes > resUpdated ? setResCurrent(increasedRes) : setResCurrent(resUpdated);
                setInputStep(updateResolution);
            };

            // Increase currentResoultion value - Pass updated value into updateFn
            const resIncrease = (maxRes, currentRes, updateFn) => {
                const increasedRes = currentRes * 2;
                updateFn({resUpdated: currentRes, increasedRes});
            };

            // Decrease currentResoultion value - Pass updated value into updateFn
            const resDecrease = (minRes, currentRes, updateFn) => {
                const decreasedRes = currentRes / 2;

                if(decreasedRes > minRes) {
                    updateFn({resUpdated: decreasedRes});
                } else if (decreasedRes <= minRes) {
                    // Set resoultion to minRes value - Update input min value - Prevent lower values being input
                    updateFn({resUpdated: minRes});
                    setInputMin(minRes);
                };                
            };

            currentValue > resPrev ? resIncrease(maxRes, resPrev, updateValues) : resDecrease(minRes, resPrev, updateValues);
        };

        setResPrev(resSettings.resNew);
        updateResolution(currentValue, resPrev);
    };

    // Update pixelBoardRes state value to current value of ReousltionInput comp - Defines resoultion for PixelBoard comp
    const handlePixelBoardChange = (userInput) => {
        const {resNew} = resSettings;
        
        const handleUpdateConfirm = (resUpdate) => {
            setPixelBoardRes(resUpdate);  
            setOldGridRes(resUpdate);
        };

        const handleUpdateCancel = (resUpdate) => {
            setResCurrent(resUpdate);
        };

        userInput ? handleUpdateConfirm(resNew) : handleUpdateCancel(oldGridRes);
    };

    // Reset resSettings to defaultSettings value - Resets grid UI 
    const handleGridReset = () => {
        setSettings(defaultSettings);
    };

    return {handleResolutionChange, handlePixelBoardChange, handleGridReset, resSettings, pixelBoardRes}
};

export default useUpdateGridResolution