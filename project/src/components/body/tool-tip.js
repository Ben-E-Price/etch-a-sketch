
const ToolTip = (prop) => {
    const {compText, pageLocX, pageLocY} = prop.compData;

    return(
        <div id="tool-wrapper" style={{left: pageLocX, top: pageLocY}}>
            <p>{compText}</p>
        </div>
    )
};

export default ToolTip