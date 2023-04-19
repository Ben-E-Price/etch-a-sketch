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
        <div id="button-wrapper" className="flex-col">
            {buttons}
        </div>
    )
};

export default ButtonPanel