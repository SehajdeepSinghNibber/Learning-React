import { useState } from 'react'
function App() {

const[movies,setMovies] = useState([
  {
    id:1,title:'Spiderman',rating:7
},
{
    id:2,title:'Superman',rating:8
},
{
    id:3,title:'Batman',rating:9
}

])


const handleClick=()=>{
  setMovies(movies.map((movie)=>(movie.id===1?{...movie,title:'John Wick'}:movie))
)}
  return (
    <>
    {movies.map((movie,id)=>(
      <li id={id}>{movie.id}  {movie.title}  {movie.rating}</li>
    ))}

    <button onClick={handleClick}>Change Name</button>
    </>
  )
}

export default App
