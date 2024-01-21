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
    const {modalInit, blockedElStyles, displayModal} = prop;
    const [newMode, setNewMode] = useState("");
    const colClass = "cont-col";
    const colSide = "cont-side";

    // Custom hook calls
    const {activeMode} = useColourMode(newMode);
    const {handleMouseEvent, compData} = useToolTipDisplay();
    const gridToggle = useGridToggle();
    const {handleResolutionChange,
            handleGridReset,
            handlePixelBoardChange,
            resolutionSettings,
            pixelBoardRes} = useUpdateGridResolution();
    
    const displayToolTip = (displayComp) => {
        if (displayComp) {
            return <ToolTip compData={compData}/>
        }
    };

    return(
        <div id="main-content" className="flex-row" style={displayModal ? {...blockedElStyles} : {}}>
            <span className={[colClass, colSide].join(' ')}>
            {displayToolTip(compData.compDisplay)}
                <ControlsPanel
                    modalInit={modalInit}
                    mode={[setNewMode, activeMode]}
                    gridResolution={{handleResolutionChange, resolutionSettings, handlePixelBoardChange, handleGridReset}}
                    toggleGrid={gridToggle.handleClick}
                    toolTipFn={handleMouseEvent}/>
            </span>

            <span className={[colClass, "flex-col"].join(" ")}>
                <PixelBoard 
                    pixelBoardRes={pixelBoardRes}
                    gridVisibility={gridToggle.outString}
                    activeMode={activeMode}/>
            </span>

            <span className={[colClass, colSide].join(' ')}>
            </span>
        </ div>     
    )
};

export default Body