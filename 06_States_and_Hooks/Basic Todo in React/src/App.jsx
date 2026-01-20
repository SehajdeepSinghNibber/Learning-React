import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([])
  const [input,setInput] =useState("")

  const addTodo =()=>{
    setTodo([...todo,input])
    setInput('')
  }

  const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    addTodo()
  }
}

const handleDelete =(index)=>{
  setTodo(todo.filter((_, i) => i !== index))
}

  return (
    <>
    <h1>Todo List</h1>
    <input type="text" 
    placeholder='Enter todo'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    onKeyDown={handleKeyDown}
     />
    <button onClick = {addTodo}>Add</button>
     <ul>
        {todo.map((item,index)=>(
          <li key={index}>{item}<button onClick={handleDelete}>delete</button></li>
        ))}
    </ul>
    </>
  )
}

export default App
