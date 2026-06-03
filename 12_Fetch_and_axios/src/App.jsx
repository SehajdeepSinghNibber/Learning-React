import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  const [data,setData] = useState();

  // useEffect(()=>{
  //   fetch("http://jsonplaceholder.typicode.com/todos")
  //   .then(res=>res.json)
  //   .then(data=>setData(data))
  // })

  useEffect(()=>{
    axios.get("http://jsonplaceholder.typicode.com/todos")
    .then(res=>setData(res.data))
  })

  return (
    <>
     {data && data.map(item => {
      return <p key ={item.id}>
        {item.title}
      </p>
     })} 
    </>
  )
}

export default App
