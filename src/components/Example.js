import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => {
      const newFruit = fruit;
      if (newFruit.label === e.target.value) {
        newFruit.checked =  !newFruit.checked;
      }
      return newFruit;
    });
    setFruits(newFruits);
    
    let sumVal = 0;
    // newFruits.forEach(fruit => {
    //   if (fruit.checked) {
    //     sumVal += fruit.value; 
    //   }
    // });

    // newFruits
    //   .filter(fruit => fruit.checked)
    //   .forEach(fruit => sumVal += fruit.value); 

    sumVal = newFruits
      .filter((fruit) => fruit.checked)
      .reduce((sumVal, fruit) => sumVal += fruit.value, 0)
    setSum(sumVal);
  }

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          // <>
          <label key={fruit.label} htmlFor={fruit.label}>
          <input
            id={fruit.label}
            type="checkbox"
            value={fruit.label}
            checked={fruit.checked}
            onChange={handleChange} 
          />
          {fruit.label}:{fruit.value}
          </label>
          // </>
        )
      }
      )}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
