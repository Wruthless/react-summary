import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props) {
    const [modalIsOpen, setModelIsOpen] = useState(false);

    function deleteHander() {
        setModelIsOpen(true);
    }

    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={deleteHander}>Delete</button>
                </div>
            </div>
            {modalIsOpen && <Modal />}
            {modalIsOpen && <Backdrop />}
        </div>
    );
}

export default Todo;
