
const ToolTip = (prop) => {
    const {compText, compDisplay, pageLocX, pageLocY} = prop.compData;
    const disClass = compDisplay ? "flex-col" : "dis-none";
    
    return(
        <div id="tool-wrapper" className={disClass} style={{left: pageLocX, top: pageLocY}}>
            <p>{compText}</p>
        </div>
    )
};

export default ToolTip