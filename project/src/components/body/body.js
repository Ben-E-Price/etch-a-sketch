import ControlsPanel from "./control-panel/controls";
import PixelBoard from "./board/pixel-board";
import { useState } from "react";

function Body() {
    const [currentSettings, setResolution] = useState({
        gridResolution: 16,
        inputStep: 16,
        inputMin: 0,
    });

    const handleResoultionChange = (ref) => {
        const prevRes = currentSettings.gridResolution;
        const currentRes = currentSettings.gridResolution;
        const currentValue = ref.value;

        const updateState = stateKey => (newStateValue) => setResolution(previousState => {
            return {...previousState, stateKey: newStateValue};
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

    return(
        <div id="main-content" className="flex-row">
            <ControlsPanel 
            handleResoultion={handleResoultionChange} 
            resoultionSettings={currentSettings}/>
            <PixelBoard gridResolution={currentSettings.gridResolution}/>
        </ div>
    )
};

export default Body