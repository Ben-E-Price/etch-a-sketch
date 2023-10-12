import ControlsPanel from "./control-panel/controls";
import PixelBoard from "./board/pixel-board";
import React, { useState } from "react";
import useColourMode from "../../hooks/colour-mode";
import useGridToggle from "../../hooks/grid-toggle";
import useUpdateGridResolution from "../../hooks/grid-resolution";

function Body() {
    const [newMode, setNewMode] = useState("");
    const {activeMode} = useColourMode(newMode);
    const gridToggle = useGridToggle();
    const {handleResoultionChange, handleReset, currentSettings} = useUpdateGridResolution();

    return(
        <div id="main-content" className="flex-row">
            <ControlsPanel
                mode={[setNewMode, activeMode]} 
                handleResoultion={handleResoultionChange} 
                resoultionSettings={currentSettings}
                toggleGrid={gridToggle.handleClick}/>
            <PixelBoard 
                gridResolution={currentSettings.gridResolution}
                gridVisibility={gridToggle.outString}
                activeMode={activeMode}/>
        </ div>     
    )
};

export default Body