import Button from './button';
import useClearBoard from '../../../hooks/clear-board';
import React, { useEffect, useState } from 'react';

const ButtonPanel = (props) => {
    const [toggleMode, setToggleMode] = useState("");
    const clearBoard = useClearBoard();
    const {toggleGrid, gridResolution: {handleGridReset}, toolTipFn, modalInit} = props;

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

        clearBoard: function() {
            modalInit(clearBoard);
        },

        resetBoard: function() {
            const handleBoardReset = () => {
                clearBoard();
                handleGridReset();
            };

            modalInit(handleBoardReset);
        },
    };

    // Return map containg button components
    const createButtons = (clickEvents, toolTipFn) => {

        // Construct object containg button infomation - Button Text - Click event function
        const btnObjectConst = (textCont, btnFuncName, toolTipText) => {
            return {
                textCont,
                btnFunc: clickEvents[btnFuncName],
                toolTipText, 
            }
        };

        // Contains button infomation objects 
        const btnDataObjects = {
            colourMode: btnObjectConst(
                            "Colour Mode",
                            "incrementColourMode",
                            "Switch between User Selected Colour and Random Colour modes"),
            eraseMode: btnObjectConst(
                            "Erase",
                            "eraseMode",
                            "Remove colour from individual pixels"),
            toggleGrid: btnObjectConst(
                            "Toggle Grid",
                            "toggleGrid",
                            "Toggle grid line visibility"),
            clearBoard: btnObjectConst(
                            "Clear All Pixels",
                            "clearBoard",
                            "Remove colour from all pixels"),
            resetBoard: btnObjectConst(
                            "Reset Board",
                            "resetBoard",
                            "Remove colour from all pixels and reset pixel resolution"),
        };
        
        // Construct button compoent
        const buttonConstructor = ([btnId, {textCont, btnFunc, toolTipText}], toolTipFn) => {
            return(
                <Button
                    key={btnId}
                    id={btnId}
                    textCont={textCont}
                    clickEventFunction={btnFunc}
                    toolTipText={toolTipText}
                    toolTipFn={toolTipFn}
                />
            );
        };

        return Object.entries(btnDataObjects).map((btnData) => buttonConstructor(btnData, toolTipFn));
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