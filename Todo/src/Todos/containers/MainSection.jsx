import { useEffect, useState } from "react";
import TodoName from "../components/TodoName";
import Todo from "../components/Todo";
import "../Style/mainSection.css";

const MainSection = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const userName = prompt("이름을 입력하세요");
    setName(userName);
  }, []);

  const plzNameStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    fontWeight: "bold",
  };

  return (
    <>
      {name ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            justifyItems: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <aside style={{ border: "2px solid white" }}></aside>
          <div className="mainSection">
            <TodoName name={name} />
            <Todo />
          </div>
          <aside style={{ border: "2px solid white" }}></aside>
        </div>
      ) : (
        <div style={plzNameStyle}>이름을 입력해주세요.</div>
      )}
    </>
  );
};

export default MainSection;
