import Form from "./Form";
import List from "./List";
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

  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(newTodos);
  }

  const createTodos = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <h2>Reminder</h2>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodos={createTodos} />
    </>
  );

};

export default Todo;
