import { useRef } from "react";

const Button = (prop) => {
    const ref = useRef("");
    const {id, btnText, clickCallback, toolTipText, toolTipFn, modalText} = prop;

    const argsCheck = (callbackFn, args) => {
        args ? callbackFn(args) : callbackFn();
    };

    return(
        <button
            id={id}
            ref={ref}
            onClick={() => argsCheck(clickCallback, modalText)}
            onMouseEnter={(event) => toolTipFn(event, toolTipText)}
            onMouseLeave={(event) => toolTipFn(event)}
        >
            {btnText}
        </button>
    )
};

export default Button;