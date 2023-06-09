import Button from './button';
import useSwitchMode from '../../../hooks/cycle-mode';
import React, { useState } from 'react';



const ButtonPanel = () => {
    const [toggleMode, setToggleMode] = useState("");
    const activeMode = useSwitchMode(toggleMode);

    // Functions called on click evnets
    const clickEventFuncs = {
        // Increments current mode
        incrementColourMode: function() {
            setToggleMode({incrementMode: true});
        },

        // Force active mode to passed value
        forceMode: function(modeValue) {
            setToggleMode({forceMode: true, forceModeValue: modeValue});
        },
    };

    // Return map containg button components
    const createButtons = (clickEvents) => {

        // Construct object containg button infomation - Button Text - Click event function
        const btnObjectConst = (textCont, btnFuncName) => {
            return {
                textCont,
                btnFunc: clickEvents.btnFuncName,
            }
        };

        // Contains button infomation objects 
        const btnDataObjects = {
            // colourMode: btnObjectConst("Colour Mode", incrementColourMode),
            // eraseMode: btnObjectConst("Erase", forceMode),
        };
        
        // Construct button compoent
        const buttonConstructor = ([btnId, btnData]) => {
            const {btnText, btnFunc} = btnData;

            return(
                <Button 
                    id={btnId}
                    textCont={btnText}
                    clickEventFuncs={btnFunc}
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