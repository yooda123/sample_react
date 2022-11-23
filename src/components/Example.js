import { useState } from "react";

const Example = () => {
  const [ count, setCount ] = useState(0);
  const countUp = ()=>{
    // setCount(count+1);
    setCount(prevstate => {
      console.log(prevstate+1);
      return prevstate + 1;
    })
  }
  return (
    <>
      <p>現在のカウント数：{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={()=>{setCount(count-1)}}>-</button>
    </>
  )
};

export default Example;
