
const ToolTip = (prop) => {
    const {
        compData: {
            compText,
            pageLocX,
            pageLocY,
        }
    } = prop;
    
    return(
        <div id="tool-wrapper" style={{left: pageLocX, top: pageLocY}}>
            <p id="tool-text">{compText}</p>
        </div>
    )
};

export default ToolTip