import { useState } from "react";

const useGridResolution = (ref) => {
    const [currentRes, updateCurrentRes] = useState(16);
    const [inputStep, updateInputStep] = useState(currentRes);
    const [inputMin, updateInputMin] = useState(0);

    // Increase/Decrease resolution value, maintaing powers of 2
    const setRes = (ref) => {
        const prevRes = currentRes;
        const currentValue = ref.value;

        // Blocks below minimum input values - Sets input elements min value 
        const inputLimit = (inputValue) => {
            const minValue = 4;
            inputValue <= minValue ? updateInputMin(minValue) : updateInputMin(0);
        };
        
        // Update inputStep value - Increase resoulution value
        const resIncrease = () => {
            updateInputStep(currentRes);
            updateCurrentRes(currentRes * 2);
        };
        
        // Update inputStep value - Decrease resoulution value 
        const resDecrease = () => {
            const decreasedRes = currentRes / 2;

            updateInputStep(decreasedRes);
            updateCurrentRes(decreasedRes);
        };

        inputLimit(currentValue);
        prevRes < currentValue ? resIncrease() : resDecrease();
    };

    return {
        currentRes,
        inputStep,
        inputMin,
    };

};

export default useGridResolution