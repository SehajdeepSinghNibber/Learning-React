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

const User=({img,name,isMarried,age})=>{
  return(
    <section>
      <img src={img} alt={name}/>
      <h1>Name={name}</h1>
      <h1>Married = {isMarried ? "Yes" : "No"}</h1>
      <h1>Age={age}</h1>
    </section>
  )
}

export default App
