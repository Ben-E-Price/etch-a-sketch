import { useEffect, useRef, useState } from "react";
import ControlsPanel from "components/body/control-panel/controls";
import modalInfo from "data/resolution-input.json";
import classList from "data/comp-class-list.json";

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
                }
    } = prop;
    const {modalText} = modalInfo;
    const {flexCol} = classList;

    return(
        <div id="resolution-wrapper"
            className={flexCol}        
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