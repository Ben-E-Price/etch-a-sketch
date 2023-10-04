import { useState } from "react";
import ButtonPanel from "./button-panel";
import ResolutionInput from "./resolution-input";
import ModePanel from "./mode-panel";
import useColourMode from "../../../hooks/colour-mode";

const ControlsPanel = (prop) => {
    const [setNewMode, activeMode] = prop.mode;

    return(
        <div id="control-wrapper">
            <ResolutionInput
                handleResoultion={prop.handleResoultion.bind(this)}
                resoultionSettings={prop.resoultionSettings}/>
            <ModePanel activeMode={activeMode}/>
            <ButtonPanel 
                setActiveMode={setNewMode}
                toggleGrid={prop.toggleGrid}/>
        </div>
    )
};

export default  ControlsPanel