
import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Componets/Todo';
import { addTodo, deleteTodo, getTodo, updateTodo } from './Utilis/HandleApi';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const[todoId, setTodoId] = useState("")

  useEffect(() =>{
    getTodo(setTodos)
  },[])

  const updateMode =(_id, text)=>{
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Todo Here....."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="add"
            onClick={isUpdating ? ()=>updateTodo(todoId, text, setText, setTodos, setIsUpdating):  () => {
              if (text.trim() === "") {
                alert("Please enter a todo before adding.");
              } else {
                addTodo(text, setText, setTodos);
              }
            }}
          >
           {isUpdating ? "Update":"Add"}
          </button>
        </div>
        <div className="list">
          {todos.map((ele) => (
            <Todo
             key={ele._id} 
             text={ele.text} 
             updateMode={() => updateMode(ele._id, ele.text)}
             deleteTodo={() => deleteTodo(ele._id, setTodos)}
             />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
