import { useCallback, useRef } from "react";

const ModePanel = (prop) => {
    const {
            activeMode,
            classString    
    } = prop;
    const {displayText} = activeMode;

    const setCurrentModePanel = (currentMode) => {
        const {modeIdent} = currentMode;

        //User Select Mode UI Panel - Allows user to select colours
        const UserDefinedPanel = () => {     
            const ref = useRef();

            const updateColour = useCallback((ref, currentMode) => {
                currentMode.setColour(ref)
            }, []);
    
            return (
                <div id="user-input-panel-wrapper">
                    <input id="colour-picker"
                            type="color"
                            ref={ref}
                            onChange={() => updateColour(ref, currentMode)}/>
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
    
        return panels.get(modeIdent)
    };


    return(
        <div id="mode-panel"
            className={classString}        
        >
            <div id="mode-display">
                <h2>Current Mode</h2>
                <h3 id="current-mode-display">{displayText}</h3>
            </div>
            {setCurrentModePanel(activeMode)}
        </div>
    )
};

export default ModePanel;