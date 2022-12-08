import { useCalc } from "../context/CalcContext";

const Result = () => {
  const state = useCalc();

  return (
    <div>
      <h3>結果：{state.result}</h3>
    </div>
  )
}

export default Result