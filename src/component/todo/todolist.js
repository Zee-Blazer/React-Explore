
import "../../styles.css";

// Component 
import TodoModalComp from "./todo-modal.comp";

const TodoList = () => {

    return (
        <div>
            <div className="flex_display flex_spacing">
                <h1>Todo List</h1>
                <button className="todo_create">Create Todo</button>
            </div>

            <div>
                <div className="list_item">
                    <div className="list_item_box"></div>
                    <p>Todo 1</p>
                </div>
                <div className="list_item">
                    <div className="list_item_box"></div>
                    <p>Todo 2</p>
                </div>
                <div className="list_item">
                    <div className="list_item_box"></div>
                    <p>Todo 3</p>
                </div>
            </div>

            <TodoModalComp />
        </div>
    )
}

export default TodoList;
