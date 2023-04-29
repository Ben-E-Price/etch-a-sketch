import {  useCallback, useEffect, useRef, useState } from 'react';
import { useCompResize } from '../../../hooks/comp-resize';
import Pixel from './pixel';

function PixelBoard(prop) {
    const ref = useRef(null);
    const {width} = useCompResize(ref);
    const allPixels = [];
    const pixelRes = prop.gridResolution;
    const [pixelSizing, updatePixelSizing] = useState("");
 
    //Returns total number of pixels to be added
    const pixelNum = (pixelResolutionIn) => {
        return pixelResolutionIn *= pixelResolutionIn;
    };

    //Calculate pixel compoent sizing
    const calcPixelSizing = useCallback((boardSize, pixelRpes) => {
        const pixelSize = String(boardSize  / pixelRes).slice(0, 4);
        updatePixelSizing(`${pixelSize}px`);
    }, [pixelRes]);

    useEffect(() => {
        calcPixelSizing(width, pixelRes);
    }, [width, pixelRes, calcPixelSizing]);

    // Create array containg all individual pixels
    for(let i = 0; i < pixelNum(pixelRes); i++) {
        allPixels.push(<Pixel sizing={pixelSizing}/>);
    };
    
    return (
        <div id='pixel-board' ref={ref} style={{height: `${width}px`}}>
            {allPixels}
        </ div>
    )
};

export default PixelBoard