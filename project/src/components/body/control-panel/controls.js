import { useState } from "react";
import ButtonPanel from "./button-panel";
import ResolutionInput from "./resolution-input";
import ModePanel from "./mode-panel";
import useColourMode from "../../../hooks/colour-mode";

const ControlsPanel = (prop) => {
    const [newMode, setNewMode] = useState("");
    const activeMode = useColourMode(newMode);

    return(
        <div id="control-wrapper">
            <ResolutionInput
                handleResoultion={prop.handleResoultion.bind(this)}
                resoultionSettings={prop.resoultionSettings}/>
            <ModePanel activeMode={activeMode}/>
            <ButtonPanel setActiveMode={setNewMode}/>
        </div>
    )
};

export default  ControlsPanel