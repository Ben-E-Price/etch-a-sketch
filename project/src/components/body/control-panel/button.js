import { useRef } from "react";

const Button = (prop) => {
    const ref = useRef("");
    const {id, clickEventFunction, toolTipText, toolTipFn} = prop;

    return(
        <button
            id={id}
            ref={ref}
            onClick={clickEventFunction}
            onMouseEnter={(event) => toolTipFn(event, toolTipText)}
            onMouseLeave={(event) => toolTipFn(event)}
        >
            {prop.textCont}
        </button>
    )
};

export default Button;