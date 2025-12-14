import React from 'react'
import { useState } from 'react'
import InValidPassword from './components/InValidPassword'
import ValidPassword from './components/ValidPassword'

const App = () => {
  
  const [input,setInput]=useState("")

  let Password;

  if (input===""){
    Password=<ValidPassword/>
  }
   else{
    Password=<InValidPassword/>
  }
  

  return (
    <>
      <input type="text"
       placeholder={input}
       onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>setInput("")}>Clear</button>
      {Password}
    </>
  )
}

export default App
