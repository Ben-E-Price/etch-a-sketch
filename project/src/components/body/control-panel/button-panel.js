import Button from './button';

// Object constructor - Returns data structure required by button creation
const btnInfoConst =  (text, funcName) => {
    return {
        text,
        funcName,
    };
};

// Contains objects representing buttons
const btnInfo = {
    colourToggle: btnInfoConst('Colour Mode'),
    erase: btnInfoConst('Eraser'),
    clear: btnInfoConst('Clear Board'),
    resetBoard: btnInfoConst('Reset Board'),
    gridToggle: btnInfoConst('Toggle Grid Lines'),
};

// Return Button component + Add button content
const createButton = ([btnName, infoObj]) => {
    return <Button textCont={infoObj.text}/>
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