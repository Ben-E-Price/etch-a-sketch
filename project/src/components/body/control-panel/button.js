import { useRef } from "react";

const Button = (prop) => {
    const ref = useRef("");

    return(
        <button id={prop.id} ref={ref} onClick={prop.clickEventFunction} onMouseEnter={(event) => prop.toolTipFn(event)} onMouseLeave={(event) => prop.toolTipFn(event)}>
            {prop.textCont}
        </button>
    )
};

export default Button;