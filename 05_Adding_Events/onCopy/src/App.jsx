import React from 'react'

const CopyHandler=()=>{
  return (
  <p onCopy={()=>console.log("Stop Stealing My Content")}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestias magnam eligendi. Vitae quos modi aspernatur dolores nostrum mollitia! Quos, consequatur consequuntur id libero laborum illum deleniti at asperiores optio? Eos, placeat ratione. Porro expedita illum id amet, inventore sed libero laboriosam accusantium commodi itaque aspernatur harum, totam necessitatibus odio temporibus laborum! Quam ullam quibusdam doloremque velit placeat et totam tempore fuga. Nulla corrupti aperiam omnis a explicabo illum necessitatibus, ducimus reprehenderit inventore laborum vel velit in ipsam tempore alias odit animi incidunt ratione voluptatem! Ut commodi repellendus enim amet?
  </p>
)
}

const App = () => {
  return (
    <>
      <CopyHandler/>
    </>
  )
}

export default App
