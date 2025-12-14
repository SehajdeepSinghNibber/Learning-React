import React from 'react'

const Cart=()=>{

  const items=["Wireless Earbuds","Powerbank","New SSD","Hoddie"]

  return(
    <>
      <h1>
        Cart 
      </h1>
      {items.length>0 && <h2>Items in your cart are {items.length}</h2>}
      <ul>
        <h4>Products</h4>
        
        {items.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
      </>
  )
}

const App = () => {
  return (
    <>
     <Cart/>
    </>
  )
}

export default App