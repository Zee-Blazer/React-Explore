
// Components
import NavBarComp from '../component/navbar.comp';
import TodoList from '../component/todo/todolist';

const TodoScreen = () => {
  return (
    <div>
        <NavBarComp />
        <TodoList />
    </div>
  );
};

export default TodoScreen;
