import { useCallback, useEffect, useRef, useState } from "react";
import useColourMode from "../../../hooks/colour-mode";

const ModePanel = (props) => {
    const {activeMode} = props.activeMode
    
    const setCurrentModePanel = (currentMode) => {
        const {modeIdent} = currentMode;

        //User Select Mode UI Panel - Allows user to select colours
        const UserDefinedPanel = () => {     
            const ref = useRef();

            const updateColour = useCallback((ref, currentMode) => {
                console.log(ref)
                currentMode.setColour(ref)
            }, []);
    
            return (
                <div id="user-input-panel-wrapper">
                    <input id="colour-picker" type="color" ref={ref} onChange={() => updateColour(ref, currentMode)}/>
                </div>
            )
        };
    
        const RandomPanel = () => {
            return (
                <div id="random-colour-panel-wrapper">
                    <p>Some test</p>
                    <div id="colour-display-panel"/>
                </div>
            )
        };
    
        const panels = new Map([
            [1, UserDefinedPanel()],
            [2, RandomPanel()],
        ]);
    
        return panels.get(modeIdent)
    };


    return(
        <div id="mode-panel">
            <div id="mode-display">
                <h2>Current Mode</h2>
                <h3 id="current-mode-display">{activeMode.displayText}</h3>
            </div>
            {setCurrentModePanel(activeMode)}
        </div>
    )
};

export default ModePanel;