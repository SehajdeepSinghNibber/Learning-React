import React from 'react'

const Button=()=>{
  return(
  <button onClick={()=> console.log("You Clicked Me")}>Click</button>
  )
}

const HandleClick=()=>{
  console.log(Math.round(Math.random()*10))
}

const NewButton=()=>{
  return(
  <button onClick={ HandleClick}>Click</button>
  )
}

const App = () => {

  return (
    <>
      <Button />
      <NewButton/>
    </>
  )
}

export default App
