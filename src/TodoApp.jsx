import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/slices/apis/todoApi'

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
    // const {data:todos = [],isLoading} = useGetTodosQuery();
    const {data:todo,isLoading} = useGetTodoQuery(todoId);
    const nextTodoId = ()=> {
      setTodoId(todoId+1);
      
    }
    const prevTodoId = ()=> {
      if(todoId === 1) return;
      setTodoId(todoId-1);

    } 
  return (
    <>
        <h1>Todos - RTX Query</h1>
        <hr />
        <h4>IsLoading:{isLoading ? 'True': 'False'}</h4>
        <h4>IsFetching</h4>
        <h3>{isLoading ? 'Cargando...': null}</h3>
        <pre>{JSON.stringify( todo)}</pre>
        <button onClick={nextTodoId}>Next Todo</button>
        <button onClick={prevTodoId}>Prev Todo</button>

        {/* <ul>
            {todos.map(todo => {
                return <li key={todo.id}><strong>{todo.completed ? 'Done ': 'Pending '}</strong>{todo.title}</li>
            })}
        </ul> */}
    </>
  )
}
