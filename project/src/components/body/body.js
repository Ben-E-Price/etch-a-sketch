import ControlsPanel from "./control-panel/controls";
import PixelBoard from "./board/pixel-board";
import React, { useState } from "react";
import useColourMode from "../../hooks/colour-mode";
import useGridToggle from "../../hooks/grid-toggle";

function Body() {
    const [newMode, setNewMode] = useState("");
    const {activeMode} = useColourMode(newMode);
    const gridToggle = useGridToggle();

    const [currentSettings, updateSettings] = useState({
        gridResolution: 16,
        inputStep: 16,
        inputMin: 0,
    });

    const handleResoultionChange = (ref) => {
        const prevRes = currentSettings.gridResolution;
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
        const resIncrease = () => {
            updateInputStep(prevRes);
            updateCurrentRes(prevRes * 2);
        };
        
        // Update inputStep value - Decrease resoulution value 
        const resDecrease = () => {
            const decreasedRes = prevRes / 2;

            updateInputStep(decreasedRes);
            updateCurrentRes(decreasedRes);
        };

        inputLimit(currentValue);
        prevRes < currentValue ? resIncrease() : resDecrease();
    };

    return(
        <div id="main-content" className="flex-row">
            <ControlsPanel
                mode={[setNewMode, activeMode]} 
                handleResoultion={handleResoultionChange} 
                resoultionSettings={currentSettings}
                toggleGrid={gridToggle.handleClick}/>
            <PixelBoard 
                gridResolution={currentSettings.gridResolution}
                gridVisibility={gridToggle.outString}
                activeMode={activeMode}/>
        </ div>     
    )
};

export default Body