import React from 'react'
import Person from './Components/Person'
import Product
 from './Components/Product'
const App = () => {
  return (
    <>
      <Person 
      name="Sehajdeep Singh"
      qualification="FullStack Dev"
      age={20}/>

      <Product 
      name="IPHONE 17"
      price={999}/>
    </>
  )
}

export default App
