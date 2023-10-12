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

    };

    // Reset currentSettings to defaultSettings value - Resets grid UI 
    const handleReset = () => {
        updateSettings(defaultSettings);
    };

    return {handleResoultionChange, handleReset}
};

export default useUpdateGridResolution