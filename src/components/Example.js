import { useState } from 'react';


const Example = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleChecked = (val) => {
    console.log(val);
    setIsChecked((prev) => {
      console.log(prev);
      return !prev;
    });
  } 
  // const toggleChecked = (e) => {
  //   setIsChecked((prevState) => {
  //     console.log(prevState);
  //     let state = !prevState;
  //     return state;
  //   });
  // } 

  return (
    <>
      <label htmlFor="my-check">
        チェック
      </label>
      <input 
        type="checkbox"
        id="my-check"
        checked={isChecked}
        onChange={(e) => toggleChecked(e)}
        // onChange={(e) => toggleChecked(e)}
      />
      <h3>{isChecked ? "チェックON" : "チェックOFF"}</h3>
    </>
  );
};

export default Example;
