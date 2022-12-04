import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, {payload}) => {
  const newState = {...state, [payload.name]: payload.value};

  switch(newState.type) {
    case 'add':
      return {...newState, result: newState.a + newState.b};
    case 'minus':
      return {...newState, result: newState.a - newState.b};
    case 'multiply':
      return {...newState, result: newState.a * newState.b};
    case 'divide':
      return {...newState, result: newState.a / newState.b};
    default: 
      throw new Error('不明なタイプです');
  }
}

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
    type: 'add',
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({payload: {'name': e.target.name, 'value': e.target.value}});        
  }

  const numChangeHandler = (e) => {
    dispatch({payload: {'name': e.target.name, 'value': parseInt(e.target.value)}});
  }

  return (
    <>
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
        />
      </div>
      <select name="type" onChange={calculate}>
        {CALC_OPTIONS.map((item) => {
          return <option key={item} value={item}>{item}</option>
        })}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
