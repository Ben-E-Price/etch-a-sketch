import { useState } from 'react';

const defaultRes = 16;

const defaultSettings = {
    newRes: defaultRes,
    prevRes: defaultRes,
    inputStep: defaultRes,
    inputMin: 0,
};

const useUpdateGridResolution = () => {
    const [resolutionSettings, updateSettings] = useState(defaultSettings);
    const [pixelBoardRes, setPixelBoardRes] = useState(defaultRes);
    const [oldGridRes, updateOldGridRes] = useState(defaultRes);

    const updateState = stateKey => (newStateValue) => updateSettings(previousState => {
        return { ...previousState, [stateKey]: newStateValue };
    });

    const updateCurrentRes = updateState('newRes');
    const updatePrevRes = updateState('prevRes');
    const updateInputMin = updateState('inputMin');
    const updateInputStep = updateState('inputStep');

    // Sets gird resoultion based on "ref" (gridResoultion compoent) value
    function handleResolutionChange(event) {
        const { prevRes } = resolutionSettings;
        const currentValue = Number(event.target.value);

        const updateResolution = (currentValue, prevValue) => {
            const minRes = 4;
            const maxRes = 32;

            // Update inputStep + currentRes values
            const updateValues = ({updatedRes, increasedRes}) => {
                increasedRes > updatedRes ? updateCurrentRes(increasedRes) : updateCurrentRes(updatedRes);
                updateInputStep(updateResolution);
            };

            // Increase currentResoultion value - Pass updated value into updateFn
            const resIncrease = (maxRes, currentResolution, updateFn) => {
                const increasedRes = currentResolution * 2;
                updateFn({updatedRes: currentResolution, increasedRes});
            };

            // Decrease currentResoultion value - Pass updated value into updateFn
            const resDecrease = (minRes, currentResolution, updateFn) => {
                const decreasedRes = currentResolution / 2;

                if(decreasedRes > minRes) {
                    updateFn({updatedRes: decreasedRes});
                } else if (decreasedRes <= minRes) {
                    // Set resoultion to minRes value - Update input min value - Prevent lower values being input
                    updateFn({updatedRes: minRes});
                    updateInputMin(minRes);
                };                
            };

            currentValue > prevRes ? resIncrease(maxRes, prevRes, updateValues) : resDecrease(minRes, prevRes, updateValues);
        };

        updatePrevRes(resolutionSettings.newRes);
        updateResolution(currentValue, prevRes);
    };

    // Update pixelBoardRes state value to current value of ReousltionInput comp - Defines resoultion for PixelBoard comp
    const handlePixelBoardChange = (userInput) => {
        const {newRes} = resolutionSettings;
        
        const handleUpdateConfirm = (resoultion) => {
            setPixelBoardRes(resoultion);  
            updateOldGridRes(resoultion);
        };

        const handleUpdateCancel = (resoultion) => {
            updateCurrentRes(resoultion);
        };

        userInput ? handleUpdateConfirm(newRes) : handleUpdateCancel(oldGridRes);
    };

    // Reset resolutionSettings to defaultSettings value - Resets grid UI 
    const handleGridReset = () => {
        updateSettings(defaultSettings);
    };

    return {handleResolutionChange, handlePixelBoardChange, handleGridReset, resolutionSettings, pixelBoardRes}
};

export default useUpdateGridResolution