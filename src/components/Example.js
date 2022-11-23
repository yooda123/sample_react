import { useState } from 'react'

const Example = () => {
  let [val, setVal] = useState(0);
  // console.log(valArray);
  return (
    <>
      <input 
        type="text"
        onChange={(e) => setVal(e.target.value)}
      /> = {val} 
    </>
  );
};

export default Example;
