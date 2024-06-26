import Button from "components/body/control-panel/button";
import useClearBoard from "hooks/clear-board";
import buttonInfomation from "data/button.json"
import React, { useEffect, useState } from "react";


const ButtonPanel = (prop) => {
    const [toggleMode, setToggleMode] = useState("");
    const clearBoard = useClearBoard();
    const { 
        toggleGrid,
        gridResolution: {handleResReset},
        toolTipFn, 
        modal: {modalInit},
        classString
    } = prop;

    // Force active mode to passed value
    const forceMode = (modeValue) => {
        setToggleMode({incrementMode: false, forceMode: true, forceModeValue: modeValue});
    };

    // Functions called on click evnets
    const clickEventFuncs = {
        // Increments current mode
        incrementColourMode () {
            setToggleMode({incrementMode: true, forceMode: false, forceModeValue: 2});
        },

        eraseMode () {
            forceMode(0);
        },

        toggleGrid () {
            toggleGrid();
        },

        clearBoard (modalText) {
            const handleClearBoard = (userInput) => {
                if(userInput) {
                    clearBoard();
                } else {
                    return
                };
            };

            modalInit(handleClearBoard, false, modalText);
        },

        resetBoard (modalText) {
            const handleBoardReset = (userInput) => {
                if(userInput) {
                    clearBoard();
                    handleResReset();
                } else {
                    return
                };
            };

            modalInit(handleBoardReset, false, modalText);
        },
    };

    // Return map containg button components
    const createButtons = (clickEvents, toolTipFn, buttonInfo) => {

       const btnDataConst = (btnInfo) => {
            const btnData = {};
            
            // Construct object containg button infomation - Button Text - Click event function
            const btnObjectConst = (btnText, onClickFn, toolTipText, modalText) => {
                return {
                    onClickFn: clickEvents[onClickFn],
                    toolTipText,
                    modalText,
                    btnText,
                };
            };
            
            for(const data of btnInfo) {
                const { 
                    id,
                    text,
                    callbackFn,
                    toolTip,
                    modalText
                } = data;

                const btnClickFn = !callbackFn ? id : callbackFn;
                btnData[id] = btnObjectConst(text, btnClickFn, toolTip, modalText);
            };
            
            return btnData
        };
        
        // Construct button compoent
        const buttonConstructor = ([btnId, {btnText, onClickFn, toolTipText, modalText}], toolTipFn) => {

            return(
                <Button
                    key={btnId}
                    id={btnId}
                    btnText={btnText}
                    modalText={modalText}
                    toolTipText={toolTipText}
                    onClickFn={onClickFn}
                    toolTipFn={toolTipFn}
                />
            );
        };

        return Object.entries(btnDataConst(buttonInfomation)).map((btnInfo) => buttonConstructor(btnInfo, toolTipFn));
    };

    // Set activeMode value on toggleMode value change 
    useEffect(() => {
        prop.setActiveMode(toggleMode);
    }, [toggleMode, prop]);

    return(
        <div id="button-wrapper" className={classString}>
            {createButtons(clickEventFuncs, toolTipFn, buttonInfomation)}
        </div>
    )
};

export default ButtonPanel