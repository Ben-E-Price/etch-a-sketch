// Component Imports
import ControlsPanel from "./control-panel/controls";
import PixelBoard from "./board/pixel-board";
import ToolTip from "./tool-tip";
import Alert from "./alert"

// Hook Imports
import React, { useState } from "react";
import useColourMode from "../../hooks/colour-mode";
import useGridToggle from "../../hooks/grid-toggle";
import useUpdateGridResolution from "../../hooks/grid-resolution";
import useToolTipDisplay from "../../hooks/tip-display";
import useUserAlert from "../../hooks/user-alert";

function Body() {
    const [newMode, setNewMode] = useState("");
    const {activeMode} = useColourMode(newMode);
    const {handleResolutionChange, handleGridReset, currentSettings} = useUpdateGridResolution();
    const {handleMouseEvent, compData} = useToolTipDisplay();
    const {alertInit, alertInput, displayAlert, alertText} = useUserAlert();
    const gridToggle = useGridToggle();

    const displayToolTip = (displayComp) => {
        if (displayComp) {
            return <ToolTip compData={compData}/>
        }
    };

    const displayAlertComp = (displayComp) => {
        if (displayComp) {
            return (<Alert
                        alertInput={alertInput}
                        alertText={alertText}/>)
        }
    };

    return(
        <div id="main-content" className="flex-row">
            <Alert/>
            {displayToolTip(compData.compDisplay)}
            <ControlsPanel
                mode={[setNewMode, activeMode]}
                gridResolution={{handleResolutionChange, currentSettings, handleGridReset}}
                toggleGrid={gridToggle.handleClick}
                toolTipFn={handleMouseEvent}/>
            <PixelBoard 
                gridResolution={currentSettings.gridResolution}
                gridVisibility={gridToggle.outString}
                activeMode={activeMode}/>
        </ div>     
    )
};

export default Body