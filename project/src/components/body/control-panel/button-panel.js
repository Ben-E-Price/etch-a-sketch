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

console.log(btnInfo)

const ButtonPanel = () => {
    const controls = ['colour mode', 'colour fill', 'easer', 'clear board', 'toggle lines'];
    const buttons = controls.map((string) => <Button textCont={string}/>);

    return(
        <div id='button-wrapper' className='flex-col'>
            {buttons}
        </div>
    )
};

export default ButtonPanel