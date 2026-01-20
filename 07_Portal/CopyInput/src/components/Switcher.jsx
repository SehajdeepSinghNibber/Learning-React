import React, { useState } from 'react'

const Switcher = () => {

    const [sw,setSW] = useState(false)
    
  return (
    <div>
        {sw ? <span>Dark</span> : <span>Light</span>}
        <br />
      <input type="text" key={sw?'dark':'light'} />
      <button onClick={()=>setSW((sw)=>!sw)}>Switch</button>
    </div>
  )
}

export default Switcher
