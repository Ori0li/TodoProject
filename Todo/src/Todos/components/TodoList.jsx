import List from "./List";
import "../Style/todo.css";

const TodoList = ({ todos, onCheck, onDelete }) => {
  return (
    <div className="listContainer">
      <h3>TODO LIST</h3>
      <div className="innerList">
        {todos.map((v, i) => (
          <List
            key={i}
            value={v.text}
            onCheck={() => onCheck(i)}
            onDelete={() => onDelete(i)}
            showDelete={false}
            isChecked={v.isChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
