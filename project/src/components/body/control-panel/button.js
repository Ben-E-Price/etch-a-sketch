import { useRef } from "react";
import classList from "data/comp-class-list";

const Button = (prop) => {
    const ref = useRef("");
    const {panelButton} = classList;
    const { id,
            btnText,
            onClickFn,
            toolTipText,
            toolTipFn,
            modalText} = prop;

    const argsCheck = (callbackFn, args) => {
        args ? callbackFn(args) : callbackFn();
    };

    return(
        <button
            id={id}
            className={panelButton}
            ref={ref}
            onClick={() => argsCheck(onClickFn, modalText)}
            onMouseEnter={(event) => toolTipFn(event, toolTipText)}
            onMouseLeave={(event) => toolTipFn(event)}
        >
            {btnText}
        </button>
    )
};

export default Button;