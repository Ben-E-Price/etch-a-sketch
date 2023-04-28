import {  useRef } from 'react';
import { useCompResize } from '../../../hooks/comp-resize';
import Pixel from './pixel';

function PixelBoard(prop) {
    const ref = useRef(null);
    const {width} = useCompResize(ref);
    const allPixels = [];
    const pixelRes = prop.gridResolution; 
 
    //Returns total number of pixels to be added
    const pixelNum = (pixelResolutionIn) => {
        return pixelResolutionIn *= pixelResolutionIn;
    };

    //Calculate pixel compoent sizing
    const pixelSizing = (boardSize, pixelRes) => {
        const pixelSize = boardSize  / pixelCount;

        return {
            width: pixelSize,
            height: pixelSize,
        };
    };
    
    // Create array containg all individual pixels
    for(let i = 0; i < pixelNum(pixelRes); i++) {
        allPixels.push(<Pixel boardSize={width} pixelNum={pixelRes}/>);
    };
    

    return (
        <div id='pixel-board' ref={ref} style={{height: `${width}px`}}>
            {allPixels}
        </ div>
    )
};

export default PixelBoard