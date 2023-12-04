import { useEffect, useRef, useState } from 'react';
import ControlsPanel from './controls';

const ResolutionInput = (prop) => {
    const ref = useRef('');
    const {handleResolutionChange, currentSettings: {gridResolution, inputStep, inputMin}} = prop.gridResolution;
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
                onChange={(event) => {handleResolutionChange(event.target)}}
                // onInput={(event) => {handleResolutionChange(event.target)}}
                // onInput={(event) => {modalInit(handleResolutionChange, [event.target])}}
                >
            </input>
        </>
    )
};

export default ResolutionInput