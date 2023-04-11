// Retruns indivdual button element
const Button = (prop) => {
    return(
        <button>
            {prop.textCont}
        </button>
    )
};

const ButtonPanel = () => {
    const controls = ["colour mode", "colour fill", "easer", "clear board", "toggle lines"];
    const buttons = controls.map((string) => <Button textCont={string}/>);

    return(
        <div id="button-wrapper">
            {buttons}
        </div>
    )
};

const ControlsPanel = () => {
    
    return(
        <div id="control-wrapper">
            <ButtonPanel />
        </div>
    )
};

export default  ControlsPanel