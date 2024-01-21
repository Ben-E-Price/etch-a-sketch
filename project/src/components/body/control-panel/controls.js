import { useState } from "react";
import ButtonPanel from "./button-panel";
import ResolutionInput from "./resolution-input";
import ModePanel from "./mode-panel";
import useColourMode from "../../../hooks/colour-mode";

const ControlsPanel = (prop) => {
    const [setNewMode, activeMode] = prop.mode;
    const {modalInit} = prop;

    return(
        <div id="control-wrapper">
            <ResolutionInput
                modalInit={modalInit}
                gridResolution={prop.gridResolution}/>
            <ModePanel activeMode={activeMode}/>
            <ButtonPanel 
                modalInit={modalInit}
                setActiveMode={setNewMode}
                gridResolution={prop.gridResolution}
                toggleGrid={prop.toggleGrid}
                toolTipFn={prop.toolTipFn}/>
        </div>
    )
};

export default  ControlsPanel