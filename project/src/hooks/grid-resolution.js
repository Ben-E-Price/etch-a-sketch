import { useState } from 'react';

const defaultSettings = {
    gridResolution: 16,
    prevRes: 16,
    inputStep: 16,
    inputMin: 0,
};

const useUpdateGridResolution = () => {
    const [currentSettings, updateSettings] = useState(defaultSettings);
    // Sets gird resoultion based on "ref" (gridResoultion compoent) value
    const handleResolutionChange = (ref) => {
        const {prevRes} = currentSettings;
        const currentValue = Number(ref.value);

        const updateState = stateKey => (newStateValue) => updateSettings(previousState => {         
            return {...previousState, [stateKey]: newStateValue};
        })

        const updateCurrentRes = updateState('gridResolution');
        const updatePrevValue = updateState('prevRes');
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

        updatePrevValue(currentSettings.gridResolution);
        inputLimit(currentValue);
        prevRes < currentValue ? resIncrease(prevRes) : resDecrease(prevRes);
    };

    // Reset currentSettings to defaultSettings value - Resets grid UI 
    const handleGridReset = () => {
        updateSettings(defaultSettings);
    };

    return {handleResolutionChange, handleGridReset, currentSettings}
};

export default useUpdateGridResolution