// Component Imports
import ControlsPanel from "components/body/control-panel/controls";
import PixelBoard from "components/body/board/pixel-board";
import ToolTip from "components/body/tool-tip";
import Modal from "components/body/modal";

// Hook Imports
import React, { useState } from "react";
import useColourMode from "hooks/colour-mode";
import useGridToggle from "hooks/grid-toggle";
import useUpdateGridResolution from "hooks/grid-resolution";
import useToolTipDisplay from "hooks/tip-display";
import useClassStringConstruct from "hooks/create-class-string"

import data from "data/comp-class-list.json"

const Body = (prop) => {
    const {
        mainCol,
        mainSide,
        flexRow,
        flexCol,
    } = data;
    const {modal,
            blockedElStyles,
            displayModal} = prop;
    const [newMode, setNewMode] = useState("");

    // Custom hook calls
    const {activeMode} = useColourMode(newMode);
    const {handleMouseEvent, compData} = useToolTipDisplay();
    const {
        handleResolutionChange,
        handleGridReset,
        handlePixelBoardChange,
        resSettings,
        pixelBoardRes
    } = useUpdateGridResolution();
    const gridToggle = useGridToggle();
    const handleClassString = useClassStringConstruct();
    const {handleClick,outString} = gridToggle;
    const {compDisplay} = compData;
    
    const displayToolTip = (displayComp) => {
        if (displayComp) {
            return <ToolTip compData={compData}/>
        };
    };

    return(
        <div 
            id="main-content"
            className={flexRow}
            style={displayModal ? {...blockedElStyles} : {}}>

            <span className={handleClassString([mainCol, mainSide])}>
            {displayToolTip(compDisplay)}
                <ControlsPanel
                    modal={modal}
                    mode={[setNewMode, activeMode]}
                    gridResolution={{
                                    handleResolutionChange,
                                    resSettings,
                                    handlePixelBoardChange,
                                    handleGridReset
                                }}
                    toggleGrid={handleClick}
                    toolTipFn={handleMouseEvent}/>
            </span>

            <span className={handleClassString([mainCol, flexCol])}>
                <PixelBoard 
                    pixelBoardRes={pixelBoardRes}
                    gridVisibility={outString}
                    activeMode={activeMode}/>
            </span>

            <span className={handleClassString([mainCol, mainSide])}>
            </span>
        </ div>     
    )
};

export default Body