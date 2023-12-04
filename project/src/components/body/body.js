// Component Imports
import ControlsPanel from "./control-panel/controls";
import PixelBoard from "./board/pixel-board";
import ToolTip from "./tool-tip";
import Modal from "./modal"

// Hook Imports
import React, { useState } from "react";
import useColourMode from "../../hooks/colour-mode";
import useGridToggle from "../../hooks/grid-toggle";
import useUpdateGridResolution from "../../hooks/grid-resolution";
import useToolTipDisplay from "../../hooks/tip-display";

function Body(prop) {
    const {modalInit, blockedElStyles} = prop;
    const [newMode, setNewMode] = useState("");
    const {activeMode} = useColourMode(newMode);
    const {handleMouseEvent, compData} = useToolTipDisplay();
    const {handleResolutionChange,
            handleGridReset,
            handlePixelBoardChange,
            resolutionSettings,
            pixelBoardRes} = useUpdateGridResolution();
    const gridToggle = useGridToggle();
        
    const displayToolTip = (displayComp) => {
        if (displayComp) {
            return <ToolTip compData={compData}/>
        }
    };

    return(
        <div id="main-content" className="flex-row">
            {displayToolTip(compData.compDisplay)}
            <ControlsPanel
                modalInit={modalInit}
                mode={[setNewMode, activeMode]}
                gridResolution={{handleResolutionChange, resolutionSettings, handlePixelBoardChange}}
                toggleGrid={gridToggle.handleClick}
                toolTipFn={handleMouseEvent}/>
            <PixelBoard 
                pixelBoardRes={pixelBoardRes}
                gridVisibility={gridToggle.outString}
                activeMode={activeMode}/>
        </ div>     
    )
};

export default Body