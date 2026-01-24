import React, {useRef} from 'react'

function App() {

  const inputElement = useRef(null)

  const focusInput=()=>{
    inputElement.current.focus()
    inputElement.current.value='Sehajdeep'
  }

  return (
    <>
      <input type="text" ref={inputElement}/>
      <button onClick={()=>focusInput()}>Focus & it will write Sehajdeep</button>
    </>
  )
}

export default App
