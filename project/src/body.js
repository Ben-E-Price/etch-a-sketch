import ControlsPanel from "./controls";
import PixelBoard from "./pixel-board";

function Body() {
    return(
        <div id="main-content" className="flex-row">
            <ControlsPanel />
            <PixelBoard />
        </ div>
    )
};

export default Body