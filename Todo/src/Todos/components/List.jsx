import { CiCircleCheck, CiTrash } from "react-icons/ci";
import "../Style/todo.css";

const List = ({ value, onCheck, onDelete, showDelete, isChecked }) => {
  return (
    <div className="list">
      <CiCircleCheck
        style={{
          fontSize: "25px",
          color: isChecked ? "green" : "grey",
        }}
        onClick={onCheck} // 체크 아이콘 클릭 시 onCheck 호출
      />

      <span style={{ textDecoration: isChecked ? "line-through " : "none" }}>
        {value}
      </span>
      {showDelete && (
        <CiTrash
          style={{
            fontSize: "20px",
            color: "gray",
          }}
          onClick={onDelete} // 삭제 아이콘 클릭 시 onDelete 호출
        />
      )}
    </div>
  );
};

export default List;
