import { useState } from 'react';

const Form = ({createTodos}) => {
  const [item, setItem] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const inputVal = item;
    if (inputVal) {
      const newTodo = {id: Math.floor(Math.random() * 1e5), content: inputVal};
      // console.log(newTodo);
      createTodos(newTodo);  
    }
  }

  return (
    <>
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button>追加</button>
    </form>
    </>
  )
}

export default Form