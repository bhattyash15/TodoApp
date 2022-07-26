import React, { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit=(e)=>{
e.preventDefault();
if(todo!==""){
  setTodos([{id:`${todo}-${Date.now()}` ,todo},...todos]);
  setTodo("");
}
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
<TodoForm handleSubmit={handleSubmit} setTodo={setTodo} todo={todo}/>
<TodoList todos={todos}/>

      </div>
    </div>
  );
};

export default App;