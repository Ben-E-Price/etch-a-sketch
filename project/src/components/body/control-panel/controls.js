import { useState } from "react";
import ButtonPanel from "./button-panel";
import ResolutionInput from "./resolution-input";
import ModePanel from "./mode-panel";
import useColourMode from "../../../hooks/colour-mode";

const ControlsPanel = (prop) => {
    const { gridResolution,
        toggleGrid,
        toolTipFn,
        modal,
        mode,
    } = prop;

    const [setNewMode, activeMode] = mode;

    return(
        <div id="control-wrapper">
            <ResolutionInput
                modal={modal}
                gridResolution={gridResolution}/>
            <ModePanel activeMode={activeMode}/>
            <ButtonPanel 
                modal={modal}
                setActiveMode={setNewMode}
                gridResolution={gridResolution}
                toggleGrid={toggleGrid}
                toolTipFn={toolTipFn}/>
        </div>
    )
};

export default  ControlsPanel