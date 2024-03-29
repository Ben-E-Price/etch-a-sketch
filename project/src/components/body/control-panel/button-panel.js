import Button from './button';
import useClearBoard from '../../../hooks/clear-board';
import data from '../../../data/button.json'
import React, { useEffect, useState } from 'react';


const ButtonPanel = (props) => {
    const [toggleMode, setToggleMode] = useState("");
    const clearBoard = useClearBoard();
    const {toggleGrid, gridResolution: {handleGridReset}, toolTipFn, modal: {modalInit}} = props;

    // Force active mode to passed value
    const forceMode = (modeValue) => {
        setToggleMode({incrementMode: false, forceMode: true, forceModeValue: modeValue});
    };

    // Functions called on click evnets
    const clickEventFuncs = {
        // Increments current mode
        incrementColourMode: function() {
            setToggleMode({incrementMode: true, forceMode: false, forceModeValue: 2});
        },

        eraseMode: function() {
            forceMode(0);
        },

        toggleGrid: function() {
            toggleGrid();
        },

        clearBoard: function(modalText) {
            modalInit(clearBoard, false, modalText);
        },

        resetBoard: function(modalText) {
            const handleBoardReset = () => {
                clearBoard();
                handleGridReset();
            };

            modalInit(handleBoardReset, false, modalText);
        },
    };

    // Return map containg button components
    const createButtons = (clickEvents, toolTipFn) => {

       const btnDataConst = (btnInfo) => {
            const btnData = {};
            
            // Construct object containg button infomation - Button Text - Click event function
            const btnObjectConst = (btnText, clickCallback, toolTipText, modalText) => {
                return {
                    clickCallback: clickEvents[clickCallback],
                    toolTipText,
                    modalText,
                    btnText,
                };
            };
            
            for(const data of btnInfo) {
                const {id, text, callbackFn, toolTip, modalText} = data;
                const callback = !callbackFn ? id : callbackFn;
                btnData[id] = btnObjectConst(text, callback, toolTip, modalText);
            };
            
            return btnData
        };
        
        // Construct button compoent
        const buttonConstructor = ([btnId, {btnText, clickCallback, toolTipText, modalText}], toolTipFn) => {

            return(
                <Button
                    key={btnId}
                    id={btnId}
                    btnText={btnText}
                    modalText={modalText}
                    toolTipText={toolTipText}
                    clickCallback={clickCallback}
                    toolTipFn={toolTipFn}
                />
            );
        };

        return Object.entries(btnDataConst(data)).map((btnData) => buttonConstructor(btnData, toolTipFn));
    };

    // Set activeMode value on toggleMode value change 
    useEffect(() => {
        props.setActiveMode(toggleMode);
    }, [toggleMode, props]);

    return(
        <div id='button-wrapper' className='flex-col'>
            {createButtons(clickEventFuncs, toolTipFn)}
        </div>
    )
};

export default ButtonPanel