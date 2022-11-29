import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, {type, payload}) => {
  switch (type) {
    case "change":
        const ret = {...state, [payload.name]: payload.value}
        // debugger
        return ret;
    case "add":
      return {...state, result: state.a + state.b};
    case "minus":
      return {...state, result: state.a - state.b};
    case "divide":
      return {...state, result: state.a / state.b};
    case "multiply":
      return {...state, result: state.a * state.b};
    default:
      return new Error('不正な演算子です');
  }
}

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch(
      { type: e.target.value }
    );
  };

  const numChangeHandler = (e) => {
    dispatch(
      { type: 'change', payload: { name: e.target.name, value: parseInt(e.target.value) } }
    );
  }

  return (
    <>
    <h3>練習問題</h3>
    <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
    <div>
    a:
    <input
      type="number"
      name="a"
      value={state.a}
      onChange={numChangeHandler}
    />
    </div>
    <div>
    b:
    <input
      type="number"
      name="b"
      value={state.b}
      onChange={numChangeHandler}
      // onChange={() => {
      //   numChangeHandler();
      //   // calculate();
      // }}
    />
    </div>
    <select onChange={calculate}>
      {CALC_OPTIONS.map((item) => {
        return (
         <option key={item} value={item}>{item}</option>
        )  
      })}
    </select>
    <h3>結果：{state.result}</h3>
    </>
  );
};

export default Example;
