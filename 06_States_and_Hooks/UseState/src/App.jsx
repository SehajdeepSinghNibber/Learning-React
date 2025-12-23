import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const Increment=()=>{
    setCount(count+1)
  }

  const Decrement=()=>{
    setCount(count-1)
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>
    </>
  )
}

export default App
