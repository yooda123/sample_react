import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { payload }) => {
  const { name, value } = payload;
  const newState = { ...state, [name]: value };
 
  switch (newState.type) {
    case "add": {
      return {
        ...newState,
        result: parseInt(newState.a) + parseInt(newState.b),
      };
    }
    case "minus": {
      return { ...newState, result: newState.a - newState.b };
    }
    case "divide": {
      return { ...newState, result: newState.a / newState.b };
    }
    case "multiply": {
      return { ...newState, result: newState.a * newState.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};
 
const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
    type: "add",
  };
 
  const [state, dispatch] = useReducer(reducer, initState);
 
  const inputChangeHandler = (e) => {
    dispatch({
      payload: { name: e.target.name, value: e.target.value },
    });
  };
 
  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={inputChangeHandler}
        />
      </div>
      <select value={state.type} name="type" onChange={inputChangeHandler}>
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <h3>結果：{state.result}</h3>
    </>
  );
};

export default Example;
