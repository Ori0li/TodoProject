import List from "./List";
import "../Style/todo.css";

const DoneList = ({ doneTodos, onDelete }) => {
  return (
    <div className="listContainer">
      <h3>DONE LIST</h3>
      <div className="innerList">
        {doneTodos.map((v, i) => (
          <List
            key={i}
            value={v.text}
            onDelete={() => onDelete(i)}
            showDelete={true}
            isChecked={v.isChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default DoneList;
