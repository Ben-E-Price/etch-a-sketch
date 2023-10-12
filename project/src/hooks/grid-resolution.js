import { useState } from 'react';

const defaultSettings = {
    gridResolution: 16,
    inputStep: 16,
    inputMin: 0,
};

const useUpdateGridResolution = () => {
    const [currentSettings, updateSettings] = useState(defaultSettings);

    // Sets gird resoultion based on "ref" (gridResoultion compoent) value
    const handleResoultionChange = (ref) => {
        const prevResolution = currentSettings.gridResolution;
        const currentValue = Number(ref.value);

        const updateState = stateKey => (newStateValue) => updateSettings(previousState => {         
            return {...previousState, [stateKey]: newStateValue};
        })

        const updateCurrentRes = updateState('gridResolution');
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

        inputLimit(currentValue);
        prevResolution < currentValue ? resIncrease(currentValue) : resDecrease(prevResolution);
    };

    // Reset currentSettings to defaultSettings value - Resets grid UI 
    const handleReset = () => {
        updateSettings(defaultSettings);
    };

    return {handleResoultionChange, handleReset, currentSettings}
};

export default useUpdateGridResolution