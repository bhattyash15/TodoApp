import React from 'react'

const TodoList=({todos}) =>{
  return (
    <ul className="allTodos">
    {
        todos.map((t)=>(
            <li className="singleTodo" key={t.id}>
            <span className="todoText" >
            {t.todo}
            </span>
            <button>Edit </button>
            <button>Delete</button>
            </li>
        ))
    }
   
    </ul>
  )
}

export default TodoList;