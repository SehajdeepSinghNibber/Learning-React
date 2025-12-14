import React from 'react'

const App = () => {

  const styles={color:"white",backgroundColor:"teal",padding:"2rem"}

  return (
    <>
      <h1 style={{color:"red",backgroundColor:"black", padding: "2rem"}}>Hello World!</h1>
      <h1 style={styles}>Inline CSS</h1>
    </>
  )
}

export default App