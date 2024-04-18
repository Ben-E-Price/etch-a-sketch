import { useState } from "react";
import ButtonPanel from "components/body/control-panel/button-panel";
import ResolutionInput from "components/body/control-panel/resolution-input";
import ModePanel from "components/body/control-panel/mode-panel";
import useColourMode from "hooks/colour-mode";
import classList from "data/comp-class-list.json"
import useClassStringConstruct from "hooks/create-class-string";

const ControlsPanel = (prop) => {
    const { 
        gridResolution,
        toggleGrid,
        toolTipFn,
        modal,
        mode,
    } = prop;
    const {
            flexCol,
            panel
    } = classList;
    const handleClassString = useClassStringConstruct()

    const [setNewMode, activeMode] = mode;
    const panelClass = handleClassString([flexCol, panel])

    return(
        <div 
            id="control-wrapper"
            className={flexCol}
        >
            <div 
                id="heading-panel"
                className={panelClass}    
            >
                <h1>Board Settings</h1>
            </div>

            <ResolutionInput
                classString={panelClass}
                modal={modal}
                gridResolution={gridResolution}/>
            <ModePanel 
                activeMode={activeMode}
                classString={panelClass}/>
            <ButtonPanel
                classString={panelClass} 
                modal={modal}
                setActiveMode={setNewMode}
                gridResolution={gridResolution}
                toggleGrid={toggleGrid}
                toolTipFn={toolTipFn}/>
        </div>
    )
};

export default  ControlsPanel