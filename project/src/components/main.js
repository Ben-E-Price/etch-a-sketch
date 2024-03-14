import Modal from "components/body/modal";
import Body from "components/body/body";
import useModal from "hooks/modal-display";

const Main = () => {
    const { 
            modalInit,
            modalInput,
            displayModal,
            blockedElStyles,
            modalData,
            modalCancelled } = useModal()
    const { modalHeight } = modalData;

    return(
        <main style={displayModal ? {height: modalHeight} : {}}>
            {displayModal ? <Modal modalInput={modalInput} modalData={modalData}/> : <></>}
            
            <Body
                modal={{modalInit, modalCancelled}}
                blockedElStyles={blockedElStyles}
                displayModal={displayModal}/>
        </main>
    )
}

export default Main