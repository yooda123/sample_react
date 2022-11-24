import { useState } from "react";


const Example = () => {
  const [toggle, setToggle] = useState(true)
  const toggleComponent = () => {
    setToggle(!toggle);
  }
  return (
    <>
      <button onClick={toggleComponent}>Toggle</button>
      {toggle ? <Count key="A" title="A"/> : <Count key="B" title="B"/>}
    </>
  )
}

const Count = ({title}) => {
  const [count, setCount] = useState(0);
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
