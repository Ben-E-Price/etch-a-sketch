const Modal = (prop) => {
    const colClass = "flex-col";

    return (
        <div id="modal">
                
            <div id="modal-wrapper" className={colClass}>
                <h1 id="modal-heading">Caution</h1>
                <p id="modal-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet. 
                </p>
            </div>
        </div>
    )
} 

export default Modal