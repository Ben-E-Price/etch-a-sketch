import ButtonPanel from "./button-panel";
import ResolutionInput from "./resolution-input";
import ModePanel from "./mode-panel";

const ControlsPanel = (prop) => {
    return(
        <div id="control-wrapper">
            <ResolutionInput
                handleResoultion={prop.handleResoultion.bind(this)}
                resoultionSettings={prop.resoultionSettings}/>
            <ModePanel />
            <ButtonPanel />
        </div>
    )
};

export default  ControlsPanel