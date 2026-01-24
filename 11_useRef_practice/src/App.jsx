import React ,{useRef} from 'react'

const App = () => {

  const inputElement = useRef(null)

  const focus=()=>{
  inputElement.current.focus()
}

  return (
    <>
      <input type="text"
      placeholder='write'
      ref={inputElement} />
      <button onClick={()=>focus()}>write</button>

      {/* We can also write it like this (cleaner way) */}
      {/* <button onClick={focus}>write</button> */}

    </>
  )
}

export default App

// import React, {useRef} from 'react'

// const App = () => {

//   const inputElement=useRef(null) 

//   const write=()=>{
//     inputElement.current.focus()
//   }

//   return (
//     <div>
//       <input type="text" ref={inputElement}/>
//       <button onClick={()=>write()}>Get To write</button>
//     </div>
//   )
// }

// export default App
