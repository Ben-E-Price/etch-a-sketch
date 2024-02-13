import { useState } from 'react';

const defaultRes = 16;

const defaultSettings = {
    gridResolution: defaultRes,
    prevRes: defaultRes,
    inputStep: defaultRes,
    inputMin: 0,
};

const useUpdateGridResolution = () => {
    const [resolutionSettings, updateSettings] = useState(defaultSettings);
    const [pixelBoardRes, setPixelBoardRes] = useState(defaultSettings.gridResolution);
    // console.log(resolutionSettings)

    // Sets gird resoultion based on "ref" (gridResoultion compoent) value
    function handleResolutionChange(event) {
        const { prevRes } = resolutionSettings;
        const currentValue = Number(event.target.value);

        const updateState = stateKey => (newStateValue) => updateSettings(previousState => {
            return { ...previousState, [stateKey]: newStateValue };
        });

        const updateCurrentRes = updateState('gridResolution');
        const updatePrevRes = updateState('prevRes');
        const updateInputMin = updateState('inputMin');
        const updateInputStep = updateState('inputStep');

        // Blocks below minimum input values - Sets input elements min value 
        const inputLimit = (inputValue) => {
            const minValue = 4;
            inputValue <= minValue ? updateInputMin(minValue) : updateInputMin(0);
        };

        // Update inputStep value - Increase resoulution value
        const resIncrease = (currentResolution) => {
            updateInputStep(currentResolution);
            updateCurrentRes(currentResolution * 2);
        };

        // Update inputStep value - Decrease resoulution value 
        const resDecrease = (resolution) => {
            const decreasedRes = resolution / 2;

            updateInputStep(decreasedRes);
            updateCurrentRes(decreasedRes);
        };

        updatePrevRes(resolutionSettings.gridResolution);
        inputLimit(currentValue);
        currentValue > prevRes ? resIncrease(prevRes) : resDecrease(prevRes);
    }

    // Update pixelBoardRes state value to current value of ReousltionInput comp - Defines resoultion for PixelBoard comp
    const handlePixelBoardChange = () => {
        const {gridResolution} = resolutionSettings;
        setPixelBoardRes(gridResolution);
    };

    // Reset resolutionSettings to defaultSettings value - Resets grid UI 
    const handleGridReset = () => {
        updateSettings(defaultSettings);
    };

    return {handleResolutionChange, handlePixelBoardChange, handleGridReset, resolutionSettings, pixelBoardRes}
};

export default useUpdateGridResolution