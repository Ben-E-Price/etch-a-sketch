import {  useCallback, useEffect, useRef, useState } from 'react';
import { useCompResize } from '../../../hooks/comp-resize';
import Pixel from './pixel';

function PixelBoard(prop) {
    const ref = useRef(null);
    const {width} = useCompResize(ref);
    const [pixelSizing, updatePixelSizing] = useState("");
    const {pixelBoardRes} = prop
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
    //Returns total number of pixels to be added
    const pixelNum = (pixelResolutionIn) => {
        return pixelResolutionIn *= pixelResolutionIn;
    };

    //Calculate pixel compoent sizing
    const calcPixelSizing = useCallback((boardSize, pixelBoardRes) => {
        const sizingAccuracy = () => {
            return  pixelBoardRes === 4 ? 3 : 4;
        };
        
        // const pixelSize = `${String(boardSize  / pixelBoardRes).slice(0, sizingAccuracy())}px`;
        const pixelSize = `${String(boardSize  / pixelBoardRes).slice(0, 4)}px`;
        console.log(`${String(boardSize  / pixelBoardRes).slice(0, 5)}px`)
        updatePixelSizing(pixelSize);
    }, []);

    useEffect(() => {
        calcPixelSizing(width, pixelBoardRes);
    }, [width, pixelBoardRes, calcPixelSizing]);

    //Create required number of pixel compoents
    const createPixels = (currentRes, {activeMode, gridVisibility, mouseDownState}) => {
        const pixelNum = currentRes *= currentRes;
        const pixelComps = [];

        // Create array containg all individual pixels
        for(let i = 0; i < pixelNum(pixelBoardRes); i++) {
            pixelComps.push(<Pixel key={`pix${i}`} sizing={pixelSizing} activeMode={activeMode} gridVisibility={gridVisibility} mouseState={mouseDownState}/>);
        };        

        return pixelComps
    };

    //Create required number of row compoents, Append pixel compoents to row
    const createRows = (currentRes, pixels) => {
        const rowComps = [];

        // Calculate index positions of pixels to extract
        const extractPostions = () => { 

        };

        return rowComps
    };
    
    return (
        <span id='pixel-board' ref={ref} style={{height: `${width}px`}}  onMouseDown={(event) => {setMouseState(event)}} onMouseUp={(event) => {setMouseState(event)}} >
            {allPixels}
        </ span>
    )
};

export default PixelBoard