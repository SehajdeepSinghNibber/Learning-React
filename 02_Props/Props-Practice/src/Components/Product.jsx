import React from 'react'

const Product = (props) => {
  return (
    <>
      <h1>
        The Product is: {props.name}
      </h1>
      <p>
        It's Price is: ${props.price}
      </p>
    </>
  )
}

export default Product
