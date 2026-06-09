
const TodoModalComp = () => {

    return (
        <div className="todo_modal">
            <p className="close">close</p>

            <div className="todo_modal_content">
                <h1>Create Todo</h1>

                <div>
                    <input type="text" placeholder="Title" />
                    <button>Create Todo</button>
                </div>
            </div>
        </div>
    )
}

export default TodoModalComp;
