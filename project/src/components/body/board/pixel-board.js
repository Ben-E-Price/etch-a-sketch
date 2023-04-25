import {  useRef } from 'react';
import { useCompResize } from '../../../hooks/comp-resize';
import useGridResolution from '../../../hooks/grid-res';
import ResolutionInput from '../control-panel/resolution-input';
import Pixel from './pixel';

console.log(ResolutionInput)

function PixelBoard(prop) {
    const ref = useRef(null);
    const {width} = useCompResize(ref);
    const allPixels = [];
    const pixelRes = 2;    

    //Returns total number of pixels to be added
    const pixelNum = (pixelResolutionIn) => {
        return pixelResolutionIn *= pixelResolutionIn;
    };
    
    // Create array containg all individual pixels
    for(let i = 0; i < pixelNum(pixelRes); i++) {
        allPixels.push(<Pixel boardSize={width} pixelNum={pixelRes}/>);
    };
    
    return (
        <div id='pixel-board' ref={ref}>
            {allPixels}
        </ div>
    )
};

export default PixelBoard