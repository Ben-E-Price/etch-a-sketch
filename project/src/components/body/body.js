import ControlsPanel from "./control-panel/controls";
import PixelBoard from "./board/pixel-board";

function Body() {
    return(
        <div id="main-content" className="flex-row">
            <ControlsPanel />
            <PixelBoard />
        </ div>
    )
};

export default Body