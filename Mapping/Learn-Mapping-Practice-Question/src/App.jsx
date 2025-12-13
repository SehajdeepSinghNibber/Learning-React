import React from 'react'
import Data from './Data/Data'

const App = () => {
  return (
    <ul>
      {Data.map(({Name,Email,Domain},index)=>(
          <li key={index}>
            My name is {Name} and my email is {Email} and my domain is {Domain}.
          </li>
      ))}
    </ul>
  )
}

export default App
