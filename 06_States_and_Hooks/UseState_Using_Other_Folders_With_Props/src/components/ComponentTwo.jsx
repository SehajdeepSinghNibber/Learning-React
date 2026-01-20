import React, { useState } from 'react'

const ComponentTwo = () => {

    const [count,setCount] = useState(()=>{
        const initialValue = 10
        return initialValue
    })

    const decrement=()=>{
       setCount((prevCount)=>prevCount-1) 
    }

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default ComponentTwo
