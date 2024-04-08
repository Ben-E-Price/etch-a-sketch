import { useState } from "react";
import ButtonPanel from "components/body/control-panel/button-panel";
import ResolutionInput from "components/body/control-panel/resolution-input";
import ModePanel from "components/body/control-panel/mode-panel";
import useColourMode from "hooks/colour-mode";
import classList from "data/comp-class-list.json"

const ControlsPanel = (prop) => {
    const { 
        gridResolution,
        toggleGrid,
        toolTipFn,
        modal,
        mode,
    } = prop;

    const {flexCol} = classList;

    const [setNewMode, activeMode] = mode;

    return(
        <div id="control-wrapper"
            className={flexCol}
        >
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