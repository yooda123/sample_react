import { useState } from 'react';

const Example = () => {
  const [val, setVal] = useState("");
  return (
    <>
      {/* labelをクリックすると、同じidのtextareaがフォーカスされる*/}
      <label htmlFor="456">ラベル</label> 
      <div>
        <input 
          type="text"
          id="123"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)} 
        />
      </div>
      <div>
        <textarea
          id="456"
          placeholder="こんにちはTextArea"
          value={val}
          onChange={(e) => setVal(e.target.value)} 
        />
      </div>
      <h3>{val}</h3>
      <button onClick={() => setVal("")}>クリア</button>
    </>
  );
};

export default Example;
