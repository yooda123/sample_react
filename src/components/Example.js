import { useState } from "react";


const Example = () => {
  const [toggle, setToggle] = useState(true)
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const toggleComponent = () => {
    setToggle(!toggle);
  }
  return (
    <>
      <button onClick={toggleComponent}>Toggle</button>
      {toggle
      ? <Count key="A" title="A" count={countA} setCount={setCountA} /> 
      : <Count key="B" title="B" count={countB} setCount={setCountB}/>
      }
    </>
  )
}

const Count = ({title, count, setCount}) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
