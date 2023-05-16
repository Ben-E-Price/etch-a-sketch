import { useRef, useState } from "react";
import useColourMode from "../../../hooks/colour-mode";

const CurrentModePanels = () => {
    const UserDefinedPanel = () => {
        const ref = useRef(ref);
        
        return (
            <div id="user-input-panel-wrapper">
                <input id="colour-picker" type="color" ref={ref}/>
            </div>
        )
    };
};

const ModePanel = () => {
    const {activeMode} = useColourMode();
    const [modeText, setModeText] = useState("")

    return(
        <div id="mode-panel">
            <div id="mode-display">
                <h2>Current Mode</h2>
                <h3 id="current-mode-display">{activeMode.displayText}</h3>
            </div>
        </div>
    )
};

export default ModePanel;