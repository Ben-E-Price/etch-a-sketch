import Button from './button';
import useSwitchMode from '../../../hooks/cycle-mode';
import React, { useState } from 'react';



const ButtonPanel = () => {
    const [toggleMode, setToggleMode] = useState("");
    const activeMode = useSwitchMode(toggleMode);

    // Return map containg button components
    const createButtons = () => {

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

        // Construct object containg button infomation - Button Text - Click event function
        const btnObjectConst = (textCont, btnFunc) => {
            return {
                textCont,
                btnFunc: clickEventFuncs.btnFunc,
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

        // return Object.entries(btnDataObjects).map((btnData) => buttonConstructor(btnData));
    };

    console.log("btnDataObjects");


    return(
        <div id='button-wrapper' className='flex-col'>
            <button>SomeText</button>
        </div>
    )
};

export default ButtonPanel