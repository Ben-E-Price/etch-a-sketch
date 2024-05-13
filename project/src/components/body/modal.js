import classList from "data/comp-class-list.json"
import useClassStringConstruct from "hooks/create-class-string";
import { useEffect } from "react";
import { useCompResizeHeight } from "hooks/comp-resize-height";

const Modal = (prop) => {
    const {modalInput,
           modalData: {
                modalText,
                modalHeight}
        } = prop;
    const {
        flexCol,
        flexRow,
        modalBtn,
        panel
    } = classList;
    const handleClassString = useClassStringConstruct();

    return (
        <div 
            id="modal"
            className={flexCol}
            style={{height: modalHeight}}
        >
                
            <div
                id="modal-wrapper"
                className={handleClassString([flexCol, panel])}
            >

                <div id="modal-text-wrapper">
                    <h1 id="modal-heading">Caution</h1>
                    <p id="modal-text">
                        {`${modalText} will result in a loss of current progress, would you like to continue`}
                    </p>
                </div>

                <div 
                    id="modal-button-wrapper"
                    className={flexRow}    
                >
                    <button className={modalBtn} onClick={() => modalInput(true)}>Continue</button>
                    <button className={modalBtn} onClick={() => modalInput(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
} 

export default Modal