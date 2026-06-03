import React, { useState } from 'react'
import "./app.css"

const App = () => {

  const [background, setBackground] = useState('white')
  const [textColor, setTextColor] = useState('#1b1b1b')
  const [buttonStyle, setButtonStyle] = useState('#1b1b1b')

  const handleClick = () => {
    setBackground(background === 'white' ? '#1b1b1b' : 'white')
    setTextColor(background === 'white' ? 'red' : '#ffa31a')
    setButtonStyle(background === 'white' ? 'white' : '#1b1b1b')
  }

  return (
    <>
      <div style={{ backgroundColor: background, color: textColor, minHeight: '100vh' }}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
            padding: '10px 20px',
            cursor: 'pointer'
          }}
        >
          {background === '#1b1b1b' ? "Black Theme" : "White Theme"}
        </button>

        <section className="content">
          <h1>
            Welcome To A <br />
            Real World...
          </h1>
        </section>
      </div>
    </>
  )
}

export default App
