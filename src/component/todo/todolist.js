import React, { useState } from "react";

import "../../styles.css";

// Component 
import TodoModalComp from "./todo-modal.comp";

const TodoList = () => {

    const [showModal, setShowModal] = useState(false);
    const [todoItems, setTodoItems] = useState([]);

    const toggleModal = () => setShowModal(!showModal);

    const addTodoItem = (item) => {
        setTodoItems([...todoItems, item]);
    }

    return (
        <div>
            <div className="flex_display flex_spacing">
                <h1>Todo List</h1>
                <button className="todo_create" onClick={ toggleModal }>Create Todo</button>
            </div>

            <div>
                {
                    todoItems.map((item, index) => (
                        <div key={index} className="list_item">
                            <div className="list_item_box"></div>
                            <p>{ item.title }</p>
                        </div>
                    ))
                }
            </div>

            {showModal && <TodoModalComp closeModal={ toggleModal } addTodoItem={ addTodoItem } />}
        </div>
    )
}

export default TodoList;
