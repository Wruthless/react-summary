import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props) {
    const [modalIsOpen, setModelIsOpen] = useState(false);

    function deleteHander() {
        setModelIsOpen(true);
    }

    function closeModalHandler() {
        setModelIsOpen(false);
    }

    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={deleteHander}>Delete</button>
                </div>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
        </div>
    );
}

export default Todo;
