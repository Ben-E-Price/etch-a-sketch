const Button = (prop) => {
    return(
        <button id={prop.id} onClick={prop.clickEventFunction}>
            {prop.textCont}
        </button>
    )
};

export default Button;