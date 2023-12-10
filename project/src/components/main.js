import Modal from "./body/modal";
import Body from "./body/body";
import useModal from "../hooks/modal-display";

const Main = () => {
    const {modalInit, modalInput, displayModal, blockedElStyles, modalData} = useModal()
    const {modalHeight} = modalData;

    return(
        <main style={displayModal ? {height: modalHeight} : {}}>
            {displayModal ? <Modal modalInput={modalInput} modalData={modalData}/> : <></>}
            <Body modalInit={modalInit} blockedElStyles={blockedElStyles} displayModal={displayModal}/>
        </main>
    )
}

export default Main