import { useRef, useState } from "react";
import { useCompResizeWidth } from "hooks/comp-resize-width";
import data from "data/comp-class-list.json"
import Pixel from "components/body/board/pixel";
import PixelRow from "components/body/board/pixel-row";

const PixelBoard = (prop) => {
    const ref = useRef(null);
    const { 
        pixelBoardRes,
        activeMode,
        gridVisibility 
    } = prop;
    const {flexCol} = data;
    const {width} = useCompResizeWidth(ref);
    const [mouseDownState, setMouseDown] = useState(false);

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

    //Check event type - Set pixel colour
    const handlePixelColour = (event, mouseDownState, activeMode) => {
        const {type, target} = event
        const {pixel} = data

        //Block non pixel events
        if(!target.classList.contains(pixel)) {
            return
        };

        const handleEventType = (currentPixel, eventType, updateColourFn) => {
            const eventClick = "click";
            const eventOver = "mouseover";

            const eventCompare = (activeEvent, compareEvent) => activeEvent === compareEvent

            // Check event type
            if(eventCompare(eventType, eventOver)) {
                // onMouseOver event
                if(mouseDownState) {
                    // onHover + mouseDown - Allow click and drag
                    updateColourFn(currentPixel, activeMode);
                } else {
                    return;
                };
            } else if(eventCompare(eventType, eventClick)) {
                // onClick event
                updateColourFn(currentPixel, activeMode);
            };
        }

        const updatePixelColour = (currentPixel, activeMode) => {
            const {modeIdent, colour} = activeMode;
            const setPixelColour = (el, col) => el.style.background = col;

            const setActiveClass = (modeIdent, pixel) => {
                const {activeBackground} = data; //Class strings
                const pixelClassList = pixel.classList;

                const modeCheck = modeIdent !== 0
                const classCheck = (classList, className) => classList.contains(className);

                const toggleClass = (classList, className, add) => {
                    add ? classList.add(className) : classList.remove(className);
                };

                if(modeIdent && !classCheck(pixelClassList, activeBackground)) {
                        //Add class - If random or user selected mode active & activeBackground not in list
                        toggleClass(pixelClassList, activeBackground, true);
                } else if (!modeIdent && classCheck(pixelClassList, activeBackground)) {
                    //Remove class - If erase mode & activeBackground in list
                    toggleClass(pixelClassList, activeBackground, false);
                }
            }

            setActiveClass(modeIdent, currentPixel)

            // Selects colour setting method based on current mode
            if(modeIdent === 1 || modeIdent === 0) {
                setPixelColour(currentPixel, colour);
            } else if(modeIdent === 2) {
                //Invoke random colour generation if random mode active
                const newCol = colour()
                setPixelColour(currentPixel, newCol);
            };

        }

        handleEventType(target, type, updatePixelColour);
    };

    return (
        <div
            id="pixel-board"
            className={flexCol}
            ref={ref}
            style={{height: `${width}px`}}
            onMouseDown={(event) => {setMouseState(event)}}
            onMouseUp={(event) => {setMouseState(event)}}
            onMouseOver={(event) => {handlePixelColour(event, mouseDownState, activeMode)}}
            onClick={(event) => {handlePixelColour(event, mouseDownState, activeMode)}}>
            {rowComps}
        </ div>
    )
};

export default PixelBoard