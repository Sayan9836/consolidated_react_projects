import React from 'react'

const Todo = ({todo,dispatch,id}) => {
  return (

      <div>
         {todo.name}
        <button onClick={()=>dispatch({type:"delete-todo" ,payload:id})}>delete</button>
      </div>
          
  )
}

export default Todo                        
