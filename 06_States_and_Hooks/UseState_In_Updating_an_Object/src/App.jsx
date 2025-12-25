import { useState } from 'react'

function App() {
  const [Movie, setMovie] = useState({
    title:"3 Idiots",
    Ratings:9
  })


  const handleClick=()=>{
    // const copyMovie={...Movie, Ratings:8}

    // setMovie(copyMovie)

    setMovie({...Movie,Ratings:Movie.Ratings-1})
  }

  const handleClickPlus=()=>{
    setMovie({...Movie,Ratings:Movie.Ratings+1})
  }

  const handleClick5=()=>{
    setMovie({...Movie,Ratings:5})
  }

  return (
    <>
    <h1>{Movie.title}</h1>
    <p>{Movie.Ratings}</p>
    <button onClick={handleClick}>Decrease Rating</button>
    <button onClick={handleClickPlus}>Increase Rating</button>
    <button onClick={handleClick5}>Change Rating to 5</button>
    </>

  )
}

export default App
