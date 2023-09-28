import { useCallback, useEffect, useRef, useState } from "react";
import useColourMode from "../../../hooks/colour-mode";

const ModePanel = (props) => {
    // const {activeMode} = useColourMode();
    const [activeDisText, setDisText] = useState("");
    
    const setCurrentModePanel = (currentMode) => {
        const {modeIdent} = currentMode;

        //User Select Mode UI Panel - Allows user to select colours
        const UserDefinedPanel = () => {     
            const ref = useRef();

            const updateColour = useCallback((ref) => {
                // console.log(currentMode, activeMode.colour, ref.current.value)
                // activeMode.setColour(ref);
            }, []);

            useEffect(() => {
                // console.log(activeMode, "mode panel")
                // activeMode.colour = ref.current.value
            }, [ref, updateColour]);
    
            return (
                <div id="user-input-panel-wrapper">
                    <input id="colour-picker" type="color" ref={ref} onChange={() => updateColour(ref)}/>
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

        const getPanel = (key) => {
            return panels.get(key)
        };
    
        const panels = new Map([
            [1, UserDefinedPanel()],
            [2, RandomPanel()],
        ]);
    
        return !modeIdent === 0 ? getPanel(modeIdent) : getPanel(1);
    };

    useEffect(() => {
        console.log(activeMode)
    }, [activeMode])

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