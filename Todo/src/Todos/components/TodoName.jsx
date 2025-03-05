import "../Style/todo.css";

const TodoName = ({ name }) => {
  return <div className="nameContainer">{name}'s Todolist</div>;
};

export default TodoName;
