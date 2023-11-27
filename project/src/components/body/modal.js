const Modal = (prop) => {
    const {modalInput, modalData} = prop;
    const colClass = "flex-col";

    return (
        <div id="modal">
                
            <div id="modal-wrapper" className={colClass}>

                <div id="modal-text-wrapper">
                    <h1 id="modal-heading">Caution</h1>
                    <p id="modal-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet. 
                    </p>
                </div>

                <div id="modal-button-wrapper">
                    <button className="modal-button" onClick={() => modalInput(true)}>Continue</button>
                    <button className="modal-button" onClick={() => modalInput(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
} 

export default Modal