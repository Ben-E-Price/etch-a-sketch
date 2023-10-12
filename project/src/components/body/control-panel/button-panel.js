import Button from './button';
import useClearBoard from '../../../hooks/clear-board';
import React, { useEffect, useState } from 'react';

const ButtonPanel = (props) => {
    const [toggleMode, setToggleMode] = useState("");
    const clearBoard = useClearBoard();

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
            props.toggleGrid();
        },

        clearBoard: function() {
            clearBoard();
        },
    };

    // Return map containg button components
    const createButtons = (clickEvents) => {

        // Construct object containg button infomation - Button Text - Click event function
        const btnObjectConst = (textCont, btnFuncName) => {
            return {
                textCont,
                btnFunc: clickEvents[btnFuncName]
            }
        };

        // Contains button infomation objects 
        const btnDataObjects = {
            colourMode: btnObjectConst("Colour Mode", "incrementColourMode"),
            eraseMode: btnObjectConst("Erase", "eraseMode"),
            toggleGrid: btnObjectConst("Toggle Grid", "toggleGrid"),
            clearBoard: btnObjectConst("Clear All Pixels", "clearBoard")
        };
        
        // Construct button compoent
        const buttonConstructor = ([btnId, {textCont, btnFunc}]) => {
            return(
                <Button 
                    id={btnId}
                    textCont={textCont}
                    clickEventFunction={btnFunc}
                />
            );
        };

        return Object.entries(btnDataObjects).map((btnData) => buttonConstructor(btnData));
    };

    // Set activeMode value on toggleMode value change 
    useEffect(() => {
        props.setActiveMode(toggleMode);
    }, [toggleMode, props]);

    return(
        <div id='button-wrapper' className='flex-col'>
            {createButtons(clickEventFuncs)}
        </div>
    )
};

export default ButtonPanel