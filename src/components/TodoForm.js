import React from 'react'

const TodoForm=({handleSubmit,setTodo,todo,editId}) =>{
  return (


    <form className="todoForm" onSubmit={handleSubmit}>
<input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
<button type="submit">{editId ? "Edit":"GO"}</button>
</form>
  )
}
 export default TodoForm;