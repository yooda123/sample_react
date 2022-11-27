import List from './List';
import Form from './Form';
import { useState } from 'react';

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [ todos, setTodos ] = useState(todosList);
  
  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => {
      return id !== item.id;
    })
    // console.log(newTodos);
    setTodos(newTodos);
  }

  const createTodos = (content) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: content,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  return (
    <div>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodos={createTodos} />
    </div>
  )
}

export default Todo