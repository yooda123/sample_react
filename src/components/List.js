const List = ({todos, deleteTodo}) => {
  const completeTodo = (id) => {
    // debugger
    deleteTodo(id);
  }

  return (
    <>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <button key={item.id} onClick={() => completeTodo(item.id)} >完了</button>
            {item.content}
          </div>
        )
      })}
    </>
  );
}

export default List;