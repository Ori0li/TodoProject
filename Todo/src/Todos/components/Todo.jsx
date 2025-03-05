import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";
import TodoInput from "./TodoInput";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem("todos"));
  //   const storedDoneTodos = JSON.parse(localStorage.getItem("doneTodos"));
  //   setTodos(storedTodos);
  //   setDoneTodos(storedDoneTodos);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // useEffect(() => {
  //   localStorage.setItem("doneTodos", JSON.stringify(doneTodos));
  // }, [doneTodos]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { text: text, isChecked: false }]);
  };

  const onCheck = (i) => {
    const newArr = [...todos];
    const checkedTodo = newArr.splice(i, 1)[0];
    checkedTodo.isChecked = !checkedTodo.isChecked;
    setTodos(newArr);
    setDoneTodos((prev) => [...prev, checkedTodo]);
  };

  const onDelete = (i) => {
    const newArr = [...todos];
    newArr.splice(i, 1);
    setTodos(newArr);
  };

  const onDoneDelete = (i) => {
    const newArr = [...doneTodos];
    newArr.splice(i, 1);
    setDoneTodos(newArr);
  };

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
