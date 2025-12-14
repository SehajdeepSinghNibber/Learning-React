import React from 'react'

const App = () => {
  return (
    <User 
    name='Sehajdeep Singh'
    isMarried={false}
    age={20}
    img="https://avatars.githubusercontent.com/u/187062700?v=4"
    />  
  )
}

const User=(props)=>{
  return(
    <section>
      <img src={props.img} alt={props.name}/>
      <h1>Name={props.name}</h1>
      <h1>Married = {props.isMarried ? "Yes" : "No"}</h1>
      <h1>Age={props.age}</h1>
    </section>
  )
}

export default App
