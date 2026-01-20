import React, { useState } from 'react'
import ComponentOne from "./components/ComponentOne.jsx"
import ComponentTwo from "./components/ComponentTwo.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ComponentOne
        count={count}
        onClickHandler={() => setCount(count + 1)}
      />

      <ComponentTwo
        count={count}
        onClickHandler={() => setCount(count + 1)}
      />
    </div>
  )
}

export default App
