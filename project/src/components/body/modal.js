const Modal = (prop) => {
    const {modalInput, modalData: {modalText, modalHeight}} = prop;
    const colClass = "flex-col";

    return (
        <div id="modal" style={{height: modalHeight}}>
                
            <div id="modal-wrapper" className={colClass}>

                <div id="modal-text-wrapper">
                    <h1 id="modal-heading">Caution</h1>
                    <p id="modal-text">
                        {`${modalText} will result in a loss of current progress, would you like to continue`}
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