import ButtonPanel from "./button-panel";
import ResolutionInput from "./resolution-input";

const modes = new Map([
    [0, {
        modeIdent: () => console.log()
    }],

    [1, {

    }],

    [2, {

    }],
]);
console.log(modes)

const ControlsPanel = (prop) => {
    return(
        <div id="control-wrapper">
            <ResolutionInput
                handleResoultion={prop.handleResoultion.bind(this)}
                resoultionSettings={prop.resoultionSettings}/>
            <ButtonPanel />
        </div>
    )
};

export default  ControlsPanel