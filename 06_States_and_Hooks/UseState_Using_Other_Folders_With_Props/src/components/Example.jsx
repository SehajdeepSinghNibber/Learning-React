import React, { useEffect, useState } from 'react'

const Example = () => {
    const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name')
    return savedName ? JSON.parse(savedName) : ''
  })

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleClear = () => {
    setName('')
  }

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name))
  }, [name])

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter Your Name"
        onKeyDown={(e) => e.key === "Enter" && handleClear()}
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}

export default Example
