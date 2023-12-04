import { useEffect, useRef, useState } from 'react';
import ControlsPanel from './controls';

const ResolutionInput = (prop) => {
    const ref = useRef('');
    const {handleResolutionChange, resolutionSettings: {gridResolution, inputStep, inputMin}, handlePixelBoardChange} = prop.gridResolution;
    const {modalInit} = prop;

    return(
        <>
            <p>Resoulution {gridResolution} X {gridResolution}</p>
            <input 
                id='resolution-input'
                type='range'
                min={inputMin} 
                max={64} 
                value={gridResolution}
                step={inputStep} 
                ref={ref}
                onInput={(event) => {handleResolutionChange(event.target)}}
                onMouseUp={(event) => {modalInit(handlePixelBoardChange)}}>
            </input>
        </>
    )
};

export default ResolutionInput