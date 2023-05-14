import ButtonPanel from "./button-panel";
import ResolutionInput from "./resolution-input";

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