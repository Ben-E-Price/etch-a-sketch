import { useEffect, useRef, useState } from 'react';
import ControlsPanel from './controls';
import data from '../../../data/resolution-input.json'

const ResolutionInput = (prop) => {
    const ref = useRef('');
    const { modal: {modalInit},
            gridResolution: {
                handleResolutionChange,
                handlePixelBoardChange,
                resolutionSettings: {
                    newRes,
                    inputStep,
                    inputMin}
                }
            } = prop;
    const {modalText} = data;

    return(
        <>
            <p>Resoulution {newRes} X {newRes}</p>
            <input 
                id='resolution-input'
                type='range'
                min={inputMin} 
                max={32} 
                value={newRes}
                step={inputStep} 
                ref={ref}
                onInput={(event) => {handleResolutionChange(event)}}
                onMouseUp={(event) => {modalInit(handlePixelBoardChange, false, modalText)}}>
            </input>
        </>
    )
};

export default ResolutionInput