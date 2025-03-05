import { useState } from "react";
import Input from "../../common/Base/Input";
import "../Style/todo.css";

const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.split(" ").join("") !== "") {
      onAddTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="inputContainer">
      <Input onChange={changeValue} value={inputValue}></Input>

      <button onClick={handleAddClick}>+</button>
    </div>
  );
};

export default TodoInput;
