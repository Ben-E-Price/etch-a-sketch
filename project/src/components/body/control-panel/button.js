import { useRef } from "react";

const Button = (prop) => {
    const ref = useRef("");

    return(
        <button id={prop.id} ref={ref} onClick={prop.clickEventFunction}>
            {prop.textCont}
        </button>
    )
};

export default Button;