import { useState } from 'react';

const Example = () => {
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(0);
  const [valC, setValC] = useState(0);
  return (
    <>
      <p>ボタンAを{valA}回押しました！</p>    
      <button onClick = {() => {setValA(valA+1);}}>ボタンA</button>
      <p>ボタンBを{valB}回押しました！</p>    
      <button onClick = {() => {setValB(valB+1);}}>ボタンB</button>
      <p>ボタンCを{valC}回押しました！</p>    
      <button onClick = {() => {setValC(valC+1);}}>ボタンC</button>
    </>
  )
};

export default Example;
