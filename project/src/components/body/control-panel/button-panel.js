import Button from './button';
import useSwitchMode from '../../../hooks/cycle-mode';
import React, { useState } from 'react';

const ButtonPanel = () => {
    const [toggleMode, setToggleMode] = useState("");
    const activeMode = useSwitchMode(toggleMode);

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

    return(
        <div id='button-wrapper' className='flex-col'>
            {createButtons(clickEventFuncs)}
        </div>
    )
};

export default ButtonPanel