function Todo(props) {
    function deleteHander() {
        console.log(props.text);
    }

    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={deleteHander}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Todo;
