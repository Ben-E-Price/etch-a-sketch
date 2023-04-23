import Button from "./button";

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