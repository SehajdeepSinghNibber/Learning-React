import React from 'react'

const Person = ({name,age,qualification}) => {
  return (
    <>
      <h1>Name is: {name}</h1>
      <p>
        My speciality is: {qualification}
      <br />
        My age is: {age}
      </p>
    </>
  ) 
}

export default Person
