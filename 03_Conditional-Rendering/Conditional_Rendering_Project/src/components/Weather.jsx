import React, { useState } from 'react'

const Weather = () => {

    const [input,setInput]=useState("")
    const [storedValue, setStoredValue] = useState(null);

    const Weatherfell=()=>{
        if (storedValue>25){
            return "Its hot outside!"
        }
        else if (storedValue>=15 && storedValue<=25){
            return "It's nice outside!"
        }
        else{
            return "It's cold outside!"
        }
    }

  return (
    <div>
      <input 
      type="number" 
      placeholder='Enter Temp' 
      value={input} 
      onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>setStoredValue(input)}>click</button>
      <p>{storedValue!==null && Weatherfell()}</p>
    </div>
  )
}

export default Weather
