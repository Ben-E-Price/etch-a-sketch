const Button = (prop) => {
    return(
        <button onClick = {(event) => console.log(event)}>
            {prop.textCont}
        </button>
    )
};

export default Button;