import { useEffect, useRef, useState } from "react";
import ControlsPanel from "components/body/control-panel/controls";
import modalInfo from "data/resolution-input.json";

const ResolutionInput = (prop) => {
    const ref = useRef("");
    const { modal: {modalInit},
            gridResolution: {
                handleResolutionChange,
                handlePixelBoardChange,
                resSettings: {
                    resNew,
                    inputStep,
                    inputMin}
                },
            classString
    } = prop;
    const {modalText} = modalInfo;

    return(
        <div id="resolution-wrapper"
            className={classString}        
        >
            <h3>Select Resoulution</h3>
            <input 
                id="resolution-input"
                type="range"
                min={inputMin} 
                max={32} 
                value={resNew}
                step={inputStep} 
                ref={ref}
                onInput={(event) => {handleResolutionChange(event)}}
                onMouseUp={(event) => {modalInit(handlePixelBoardChange, false, modalText)}}>
            </input>
            <p>{resNew} X {resNew}</p>
        </div>
    )
};

export default ResolutionInput