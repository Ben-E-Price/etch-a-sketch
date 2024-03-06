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
    const {modal,
            blockedElStyles,
            displayModal} = prop;
    const [newMode, setNewMode] = useState("");
    const colClass = "main-col";
    const colSide = "main-side";

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
            className="flex-row"
            style={displayModal ? {...blockedElStyles} : {}}>

            <span className={consClassString([colClass, colSide])}>
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

            <span className={consClassString([colClass, "flex-col"])}>
                <PixelBoard 
                    pixelBoardRes={pixelBoardRes}
                    gridVisibility={outString}
                    activeMode={activeMode}/>
            </span>

            <span className={consClassString([colClass, colSide])}>
            </span>
        </ div>     
    )
};

export default Body