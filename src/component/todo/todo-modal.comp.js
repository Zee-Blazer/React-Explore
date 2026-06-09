import React, { useState } from 'react';

const TodoModalComp = ({ closeModal, addTodoItem }) => {

    const [input, setInput] = useState("");

    const createTodo = () => {
        addTodoItem({
            title: input,
            done: false
        });
        setInput("");
        closeModal();
    }

    return (
        <div className="todo_modal">
            <p className="close" onClick={ closeModal }>close</p>

            <div className="todo_modal_content">
                <h1>Create Todo</h1>

                <div>
                    <input type="text" placeholder="Title" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button
                        onClick={ createTodo }
                    >Create Todo</button>
                </div>
            </div>
        </div>
    )
}

export default TodoModalComp;
