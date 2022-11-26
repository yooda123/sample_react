import "./SubButton.css";

const SubButton = ({isSelected, clickHandler}) => {
  return (
    <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
    サブボタン
    </button>
)
}

export default SubButton