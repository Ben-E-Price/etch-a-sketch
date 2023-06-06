import Button from './button';
import useSwitchMode from '../../../hooks/cycle-mode';
import { useState } from 'react';

const ButtonPanel = () => {
    const [toggleMode, setToggleMode] = useState("");
    const activeMode = useSwitchMode(toggleMode);

    // Construct object containg button infomation - Button Text - Click event function
    const btnObjectConst = (textCont, btnFunc) => {
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

        return {
            textCont,
            btnFunc: this.clickEventFuncs.btnFunc,
        }
    };

    // Contains button infomation objects 
    const btnDataObjects = {
        colourMode: btnObjectConst("Colour Mode", incrementColourMode),
        eraseMode: btnObjectConst("Erase", forceMode(0)),
    };

    // Return map containg button components
    const createButtons = (btnObjects) => {
        
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

        return Object.entries(btnObjects).map((btnData) => buttonConstructor(btnData));
    };

    return(
        <div id='button-wrapper' className='flex-col'>
            {createButtons(buttonData.btnDataObjects)}
        </div>
    )
};

export default ButtonPanel