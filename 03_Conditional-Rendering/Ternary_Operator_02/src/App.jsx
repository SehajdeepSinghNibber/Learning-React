import React, { useState } from 'react'

const ValidPassword=()=><h1>Valid Password</h1>
const InValidPassword=()=><h1>Invalid Password</h1>

const Password=({isValid})=>{
  // if(isValid){
  //   return <ValidPassword/>
  // }
  // else{
  //   return <InValidPassword/>
  // }

  return isValid?<ValidPassword/>:<InValidPassword/>
}

const App = () => {

  const [bool,setbool]=useState(true)

  return (
    <div>
      <button onClick={()=>setbool(!bool)}>Switch</button>
      <Password isValid={bool}/>
    </div>
  )
}

export default App