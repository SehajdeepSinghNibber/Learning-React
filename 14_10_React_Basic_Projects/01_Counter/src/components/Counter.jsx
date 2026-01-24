import React from 'react'
import { useState } from 'react'
import "./Counter.css"

const Counter = () => {

    const [count,setCount]=useState(0)

    const Increment=()=>{
        setCount(count+1)
    }

    const Decrement=()=>{
        setCount(count-1)
    }

  return (
    <div>
        <div className="container">
            <h1>{count}</h1>
        </div>
      <div className="btn-container">
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
      </div>
    </div>
  )
}

export default Counter
