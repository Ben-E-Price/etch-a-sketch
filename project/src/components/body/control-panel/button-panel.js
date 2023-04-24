import Button from './button';

//Functions called on click events
const buttonFunctions = {
    colourMode: function() {
        console.log("test")
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
    erase: btnInfoConst('Eraser'),
    clear: btnInfoConst('Clear Board'),
    resetBoard: btnInfoConst('Reset Board'),
    gridToggle: btnInfoConst('Toggle Grid Lines'),
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

export default ButtonPanel