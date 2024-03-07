import data from "../../data/comp-class-list.json"

const Modal = (prop) => {
    const {modalInput,
           modalData: {
                modalText,
                modalHeight}
        } = prop;
    const {
        flexCol,
        modalBtn
    } = data;

    return (
        <div id="modal" style={{height: modalHeight}}>
                
            <div id="modal-cont-wrapper" className={flexCol}>

                <div id="modal-text-wrapper">
                    <h1 id="modal-heading">Caution</h1>
                    <p id="modal-text">
                        {`${modalText} will result in a loss of current progress, would you like to continue`}
                    </p>
                </div>

                <div id="modal-button-wrapper">
                    <button className={modalBtn} onClick={() => modalInput(true)}>Continue</button>
                    <button className={modalBtn} onClick={() => modalInput(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
} 

export default Modal