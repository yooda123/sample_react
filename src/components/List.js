
const List = ({todos, deleteTodo}) => {
  const complete = (id) => {
    deleteTodo(id);
  }

  return (
    <>
    {todos.map((todo) => {
      return (
        <div key={todo.id}><button onClick={() => complete(todo.id)}>完了</button>{todo.content}</div>
      )
    })}
    </>
  )
}

export default List