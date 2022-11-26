import { useState } from "react";

import "./Example.css"
import SubButton from "./components/SubButton";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  // const style = {
  //   margin: "auto",
  //   "border-radius": "9999px",
  //   border: "none",
  //   display: "block",
  //   width: 120,
  //   height: 60,
  //   fontWeight: "bold",
  //   cursor: "pointer",
  //   backgroundColor: isSelected ? "pink" : "",
  // };

  return (
    <>
      {/* <button style={style} onClick={clickHandler}> */}
      {/* <button className={isSelected ? "selected btn" : "btn"} onClick={clickHandler}> */}
      <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <SubButton isSelected={isSelected} clickHandler={clickHandler} />
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
