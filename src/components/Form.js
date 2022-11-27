import { useState } from "react";
import Button from '@material-ui/core/Button';

const Form = ({createTodos}) => {
  const [content, setContent] = useState("");
  const addTodo = (e) => {
    e.preventDefault();

    createTodos(content);
  }
  return (
    <div>
      <form onSubmit={addTodo}>
      <input
        type="text"
        value={content} 
        onChange={(e) => {setContent(e.target.value)}}
      />
      <button>追加</button>
      {/* {content} */}
      </form>
    </div>
  )
}

export default Form