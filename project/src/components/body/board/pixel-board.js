import {  useCallback, useEffect, useRef, useState } from 'react';
import { useCompResize } from '../../../hooks/comp-resize';
import Pixel from './pixel';

function PixelBoard(prop) {
    const ref = useRef(null);
    const {width} = useCompResize(ref);
    const allPixels = [];
    const pixelRes = prop.gridResolution;
    const [pixelSizing, updatePixelSizing] = useState("");
    const [currentGridVis, setCurrentGridVis] = useState("none");

    const toggleGrid = (toggleState) => toggleState ? "1px solid black" : "none";
 
    //Returns total number of pixels to be added
    const pixelNum = (pixelResolutionIn) => {
        return pixelResolutionIn *= pixelResolutionIn;
    };

    //Calculate pixel compoent sizing
    const calcPixelSizing = useCallback((boardSize, pixelRes) => {
        const sizingAccuracy = () => {
            return  pixelRes === 4 ? 3 : 4;
        };
        
        const pixelSize = `${String(boardSize  / pixelRes).slice(0, sizingAccuracy())}px`;
        updatePixelSizing(pixelSize);
    }, []);

    useEffect(() => {
        calcPixelSizing(width, pixelRes);
    }, [width, pixelRes, calcPixelSizing]);

    useEffect(() => {
        setCurrentGridVis(toggleGrid(prop.gridVisibility));
    }, [prop.gridVisibility])

    // Create array containg all individual pixels
    for(let i = 0; i < pixelNum(pixelRes); i++) {
        allPixels.push(<Pixel sizing={pixelSizing} activeMode={prop.activeMode} gridVis={currentGridVis}/>);
    };
    
    return (
        <div id='pixel-board' ref={ref} style={{height: `${width}px`}}>
            {allPixels}
        </ div>
    )
};

export default PixelBoard