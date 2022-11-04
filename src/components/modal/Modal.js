const Modal = (props) => {
    return (
        <div>
            <div className="overlay"></div>
            <div className="modal">
                <h1></h1>
                <button onClick={Modal}> {props.btnText}</button>
            </div>
        </div>
    )
}
export default Modal;