import { useEffect, useRef, useState } from 'react';

const ResolutionInput = (prop) => {
    const ref = useRef('');
    const {gridResolution, inputStep, inputMin} = prop.resoultionSettings
    
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
                onInput={(event) => {prop.handleResoultion(event.target)}}
                >
            </input>
        </>
    )
};

export default ResolutionInput