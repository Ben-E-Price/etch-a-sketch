import Button from './button';

//Functions called on click events
const buttonFunctions = {
    colourMode: function() {
        console.log("test")
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
    const buttons = Object.entries(btnInfo).map((btnInfoObj) => createButton(btnInfoObj))

    return(
        <div id='button-wrapper' className='flex-col'>
            {buttons}
        </div>
    )
};

console.log(btnInfo)

export default ButtonPanel