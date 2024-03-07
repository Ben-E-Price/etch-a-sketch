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

import data from "../../data/comp-naming.json"

function Body(prop) {
    const {class:{
            mainCol,
            mainSide,
            flexRow,
            flexCol,
        },
    } = data;
    const {modal,
            blockedElStyles,
            displayModal} = prop;
    const [newMode, setNewMode] = useState("");

    // Custom hook calls
    const {activeMode} = useColourMode(newMode);
    const {handleMouseEvent, compData} = useToolTipDisplay();
    const {handleResolutionChange,
            handleGridReset,
            handlePixelBoardChange,
            resolutionSettings,
            pixelBoardRes} = useUpdateGridResolution();
    const gridToggle = useGridToggle();
    const {handleClick,outString} = gridToggle;
    const {compDisplay} = compData;
    
    const displayToolTip = (displayComp) => {
        if (displayComp) {
            return <ToolTip compData={compData}/>
        };
    };

    const consClassString = (classNames) => {
        return classNames.join(" ");
    };

    return(
        <div 
            id="main-content"
            className={flexRow}
            style={displayModal ? {...blockedElStyles} : {}}>

            <span className={consClassString([mainCol, mainSide])}>
            {displayToolTip(compDisplay)}
                <ControlsPanel
                    modal={modal}
                    mode={[setNewMode, activeMode]}
                    gridResolution={{handleResolutionChange,
                                    resolutionSettings,
                                    handlePixelBoardChange,
                                    handleGridReset}}
                    toggleGrid={handleClick}
                    toolTipFn={handleMouseEvent}/>
            </span>

            <span className={consClassString([mainCol, flexCol])}>
                <PixelBoard 
                    pixelBoardRes={pixelBoardRes}
                    gridVisibility={outString}
                    activeMode={activeMode}/>
            </span>

            <span className={consClassString([mainCol, mainSide])}>
            </span>
        </ div>     
    )
};

export default Body