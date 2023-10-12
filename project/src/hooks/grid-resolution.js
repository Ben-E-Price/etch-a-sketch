import { useState } from 'react';

const defaultSettings = {
    gridResolution: 16,
    inputStep: 16,
    inputMin: 0,
};

const useUpdateGridResolution = () => {
    const [currentSettings, updateSettings] = useState(defaultSettings);

    const handleResoultionChange = (ref) => {

    };

    const handleReset = () => {

    };

    return {handleResoultionChange, handleReset}
};

export default useUpdateGridResolution