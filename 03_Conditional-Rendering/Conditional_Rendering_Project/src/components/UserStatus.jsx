import React from 'react'
import { useState } from 'react';

const UserStatus = () => {

    const [loggedIn,isLoggedIn]=useState(false)
    const [Admin, setAdmin] = useState(false);
    const [login,setLogin]= useState("Login")

    const display=()=>{
        if (loggedIn && Admin){
            return"Welcome Admin!"
        }
        else if(loggedIn && !Admin){
            return"Welcome User!"
        }
        else{
            return""
        }
    }

    const handleLogin = () => {
    isLoggedIn(!loggedIn);
    setLogin(loggedIn ? "Login" : "Logout")
    };

  return (
    <div>
      <button onClick={()=>setAdmin(!Admin)}>Admin</button>
      <button 
      onClick={()=>handleLogin()}>{login}</button>
      {display()}
    </div>
  )
}

export default UserStatus
