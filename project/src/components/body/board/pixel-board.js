import {  useCallback, useEffect, useRef, useState } from 'react';
import { useCompResize } from '../../../hooks/comp-resize';
import Pixel from './pixel';
import PixelRow from './pixel-row';

const PixelBoard = (prop) => {
    const ref = useRef(null);
    const { pixelBoardRes,
            activeMode,
            gridVisibility } = prop;

    const {width} = useCompResize(ref);
    const [pixelSizing, updatePixelSizing] = useState("");
    const [mouseDownState, setMouseDown] = useState(false);
    const allPixels = [];

    // Invert mouseDownState value
    const setMouseState = (event) => {
        const eventCheck = (event) => {
            if (event === "mousedown") return true
            if (event === "mouseup") return false
        };
        
        setMouseDown(eventCheck(event.type));
    };

    //Create required number of pixel compoents
    const createPixels = (currentRes, {activeMode, gridVisibility, mouseDownState}) => {
        const pixelNum = currentRes *= currentRes;
        const pixelComps = [];

        // Create array containg all individual pixels
        for(let i = 0; i < pixelNum; i++) {

            pixelComps.push(<Pixel 
                                key={`pix${i}`}
                                activeMode={activeMode}
                                gridVisibility={gridVisibility}
                                mouseState={mouseDownState}/>);
        };        
        
        return pixelComps
    };

    //Create required number of row compoents, Append pixel compoents to row
    const createRows = (currentRes, pixels) => {
        const rowComps = [];

        // Calculate index positions of pixels to extract
        const extractPostions = (currentLoop, currentRes) => { 
            const startPos = currentLoop * currentRes;
            const endPos = startPos + currentRes;

            return [
                startPos,
                endPos,
            ]
        };

        // Create row compoents
        for(let i = 0; i < currentRes; i++) {
            const pixelPositions = extractPostions(i, currentRes);
            const rowPixels = pixels.slice(...pixelPositions);
            rowComps.push(<PixelRow 
                            pixels={rowPixels}
                            key={`pixRow${i + 1}`}/>)
        };

        return rowComps
    };

    const rowComps = createRows(pixelBoardRes, createPixels(pixelBoardRes, {activeMode, gridVisibility, mouseDownState}));
    
    return (
        <div 
            id='pixel-board'
            className='flex-col'
            ref={ref} style={{height: `${width}px`}}
            onMouseDown={(event) => {setMouseState(event)}}
            onMouseUp={(event) => {setMouseState(event)}}>
            {rowComps}
        </ div>
    )
};

export default PixelBoard