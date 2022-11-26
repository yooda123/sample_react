import { useState } from 'react';

const Example = () => {
  const [selected, setSelected] = useState("Banana");
  const OPTIONS = ['Apple', 'Banana', "Cherry"];
  const handerChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
    <select
      value={selected}
      onChange={handerChange}
    >
      {OPTIONS.map((item) => {
        return <option value={item}>{item}</option>        
      })};
    </select>
    <div>選択された果物: {selected}</div>

    </>
    );
    
};

export default Example;
