import { useRef, useState } from "react";
import useColourMode from "../../../hooks/colour-mode";

const setCurrentModePanel = (selectModePanel) => {
    
    // Compoent containing colour picker element
    const UserDefinedPanel = () => {
        const ref = useRef();
        
        return (
            <div id="user-input-panel-wrapper">
                <input id="colour-picker" type="color" ref={ref}/>
            </div>
        )
    };

    const RandomPanel = () => {
        return (
            <div id="random-colour-panel-wrapper">
                <div id="colour-display-panel"/>
            </div>
        )
    };

    const panels = new Map([
        [1, UserDefinedPanel()],
        [2, RandomPanel()],
    ]);

    return panels.get(selectModePanel);
};

const ModePanel = () => {
    const {activeMode} = useColourMode();
    const currentModeIdent = activeMode.modeIdent
    const currentModePanel =  !currentModeIdent === 0 ? setCurrentModePanel(currentModeIdent) : setCurrentModePanel(1);

    return(
        <div id="mode-panel">
            <div id="mode-display">
                <h2>Current Mode</h2>
                <h3 id="current-mode-display">{activeMode.displayText}</h3>
            </div>
            {currentModePanel}
        </div>
    )
};

export default ModePanel;