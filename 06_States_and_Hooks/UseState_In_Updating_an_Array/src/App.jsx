import { useState } from 'react'

function App() {
  const [Array, setArray] = useState(["Alex","John"])
  const Add=()=>{
    setArray([...Array,"Sehajdeep Singh"])
  }

  const Remove=()=>{
    setArray(Array.filter(Array_element=>Array_element!=="Sehajdeep Singh"))
  }

  const Update=()=>{
    setArray(Array.map(Array_element=>Array_element==="Sehajdeep Singh"?"Sehajdeep":Array_element))
  }

  return (
    <>
    <button onClick={Remove}>Remove</button>
    <button onClick={Add}>Add</button>
    <button onClick={Update}>Update Name</button>
      <ul>
        {Array.map((Array_element,index)=>(
        <li id={index}>{Array_element}</li>))}
      </ul>
    </>
  )
}

export default App
