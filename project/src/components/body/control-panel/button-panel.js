import Button from './button';
import useSwitchMode from '../../../hooks/cycle-mode';
import { useState } from 'react';

//Functions called on click events
const buttonFunctions = {
    colourMode: function({switchFunc}) {

    },

    erase: function () {

    },

    clearBoard: function() {
        
    },

    resetBoard: function() {
        
    },

    toggleGrid: function() {
        
    },
};

const getFuncs = funcObject => funcName => funcObject[funcName]; 
const getBtnFuncs = getFuncs(buttonFunctions);

// Object constructor - Returns data structure required by button creation
const btnInfoConst =  (text, funcName) => {
    return {
        text,
        func: getBtnFuncs(funcName) 
    };
};

// Contains objects representing buttons
const btnInfo = {
    colourToggle: btnInfoConst('Colour Mode', 'colourMode'),
    erase: btnInfoConst('Eraser', 'erase'),
    clear: btnInfoConst('Clear Board', 'clearBoard'),
    resetBoard: btnInfoConst('Reset Board', 'resetBoard'),
    gridToggle: btnInfoConst('Toggle Grid Lines', 'toggleGrid'),
};

// Return Button component + Add button content
const createButton = ([btnName, infoObj]) => {
    return <Button id={btnName} textCont={infoObj.text} clickEventFunction={infoObj.func}/>
};

const ButtonPanel = () => {
    const [toggleMode, setToggleMode] = useState("");
    const activeMode = useSwitchMode(toggleMode);

    //Contains infomation required during button creration 
    const buttonData = {

        // Functions called on click evnets
        clickEventFuncs: {

        },

        // Construct object containg button infomation - Button Text - Click event function
        btnObjectConst: function() {

        },

        // Contains button infomation objects 
        btnInfoObjects: {

        },
    };

    const buttons = Object.entries(btnInfo).map((btnInfoObj) => createButton(btnInfoObj))

    return(
        <div id='button-wrapper' className='flex-col'>
            {buttons}
        </div>
    )
};

export default ButtonPanel