import { useRef } from "react";

const Button = (prop) => {
    const ref = useRef("");
    const {id, btnText, clickCallback, toolTipText, toolTipFn, modalText} = prop;

    return(
        <button
            id={id}
            ref={ref}
            onClick={clickCallback}
            onMouseEnter={(event) => toolTipFn(event, toolTipText)}
            onMouseLeave={(event) => toolTipFn(event)}
        >
            {btnText}
        </button>
    )
};

export default Button;