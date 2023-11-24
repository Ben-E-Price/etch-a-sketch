import Modal from "./components/body/modal";
import Body from "./components/body/body";
import useModal from "./hooks/modal-display";

const Main = () => {
    const {modalInit, modalInput, displayModal, modalData, blockedElStyles} = useModal()

    return(
        <main>
            <Modal/>
            <Body/>
        </main>
    )
}

export default Main