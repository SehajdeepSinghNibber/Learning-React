import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {

  const [value,setValue] = useState(0)

  useEffect(()=>{
    console.log("Call useEffect")
    document.title = `Increment ${value}`,
    [value]
  })

  const handleClick=()=>{
    setValue(value+1)
  }

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
