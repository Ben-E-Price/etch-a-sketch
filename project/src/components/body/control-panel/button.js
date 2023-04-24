const Button = (prop) => {
    return(
        <button onClick = {prop.clickEventFunction}>
            {prop.textCont}
        </button>
    )
};

export default Button;