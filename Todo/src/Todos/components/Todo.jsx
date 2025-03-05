import TodoList from "./TodoList";
import DoneList from "./DoneList";
import TodoInput from "./TodoInput";
import { todoStore } from "../Store/todoStore";

const Todo = () => {
  const { todos, doneTodos, addTodo, onCheck, onDelete, onDoneDelete } =
    todoStore();

  return (
    <div className="toDoContainer">
      <TodoInput onAddTodo={addTodo} />
      <div style={{ display: "flex", gap: "30px" }}>
        <TodoList todos={todos} onCheck={onCheck} onDelete={onDelete} />
        <DoneList doneTodos={doneTodos} onDelete={onDoneDelete} />
      </div>
    </div>
  );
};

export default Todo;
